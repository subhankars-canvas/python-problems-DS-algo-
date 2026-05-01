function timeConversion(s) {
    // Write your code here
    const numberArray = s.split(':')[2].split('')
    const hours = numberArray.slice(2).join('')
    
    const pmCalculationArray  = s.split(':')
   let pmHours = 0
    if (pmCalculationArray[0] < 12 && hours === 'AM') {
        pmHours = pmCalculationArray[0]
    } else if (pmCalculationArray[0] === '12' && hours === 'AM') {
        pmHours = '00'
    } else if (pmCalculationArray[0] === '12' && hours === 'PM') {
        pmHours = '12'
    }else {
        pmHours = parseInt(pmCalculationArray[0])+12
    }
    return( `${pmHours}:${pmCalculationArray[1]}:${pmCalculationArray[2].replace(/(AM|PM)$/i, '')}`)
}