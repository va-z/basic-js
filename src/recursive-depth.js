const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    else if (arr.length === 0) return 1;
    else {
      return 1 + Math.max(...arr.map(this.calculateDepth.bind(this)));
    }
  }
};
