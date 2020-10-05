const cli = require("./cli");
const dataInput = require("./dataInput");

const engine = () => {
  const shift = Number(cli.shift);
  dataInput(cli.input, cli.output, shift, cli.action);
};

module.exports = engine;
