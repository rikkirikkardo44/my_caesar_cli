const fs = require("fs").promises;
const {existsSync} = require("fs");
const transform = require("./encoder");
const path = require("path");
const dataOutput = require("./dataOutput");

const dataInput = async (inputPath, outputPath, shift, action) => {
  if (inputPath === undefined) {
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => {
      const transformData = transform(chunk, shift, action);
      dataOutput(transformData, outputPath);
    });
  } else {
    const input = path.join(__dirname, "../", inputPath);
    if (!existsSync(input)) {
      process.stderr.write("Error: can not read input file");
      process.exit();
    } else {
      const data = await fs.readFile(input, "utf-8");
      const transformData = `${transform(data, shift, action)}\n`;
      dataOutput(transformData, outputPath);
    }
  }
};

module.exports = dataInput;
