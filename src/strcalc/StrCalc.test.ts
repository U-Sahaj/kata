import { StrCalc } from "./StrCalc"

describe("StringCalculator", () => {
    it("should return '0' given an empty string", () => {
        const myStrCalc = new StrCalc()
        expect(myStrCalc.add("")).toBe("0")
    })
})