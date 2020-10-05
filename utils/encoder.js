const encoder = (data, step, action) => {
  const lowerLatinAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperLatinAlphabet = lowerLatinAlphabet.toUpperCase();
  const shift =
    step > lowerLatinAlphabet.length ? step % lowerLatinAlphabet.length : step;
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
      const increment =
        idx + shift > 25
          ? idx + shift - currentAlphabetCase.length
          : idx + shift;
      const decrement =
        idx - shift < 0
          ? currentAlphabetCase.length + idx - shift
          : idx - shift;
      const encodeAction = action === "encode" ? increment : decrement;
      return currentAlphabetCase[encodeAction];
    })
    .join("");
  return result;
};

module.exports = encoder;
