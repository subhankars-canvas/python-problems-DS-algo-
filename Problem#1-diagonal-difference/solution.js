function diagonalDifference(arr) {
    let diagonalSumA = 0
    let diagonalSumB = 0
    // Write your code here
    for (let i=0; i<arr.length; i++) {
      for (let j=0; j< arr[i].length; j++) {
        if (i === j) {
          diagonalSumA += arr[i][j]
          diagonalSumB += arr[i].reverse()[j]
        }
      }
      //console.log(arr[i].reverse())
    }
    return Math.abs(diagonalSumA - diagonalSumB)
}

// one can use array.reduce as well