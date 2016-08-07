var Data = function() {
  this.data = [];
};

Data.prototype.getAt = function(index) {
  if (!this.data[index]) {
    return 0;
  }

  return this.data[index];
};

Data.prototype.incAt = function(index) {
  this.data[index] = (this.getAt(index) + 1)%256;
  return this[index];
};

Data.prototype.decAt = function(index) {
  this.data[index] = (this.getAt(index) - 1)%256;
  return this[index];
};

Data.prototype.storeAt = function(index, data) {
  this.data[index] = data;
  return this.data[index];
};

module.exports = Data;
