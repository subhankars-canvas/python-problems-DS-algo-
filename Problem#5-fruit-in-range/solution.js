function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const appleTreePos = a;
    const orangeTreePos = b;
    const applePosArray = [];
    const orangePosArray = [];
    for(let i=0; i<apples.length; i++) {
        applePosArray.push(a+apples[i])
    }
    for(let j=0; j<oranges.length; j++) {
        orangePosArray.push(b+oranges[j])
    }
    let appleWithinRange = 0;
    let orangeWithinRange = 0;
    for(let k=0; k<applePosArray.length; k++) {
        if (applePosArray[k] >= s && applePosArray[k] <= t) {
            appleWithinRange++;
        }
    }
    for(let m=0; m<orangePosArray.length; m++) {
        if (orangePosArray[m] >= s && orangePosArray[m] <= t) {
            orangeWithinRange++;
        }
    }
    console.log(appleWithinRange)
    console.log(orangeWithinRange)
}