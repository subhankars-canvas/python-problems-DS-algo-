function birthday(s, d, m) {
    // Write your code here
    // const day = d; // sum
    // const month = m; // length
    // basically the sliding window problem
    let waysCount = 0;
    for (let k=0; k<s.length - m+1; k++) {
        let window = s.slice(k, k+m)
        let windowSum = window.reduce((acc, cv) => acc + cv, 0)
        if (windowSum === d) {
           waysCount++ 
        }
    }
    return waysCount
}