var Input = function(input) {
  this.pointer = 0;
  this.input = input;
};

Input.prototype.accept = function() {
  return this.input[this.pointer++].charCodeAt();
};

module.exports = Input;
