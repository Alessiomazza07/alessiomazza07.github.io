import { argv } from 'node:process';

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// node parametri2.mjs one two=three four

// Output:
// 0: /path/to/node
// 1: /path/to/parametri2.mjs
// 2: one
// 3: two=three
// 4: four
