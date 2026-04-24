function miniMaxSum(arr) {
    // Write your code here
    const sortedArray = arr.sort()
    let minSum = 0;
    let maxSum = 0;
    for(let i=0; i< arr.length -1; i++) {
        minSum += sortedArray[i]
        maxSum += sortedArray.reverse()[i]
    }
    console.log(minSum, maxSum)
}