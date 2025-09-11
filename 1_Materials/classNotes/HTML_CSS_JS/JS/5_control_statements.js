// ===== CONTROL STATEMENTS =====

// Looping
for (let i = 1; i <= 3; i++) {
  console.log("For loop:", i);
}

let j = 1;
while (j <= 3) {
  console.log("While loop:", j);
  j++;
}

let k = 1;
do {
  console.log("Do-while loop:", k);
  k++;
} while (k <= 3);

// break & continue
for (let n = 1; n <= 5; n++) {
  if (n === 3) break; // exits loop completely
  console.log("Break example:", n);
}

for (let n = 1; n <= 5; n++) {
  if (n === 3) continue; // skips only this iteration
  console.log("Continue example:", n);
}
