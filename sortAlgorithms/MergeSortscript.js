function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  function logArray(arr) {
    console.log(arr.join(' '));
  }
  
  function mergeSortAndLog(arr) {
    logArray(arr);
    arr = mergeSort(arr);
    logArray(arr);
  }
  
  // Test the function
  const numbers = [8, 2, 6, 1, 9, 5, 7, 3, 12, 4, 11, 10];
  mergeSortAndLog(numbers);
  