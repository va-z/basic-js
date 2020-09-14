const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.directMode = mode;
  }

  encrypt(sourceMessage, key) {
    if (arguments.length < 2) throw new Error("Needs two arguments");

    const res = [];
    sourceMessage = sourceMessage.toUpperCase();
    key = key.toUpperCase();
    const sourceLength = sourceMessage.length;
    const keyLength = key.length;

    for (let i = 0, j = 0; i < sourceLength; i++) {
      if (!/[A-Z]/.test(sourceMessage[i])) res.push(sourceMessage[i]);
      else {
        const M = sourceMessage[i].codePointAt() - 65;
        const K = key[j].codePointAt() - 65;
        const C = 65 + ((M + K) % 26);
        res.push(String.fromCodePoint(C));

        j = (j + 1) % keyLength;
      }
    }

    return this.directMode ? res.join("") : res.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (arguments.length < 2) throw new Error("Needs two arguments");

    const res = [];
    key = key.toUpperCase();
    const encryptedLength = encryptedMessage.length;
    const keyLength = key.length;

    for (let i = 0, j = 0; i < encryptedLength; i++) {
      if (!/[A-Z]/.test(encryptedMessage[i])) res.push(encryptedMessage[i]);
      else {
        const C = encryptedMessage[i].codePointAt() - 65;
        const K = key[j].codePointAt() - 65;
        const M = 65 + ((C - K + 26) % 26);
        res.push(String.fromCodePoint(M));

        j = (j + 1) % keyLength;
      }
    }

    return this.directMode ? res.join("") : res.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
