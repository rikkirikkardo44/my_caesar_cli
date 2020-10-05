const fs = require("fs").promises;
const path = require("path");

const dataOutput = (data, outputPath) => {
  if (outputPath === undefined) {
    process.stdout.write(data);
  } else {
    const output = path.join(__dirname, "../", outputPath);
    fs.appendFile(output, data, "utf-8");
  }
};

module.exports = dataOutput;
