function bucketSort(arr) {
  let maxVal = Math.max(...arr);
  let bucket = Array.from({ length: maxVal + 1 }, () => []);

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    bucket[value].push(value);
  }

  let sortedArr = [];

  for (let j = 0; j < bucket.length; j++) {
    if (bucket[j].length > 0) {
      sortedArr = sortedArr.concat(bucket[j]);
    }
    console.log([...sortedArr]); // Log the updated array after each iteration
  }

  return sortedArr;
}

// Example usage:
let numbers = [12, 5, 8, 3, 1, 9, 11, 4, 7, 2, 10, 6];
bucketSort(numbers);
