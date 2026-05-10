((n, k, ar) => {
let validPairCount = 0
  for (let i =0; i< n ; i++) {
      for (j=i+1; j<n; j++) {
          if ((ar[i]+ar[j]) % k === 0) {
              validPairCount++
          }
      }
  }
  console.log(validPairCount)
})(6,3,[1, 3, 2, 6, 1, 2])
// brutforce soln.