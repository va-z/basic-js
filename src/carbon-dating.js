const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    isNaN(parseFloat(sampleActivity)) ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity <= 0
  ) {
    return false;
  } else {
    const k = 0.693 / HALF_LIFE_PERIOD;
    const ln = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
    return Math.ceil(ln / k);
  }
};
