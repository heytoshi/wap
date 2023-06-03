const exerciseOne = function (array) {
  return array.filter((x) => x > 20).reduce((a, b) => a + b, 0);
}

const exerciseTwo = function (array) {
  return array
    .filter((e) => e.length >= 5 && e.includes("a"))
    .map((e) => e);
};
