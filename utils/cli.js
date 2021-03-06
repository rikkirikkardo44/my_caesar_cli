const { program } = require("commander");

program.storeOptionsAsProperties(false).passCommandToAction(false);

program
  .name("my_caesar_cli")
  .requiredOption("-s, --shift <shift>", "shift for encode/decode data")
  .option("-i, --input <input>", "input file")
  .option("-o, --output <output>", "output file")
  .requiredOption("-a, --action <action>", "action for encode or decode file");

program.parse(process.argv);

const programOptions = program.opts();

if (programOptions.action !== 'encode' && programOptions.action !== 'decode') {
  process.stderr.write('Error: --action must be "encode" or "decode"')
  process.exit()
}

module.exports = programOptions;