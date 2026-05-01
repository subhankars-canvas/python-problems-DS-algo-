function getTotalX(a, b) {
    // Write your code here
    
    let count = 0;

    const maxA = Math.max(...a);
    const minB = Math.min(...b);

    for (let i = maxA; i <= minB; i++) {
        const isFactorOfAllA = a.every(num => i % num === 0);
        const isFactorForAllB = b.every(num => num % i === 0);

        if (isFactorOfAllA && isFactorForAllB) {
            count++;
        }
    }

    return count;
}