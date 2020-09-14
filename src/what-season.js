const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  else if (typeof date !== "object") throw new Error("Invalid argument");

  for (let prop of Object.getOwnPropertyNames(Date.prototype)) {
    if (date[prop] !== Date.prototype[prop]) throw new Error("Very funny");
  }

  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      return "winter";
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "fall";
  }
};
