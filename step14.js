function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }
  
  console.log(getIndexToIns([40, 60], 50));