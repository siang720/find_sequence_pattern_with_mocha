const solution = require("./solution");
const expect = require("chai").expect;

describe("solution test", function() {
  it("Arithmetic", function() {
    expect(solution("1 2 3")["Arithmetic"].toString()).to.be.equal(
      [4, 5, 6, 7, 8, 9, 10, 11, 12, 13].toString()
    );
    expect(solution("4 5 6 7")["Arithmetic"].toString()).to.be.equal(
      [8, 9, 10, 11, 12, 13, 14, 15, 16, 17].toString()
    );
  });
  it("Geometric", function() {
    expect(solution("1 2 4")["Geometric"].toString()).to.be.equal(
      [8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096].toString()
    );
    expect(solution("1 3 9")["Geometric"].toString()).to.be.equal(
      [27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441].toString()
    );
  });
  it("Fibonacci", function() {
    expect(solution("0 1 1")["Fibonacci"].toString()).to.be.equal(
      [2, 3, 5, 8, 13, 21, 34, 55, 89, 144].toString()
    );
  });
  it("MultiplyAndAdd", function() {
    expect(solution("4 14 34")["MultiplyAndAdd"].toString()).to.be.equal(
      [74, 154, 314, 634, 1274, 2554, 5114, 10234, 20474, 40954].toString()
    );
  });
  it("SquareNumber", function() {
    expect(solution("4 9 16")["Square"].toString()).to.be.equal(
      [25, 36, 49, 64, 81, 100, 121, 144, 169, 196].toString()
    );
  });
  it("Triangular", function() {
    expect(solution("1 3 6")["Triangular"].toString()).to.be.equal(
      [10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105].toString()
    );
  });
});
