const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  else {
    return members
      .reduce((letters, str) => {
        if (typeof str === "string")
          letters.push(str.match(/\w/i)[0].toUpperCase());
        return letters;
      }, [])
      .sort()
      .join("");
  }
};
