var fuck = function(line, data, input) {
  var output = [], code = "";
  do {
    code = line.next();
    switch(code) {
      case '>':
        data.incPtr();
        break;
      case '<':
        data.decPtr();
        break;
      case '+':
        data.inc();
        break;
      case '-':
        data.dec();
        break;
      case '.':
        output.push(String.fromCharCode(data.get()));
        break;
      case ',':
        data.store(input.accept());
        break;
      case '[':
        if (data.get() === 0) {
          line.fwd();
        }
        break;
      case ']':
        if (data.get() !== 0) {
          line.rwd();
        }
        break;
    }
  } while(code !== undefined);

  return output.join("");
};

module.exports = fuck;
