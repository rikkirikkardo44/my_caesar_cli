const fs = require("fs").promises;
const path = require("path");
const { existsSync } = require("fs");

const dataOutput = (data, outputPath) => {
  if (outputPath === undefined) {
    process.stdout.write(data);
  } else {
    const output = path.join(__dirname, "../", outputPath);
    if (!existsSync(output)) {
      console.error("Error: can not read output file");
      return;
    } else {
      fs.appendFile(output, data, "utf-8");
    }
  }
};

module.exports = dataOutput;
