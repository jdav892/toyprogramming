class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Math.min(...args);
    return min;
  }

} 

// function sumOfMinimums(arr) {
//  return arr.reduce((p, c) => p + Math.min(...c), 0);
//}

//function sumOfMinimums(arr) {
//  let total = 0;
//  
//  for (let i = 0; i < arr.length; i++){
//   total += Math.min(...arr[i])
//  }
//  
//  return total;
//}