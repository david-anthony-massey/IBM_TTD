const isPalindrome = phrase => {
  if (phrase === '') throw new Error('empty strings are not palindromes');
  if (typeof phrase !== 'string') throw new Error('input must be a string');
  if (phrase.trim() === '') return false;
  return (
    phrase ===
    phrase
      .split('')
      .reverse()
      .join('')
  );
};

module.exports = { isPalindrome };
