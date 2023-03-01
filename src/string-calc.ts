// Structure of a function
// check for some edge case and return
// normal case

export function add(inputString: string): string {

    if (inputString === "") {
        return "0"
    }
    const result  = findConsecutiveDelimiters(inputString)
    if (result.isFound) {
        const message = `Number expected but ${result.unexpectedChar} found at position ${result.position}`
        return message
    }

    const stringOfNumbers: string[] = extractNumbers(inputString)

    const numbers = stringOfNumbers.map(parseFloat)
    const sum = numbers.reduce(function (total, number){
        return total + number
    }, 0);

    return sum.toString()
}

type Result = {
    isFound: boolean
    position?: number
    unexpectedChar?: string
}

function findConsecutiveDelimiters(inputString:string) : Result {
    const delimiters = [",", "\n", "|"]
        
    for (let index = 0; index < inputString.length; index++) {      
        if (delimiters.includes(inputString[index]) && 
            delimiters.includes(inputString[index+1])){           
            return{ 
                isFound: true,
                unexpectedChar: inputString[index+1],
                position: index+1
            }               
        }
    }

    return {isFound:false}
}

// 
// function checkConsecutiveDelimiters(inputString:string) : ReturnType {
    
//     const commaDelimiter = ","
//     const newlineDelimiter = "\\n"
//     const delimiters = [commaDelimiter, newlineDelimiter]
//     console.log(`inputString ${inputString}`)

//     for (let index1 = 0; index1 < inputString.length; index1++) {
//         const theDelimiter = delimiters.findIndex[];
//         const delimiterPosition = inputString.indexOf(theDelimiter)

//         if (delimiterPosition >= 0) {
//             const substring = inputString.substring(delimiterPosition+1)
//             // check for next delimiter in substring
//             console.log(`delimiter ${theDelimiter} position ${delimiterPosition}`)
//             console.log(`substring ${substring}`)
//             const characterAfterDelimiter = inputString.charAt(delimiterPosition+1)
//             console.log(`character ${characterAfterDelimiter}`)
//             const positionOfWhichDelimiter = delimiters.indexOf(characterAfterDelimiter)
//             if (positionOfWhichDelimiter >= 0){
//                 console.log(`Next Delimiter Found ${delimiters[positionOfWhichDelimiter]}`)
//                 const thisReturnObj: ReturnType = { 
//                     isError: true,
//                     unexpectedChar: delimiters[positionOfWhichDelimiter],
//                     position: delimiterPosition+1
//                 }
//                 return thisReturnObj
//             }

//         }

//     }
//     const thisReturnObj: ReturnType = { 
//         isError: false
//     }
//     return thisReturnObj
// }

function extractNumbers(inputString: string) {

    if (isDelimitedByCustomSeparator(inputString)) {
        return extractNumbersUsingCustomSeparator(inputString)
    }

    const regularExpression = /,|\n/g
    return inputString.split(regularExpression)
}

function isDelimitedByCustomSeparator(inputString: string) {
    const startIndicator = "//"
    return inputString.includes(startIndicator)
}

function extractNumbersUsingCustomSeparator(inputString: string) {

    const startIndicator = "//"
    const endIndicator = "\n"
    const indexOfStartIndicator = inputString.indexOf(startIndicator)
    const indexOfEndIndicator = inputString.indexOf(endIndicator)
    const delimiter = inputString.substring(indexOfStartIndicator+startIndicator.length,
                                            indexOfEndIndicator)
    const restOfString = inputString.substring(indexOfEndIndicator)
    const stringOfNumbers = restOfString.split(delimiter)
    return stringOfNumbers
}