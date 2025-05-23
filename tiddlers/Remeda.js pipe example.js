// Get first 3 unique values
const DATA = [1, 2, 2, 3, 3, 4, 5, 6];

const result = R.pipe(
  DATA,
  R.map((x) => {
    console.log("iterate", x);
    return x;
  }),
  R.unique(),
  R.take(3),
); // => [1, 2, 3]

// Console output:
// iterate 1
// iterate 2
// iterate 2
// iterate 3