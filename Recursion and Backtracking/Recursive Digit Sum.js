function superDigit(n, k) {
    // Write your code here
    if (n.length === 1) {
        return n
    }
    const nArray = n.split('')
    let sum = 0
    let i = 0
    while(i < nArray.length) {
        sum += +nArray[i]
        i++
    }
    sum = (sum * k) + ''
    
    return superDigit(sum, 1)

}