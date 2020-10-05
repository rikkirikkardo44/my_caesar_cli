const fs = require("fs").promises;
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
    // try {
    //   const stats = await fs.stat(input);
    //   if (!stats.isFile()) {
    //     process.stderr.write("Error: incoming path not to file");
    //   }
    // } catch(e) {
    //   process.stderr.write("Error: can`t read file");
    // }
    const acces = await fs.access(input)
    console.log(acces)
    // fs.stat(input)
    //   .then((stats) => {
    //     if (!stats.isFile()) {
    //       // process.stderr.write("Error: incoming path not to file");
    //       console.error("Error: incoming path not to file")
    //       return null
    //     }
    //   })
    //   .catch((e) => {
    //     // process.stderr.write("Error: can`t read file");
    //     console.error("Error: can`t read file")
    //     return null;
    //   });

    const data = await fs.readFile(input, "utf-8");
    const transformData = transform(data, shift, action) + `\n`;
    dataOutput(transformData, outputPath);
  }
};

module.exports = dataInput;
