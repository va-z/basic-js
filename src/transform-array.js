const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Invalid Argument: Array Required");

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (/^--(discard|double)-(next|prev)$/.test(arr[i])) continue;

    res.push(arr[i]);

    if (arr[i - 1] === "--discard-next") {
      res.pop();
      continue;
    }
    if (arr[i - 1] === "--double-next") res.push(arr[i]);

    if (arr[i + 1] === "--discard-prev") {
      res.pop();
      continue;
    }
    if (arr[i + 1] === "--double-prev") res.push(arr[i]);
  }

  return res;
};
