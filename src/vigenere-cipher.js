const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("ERROR");
  
    message = message.toUpperCase();
    key = key.toUpperCase();

    let cypher = "";
    let j = 0;
    for (const char of message) {
      const m_i = char.charCodeAt() - 65;
      const k_i = key[j % key.length].charCodeAt() - 65;
  
      if (m_i >= 0 && m_i < 26){
        const c_i = (m_i + k_i) % 26;
        cypher += String.fromCharCode(c_i + 65);
        j++;
      } else {
        cypher += char;
      }
    }

    return this.isDirect ? cypher : cypher.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("ERROR");
  
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let cypher = "";
    let j = 0;
    for (const char of encryptedMessage) {
      const c_i = char.charCodeAt() - 65;
      const k_i = key[j % key.length].charCodeAt() - 65;

      if (c_i >= 0 && c_i < 26){
        const m_i = (c_i - k_i + 26) % 26;
        cypher += String.fromCharCode(m_i + 65);
        j++;
      } else {
        cypher += char;
      }
    }

    return this.isDirect ? cypher : cypher.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
