const isPalindrome = string => {
  if (string.trim() === '') return false;
  return (
    string ===
    string
      .split('')
      .reverse()
      .join('')
  );
};

module.exports = { isPalindrome };
