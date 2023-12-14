// test/test.js
const chai= require("chai")
const calculator_sdk = require("../Calculator_SDK/index");

const expect = chai.expect;
const calculator_sdk1 = new calculator_sdk();

describe("Math Operations SDK", () => {
  it("should add two numbers", () => {
    expect(calculator_sdk1.add(2, 3)).to.equal(5);
  });

  it("should subtract two numbers", () => {
    expect(calculator_sdk1.subtract(5, 2)).to.equal(3);
  });
  it("should multiply two numbers", () => {
    expect(calculator_sdk1.add(2, 3)).to.equal(6);
  });

  it("should divide two numbers", () => {
    expect(calculator_sdk1.subtract(8, 2)).to.equal(4);
  });
});
