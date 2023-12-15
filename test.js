// test/test.js
import chai from "chai";
import { calculator_sdk } from "./index.js";

const expect = chai.expect;
const cal = new calculator_sdk();

describe("Math Operations SDK", () => {
  it("should add two numbers", () => {
    expect(cal.add(2,3)).to.equal(5);
  });

  it("should subtract two numbers", () => {
    expect(cal.subtract(5,2)).to.equal(3);
  });
  it("should multiply two numbers", () => {
    expect(cal.multiply(2,3)).to.equal(6);
  });

  it("should divide two numbers", () => {
    expect(cal.divide(8,2)).to.equal(4);
  });
});
