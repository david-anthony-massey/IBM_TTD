const isPalindrome = phrase => {
  if (phrase === '') throw new Error('empty strings are not palindromes');
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
