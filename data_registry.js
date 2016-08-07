var DataRegistry = function(data) {
  this.data = data;
  this.ptr = 0;
};


DataRegistry.prototype.incPtr = function() {
  return this.ptr++;
};

DataRegistry.prototype.decPtr = function() {
  return this.ptr--;
};

DataRegistry.prototype.inc = function() {
  return this.data.incAt(this.ptr);
};

DataRegistry.prototype.dec = function() {
  return this.data.decAt(this.ptr);
};

DataRegistry.prototype.get = function() {
  return this.data.getAt(this.ptr);
};

DataRegistry.prototype.store = function(data) {
  return this.data.storeAt(this.ptr, data);
};

module.exports = DataRegistry;
