// // 1-Always Hungry
function alwaysHungry(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      count++;
    }
  }
  if (count == 0) {
    console.log("I'm hungry");
  }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);

// 2-High Pass Filter
function highPass(arr, cutoff) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

// // 3-Better than average
function betterThanAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let moy = sum / arr.length;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > moy) {
      count++;
    }
  }
  return count;
}

let result2 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result2); // we expect back 4

// // 4-Array Reverse
function reverse(arr) {
  let reverse = [];
  for (let i = 0; i < arr.length; i++) {
    reverse.push(arr[arr.length - 1 - i]);
  }
  return reverse;
}

let result3 = reverse(["a", "b", "c", "d", "e"]);
console.log(result3); // we expect back ["e", "d", "c", "b", "a"]

// 5-Fibonacci Array
function fibonacciArray(n) {
  // the [0, 1] are the starting values of the array to calculate the rest from
  let fibArr = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    let prev = fibArr[fibArr.length - 1];
    let prevprev = fibArr[fibArr.length - 2];
    fibArr.push(prev + prevprev);
  }

  return fibArr;
}

let result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
