const exerciseOne = function (arr) {
  return arr.filter((x) => x > 20).reduce((a, b) => a + b, 0);
}

const exerciseTwo = function (arr) {
  return arr
    .filter((e) => e.length >= 5 && e.includes("a"))
    .map((e) => e);
};
