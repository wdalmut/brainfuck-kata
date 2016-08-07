var fuck = require("./../fuck"),
    Input = require('./../input'),
    Data = require('./../data'),
    Code = require('./../code'),
    DataRegistry = require('./../data_registry');

describe("Fuck", function() {
  describe("Functional", function() {
    it("Should decode", function() {
      expect(fuck(new Code(",+[-.,+]"), new DataRegistry(new Data()), new Input("Codewars"+String.fromCharCode(255)))).toEqual("Codewars");
    });

    it("Should decode until 0", function() {
      expect(fuck(new Code(",[.[-],]"), new DataRegistry(new Data()), new Input("Codewars"+String.fromCharCode(0)))).toEqual("Codewars");
    });

    it("Should decode a different thing", function() {
      expect(fuck(new Code(",>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>."), new DataRegistry(new Data()), new Input(String.fromCharCode(8,9)))).toEqual(String.fromCharCode(72));
    });
  });
});
