var Data = require('./../data');

describe("Data", function() {
  it("return 0 for undefined", function() {
    expect(new Data().getAt(10)).toBe(0);
  });

  it("return a valid number for negatives", function() {
    var data = new Data();
    data.incAt(-1);
    expect(data.getAt(-1)).toBe(1);
  });

  it("return a valid number for negatives on multiple inc", function() {
    var data = new Data();
    data.incAt(-1);
    data.incAt(-1);
    expect(data.getAt(-1)).toBe(2);
  });

  it("return a valid number for positives on multiple inc", function() {
    var data = new Data();
    data.incAt(0);
    data.incAt(0);
    expect(data.getAt(0)).toBe(2);
  });
});
