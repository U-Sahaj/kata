import { add } from "./roman-calc"

describe("roman-calc", () => {
    it("should return error given IIII", () => {
        expect(add("IIII","II")).toBe("Invalid Numeral")
    })
    it("should return error given XXXX", () => {
        expect(add("II","IXXXX")).toBe("Invalid Numeral")
    })
    it("should return error given IILL ", () => {
        expect(add("II","IILL")).toBe("Invalid Numeral")
    })
    // it("should return XXII given XX and II ", () => {
    //     expect(add("XX,II")).toBe("XXII")
    
    // })
})    