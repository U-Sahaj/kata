export class StrCalc {
    add(input: string) : string {
        if (input === "") {
            return "0"
        }
        
        return input
    }
    extractNumbers(inputString: string) : string[] {

        let stringOfNumbers: string[] = []
        const customSeparatorIndicator = "//"
        const customSeparatorEndIndicator = "\n"

        if (inputString.includes(customSeparatorIndicator)){
        // if (input.indexOf("//") !== -1) {
    
            const startOfInputWithoutCustomDelimiterIndicator = 2
            const startOfNewLineIndicatorForCustomDelimiter = inputString.indexOf("\n")
    
            const delimiter = inputString.slice(startOfInputWithoutCustomDelimiterIndicator,
                startOfNewLineIndicatorForCustomDelimiter)
    
            stringOfNumbers = inputString.slice(startOfNewLineIndicatorForCustomDelimiter + 1).split(delimiter)
    
        } else {
    
            const regularExpression = /,|\n/g
            stringOfNumbers = inputString.split(regularExpression)
    
        }
        return stringOfNumbers
    }
}