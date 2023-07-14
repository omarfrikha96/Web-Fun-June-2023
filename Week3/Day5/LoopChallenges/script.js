1-Print odds 1-20
for (let i = 1; i < 21; i++) {
  let result = i / (1 - i);
  console.log(result);
}

2-Decreasing Multiples of 3
for (let i = 100; i > -1; i--) {
    if (i % 3 ==0){
        console.log(i);
    }
  }

3-Print the sequence
for (let i = 4; i > -4; i-= 1.5) {
        console.log(i);
    }

4-Sigma
let sum = 0;
for (let i = 1; i < 101; i++) {
  sum += i;
  console.log(sum);
}

5-Factorial
let product = 1;
for (let i = 1; i < 13; i++) {
    product *= i;
  console.log(product);
}