function bubbleSort(arr) {
    var len = arr.length;
    var sorted = false;
    
    while (!sorted) {
      sorted = true;
      
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          sorted = false;
        }
      }
      
      console.log([...arr]); // Log the updated array after each iteration
    }
    
    return arr;
  }
  
  // Example usage:
  var numbers = [12, 5, 8, 3, 1, 9, 11, 4, 7, 2, 10, 6];
  bubbleSort(numbers);
  