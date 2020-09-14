const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = {}
) {
  const makeSub = (n, s1, s2) =>
    n < 2 ? `${s1}` : `${s1}` + `${s2}` + makeSub(n - 1, s1, s2);
  const appendix = makeSub(additionRepeatTimes, addition, additionSeparator);
  return makeSub(repeatTimes, `${str}${appendix}`, separator);
};
