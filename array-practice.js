const findMinimum = arr => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;

};

const runningSum = arr => {
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i-1];
  }
  return arr;
};

const evenNumOfChars = arr => {
  let evenTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length % 2 === 0){
      evenTotal++;
    }
  }

  return evenTotal;

};

const smallerThanCurr = arr => {
  let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let count = 0;
  //   if (findSmallNum(arr[i], arr[i+1]))
  // }
};

const findSmallNum = (arr, num) => {
  if (num1 > num2) {
    return true;
  }
}

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    return helpTwoSum(arr, arr[i], target);
  }
  //return false;
};

const helpTwoSum = (arr, num, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + num === target) {
      return true;
    }
  }
  return false;
}

const secondLargest = arr => {
  let max = arr[0];
  let secMax = arr[0];

  if (arr.length <= 1) {
    return;
  }

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] < max) {
      if(arr[i] >= secMax) {
        secMax = arr[i];
      }
    } else if (arr[i] > max) {
      max = arr[i];
    }
    }


  return secMax;
};

// const helpFindSecondLarge = (max, num) => {
//   if (num > max) {
//     return true;
//   }
// }

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
