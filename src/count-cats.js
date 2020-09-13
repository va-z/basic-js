const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((result, row) => {
    return result + row.reduce((acc, i) => acc + (i === "^^"), 0);
  }, 0);
};
