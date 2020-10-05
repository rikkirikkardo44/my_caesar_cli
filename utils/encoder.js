const encoder = (data, shift, action) => {
  const lowerLatinAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperLatinAlphabet = lowerLatinAlphabet.toUpperCase();
  const dataArr = data.split("");
  const result = dataArr
    .map((letter) => {
      if (
        !lowerLatinAlphabet.includes(letter) &&
        !upperLatinAlphabet.includes(letter)
      ) {
        return letter;
      }
      const currentAlphabetCase = lowerLatinAlphabet.includes(letter)
        ? lowerLatinAlphabet
        : upperLatinAlphabet;
      const idx = currentAlphabetCase.indexOf(letter);
      const encodeAction = action === "encode" ? idx + Number(shift) : idx - Number(shift);
      return currentAlphabetCase[encodeAction];
    })
    .join("");
  return result;
};

module.exports = encoder;