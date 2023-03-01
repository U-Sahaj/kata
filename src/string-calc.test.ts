import { add } from "./string-calc"

// Helpful hints for TDD
// Start with the most basic test
// write a "happy path" test 
// write an error case 

// More complex logic

// more complex error handling

// RED - "write a failing test"
// Don't worry about names and descriptiosn too much

// GREEN - write code to pass test only

// REFACTOR
// Worry about names, readability, modularisation

// expect("foo").toBe("foo")
// toBe uses === which looks at value
// works for numbers, bools, and strings
// doesn't work for objects

describe("string-calc", () => {
//   it("should return '0' given an empty string", () => {
//     expect(add("")).toBe("0")
//   })

//   it("should return the input when given a single number", () => {
//     expect(add("1")).toBe("1")
//     expect(add("2.2")).toBe("2.2")
//   })

//   it("should return the the sum when given two numbers", () => {
//     expect(add("1,2")).toBe("3")
//   })
  
//   it("should return the the sum more than 2 numbers", () => {
//     expect(add("1.1,2.2,3.3")).toBe("6.6")
//   })

//   it("should handle newline as an input separator", () => {
//     expect(add("1\n2,3")).toBe("6")
//   })

//   it("should support custom delimeter", () => {
//     expect(add("//;\n1;2")).toBe("3")
//     expect(add("//|\n1|2|3")).toBe("6")
//     expect(add("//sep\n2sep3")).toBe("5")
//   })

//   it("should return the input when given a single number with custom delimeter", () => {
//     expect(add("//;\n1")).toBe("1")
//   })

  it("should return an error message given an input string with consecutive delimiters", () => {
    // expect(add("175.2\n,35")).toBe("Number expected but , found at position 6")
    // expect(add("175.2,\n35")).toBe("Number expected but \n found at position 6")
    // expect(add("175.2,1,|35")).toBe("Number expected but | found at position 8")
    expect(add("175.2,1,\n35")).toBe("Number expected but \n found at position 8")

})

})
