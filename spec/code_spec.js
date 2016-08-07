var Code = require('./../code');

describe("Code", function() {
  it("move forward", function() {
    var code = new Code('[-.,+]w');
    code.next(); // emulate
    expect(code.fwd().toString()).toEqual("w");
  });

  it("move backward", function() {
    var code = new Code('[-.,+]w');
    code.next();
    code.next();
    code.next();
    code.next();
    code.next();
    code.next();
    expect(code.rwd().toString()).toEqual("-.,+]w");
  });

  it("move forward to end", function() {
    var code = new Code('[-.,+]');
    code.next(); // emulate
    expect(code.fwd().next()).toBe(undefined);
  });

  it("move backward in a short list", function() {
    var code = new Code('[-]');
    code.next();
    code.next();
    var a = code.next();
    expect(code.rwd().toString()).toEqual("-]");
  });
});
