var Input = require('./../input');

describe("Data", function() {
  it("accept a byte code from input", function() {
    expect(new Input("ciao").accept()).toEqual("c".charCodeAt());
  });

  it("accept a several byte codes from input", function() {
    var input = new Input("ciao");
    input.accept();
    expect(input.accept()).toEqual("i".charCodeAt());
  });
});
