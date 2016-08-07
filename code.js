var Code = function(code) {
  this.code = code;
  this.ptr = 0;
};

Code.prototype.next = function() {
  return this.code[this.ptr++];
};

Code.prototype.prev = function() {
  return this.code[this.ptr--];
};

Code.prototype.fwd = function() {
  count = 1;
  do {
    var c = this.next();
    if (c === "[") {
      ++count;
    }
    if (c === "]") {
      --count;
    }
  }while(count > 0);

  return this;
};

Code.prototype.rwd = function() {
  count = 1;
  this.prev();
  this.prev();
  do {
    var c = this.prev();
    if (c === "]") {
      ++count;
    }
    if (c === "[") {
      --count;
    }
  }while(count > 0);


  this.next();
  this.next();
  return this;
};

Code.prototype.toString = function() {
  return this.code.slice(this.ptr);
};

module.exports = Code;

