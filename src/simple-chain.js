const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chains: "",
  getLength() {
    return this.chains.split("~~").length;
  },
  addLink(value) {
    this.chains += !this.chains ? `( ${value} )` : `~~( ${value} )`
    return this;
  },
  removeLink(position) {
    if (position < 1 || position >= this.getLength()) {
      this.chains = "";
      throw new Error("ERROR");
    }
    const arr = this.chains.split("~~");
    arr.splice(position - 1, 1);
    this.chains = arr.join("~~");
    return this;
  },
  reverseChain() {
    this.chains = this.chains.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    const cache = this.chains;
    this.chains = ""
    return cache;
  }
};

module.exports = chainMaker;
