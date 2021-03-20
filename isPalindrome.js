const isPalindrome = string =>
  string ===
  string
    .split('')
    .reverse()
    .join('');

module.exports = { isPalindrome };
