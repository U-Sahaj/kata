import { add } from "./roman-calc"

describe("roman-calc", () => {
    it("should return error given IIII", () => {
        expect(add("IIII","II")).toBe("Invalid First Numeral")
    })
    it("should return error given IXXXX", () => {
        expect(add("II","IXXXX")).toBe("Invalid Second Numeral")
    })
    it("should return error given IILL", () => {
        expect(add("II","IILL")).toBe("Invalid Second Numeral")
    })
    it("should return 2 given I and I", () => {
        expect(add("I","I")).toBe("2")
    })
    it("should return 4 given II and II", () => {
        expect(add("II","II")).toBe("4")
    })
    it("should return 101 given I and C", () => {
        expect(add("I","C")).toBe("101")
    })
    it("should return 30 given XX and X", () => {
        expect(add("XX","X")).toBe("30")
    })
    // it("should return   given IV and IIV", () => {
    //     expect(add("IV","IIV")).toBe("")
    // })

})    