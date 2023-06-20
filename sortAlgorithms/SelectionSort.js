function selectionSort(array) {
    let len = array.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap the elements
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
  
      console.log(`Iteration ${i + 1}: [${array}]`);
    }
  
    console.log('Sorting completed:', array);
  }
  
  // Usage example
  let numbers = [9, 5, 7, 2, 4, 1, 8, 6, 3, 12, 10, 11];
  selectionSort(numbers);
  