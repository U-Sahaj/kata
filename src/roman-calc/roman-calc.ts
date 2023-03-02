


export function add(numeral1:string, numeral2:string) : string {
// Implement https://www.math-only-math.com/rules-for-formation-of-roman-numerals.html
// https://www.numere-romane.ro/example-how-to-add-roman-numerals-steps-explanations.php?lang=en
// 1. Transform Roman numerals into their corresponding decimals
// 2. Perform addition
// 3. Transform the decimal answer to Roman numerals

    if (!isValid(numeral1)) {
        return "Invalid First Numeral"
    }
    if (!isValid(numeral2)) {
        return "Invalid Second Numeral"
    }

    const value = doRomanToDecimal(numeral1) + doRomanToDecimal(numeral2)

    

    // return "Valid Numeral"
    return `${value}`
}

function toDecimal(numeral:string) {

    
}

function isValid(aNumeralString:string) : boolean {

    const numerals = ["I", "V", "X", "L", "C", "D", "M"]
    const decimals = [1, 5, 10, 50, 100, 500, 1000]

    const invalidNumerals = ["IIII", "XXXX", "CCCC", "VV", "LL", "DD", "VX"]

    for (let index = 0; index < invalidNumerals.length; index++) {
        if (aNumeralString.includes(invalidNumerals[index])) {
            return false
        }   
    }

    return true
}

function doRomanToDecimal(aNumeralString:string) : number {
console.log(`aNumeralString is ${aNumeralString}`)
    const numerals = ["I", "V", "X", "L", "C", "D", "M"]
    const decimals = [1, 5, 10, 50, 100, 500, 1000]
    let value = 0
    let index = 0
    do {
        const theNumeral = numerals.indexOf(aNumeralString[index])
        value = value + decimals[theNumeral]
console.log(`value is ${value} when index is ${index}`)
        index += 1
    } while (index < aNumeralString.length);

    // let aDecimalString = []
    // for (let index = 0; index < aNumeralString.length-1; index++) {
    // let index = 0
    // do {
        
    //     const theNumeral = numerals.indexOf(aNumeralString[index])
    //     const theNumeralOnTheRight = numerals.indexOf(aNumeralString[index+1])
    //     const theNumeralOnTheLeft = 
    //     if (decimals[whichNumeral1] < decimals[whichNumeral2]){
    //         value = value + decimals[whichNumeral2] - decimals[whichNumeral1]
    //         //remove both numerals from aNumeralString
    //         //aNumeralString.

    //     } else {
    //     }

    // } while (index < aNumeralString.length-1);
    



    return value
}