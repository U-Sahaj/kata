


export function add(numeral1:string, numeral2:string) : string {
// Implement https://www.math-only-math.com/rules-for-formation-of-roman-numerals.html
// 1. Transform Roman numerals into their corresponding decimals
// 2. Perform addition
// 3. Transform the decimal answer to Roman numerals

    if (!isValid(numeral1) || !isValid(numeral2)) {
        return "Invalid Numeral"
    }

// split

    


    return "Valid Numerals"
}

function toDecimal(numeral:string) {

    
}

function isValid(aNumeralString:string) : boolean {

    const numerals = ["I", "V", "X", "L", "C", "D", "M"]
    const decimals = [1, 5, 10, 50, 100, 500, 1000]

    const invalidNumerals = ["IIII", "XXXX", "CCCC", "VV", "LL", "DD"]

    let isValid = true
    isValid = invalidNumerals.includes(aNumeralString)
    if (!isValid) { return false }

    // for (let index = 0; index < invalidNumerals.length; index++) {
    //     isValid = !aNumeralString.includes(invalidNumerals[index])
    //     if (!isValid) { return false }
    // }

    // for (let index = 0; index < aNumeralString.length; index++) {
    //     const element = aNumeralString[index];
        
    // }
    // numerals.indexOf
    return true
}
