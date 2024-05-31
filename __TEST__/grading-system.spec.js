import {gradeMathSciences, languagesComp, religiousEducation, calculateGradesAndAverage} from "../grading-system"

    it("checks the constraints of the grade inpt from 0 to 100", () => {
        expect(gradeMathSciences(125)).toBe("Please input a value between 0 to 100")
    })
    it("checks a value between 70 -100", () => {
        expect(gradeMathSciences(80)).toBe("A")
    })
    it("checks a value between 60 -69", () => {
        expect(gradeMathSciences(60)).toBe("B")
    })
    it("checks a value between 50 -59", () => {
        expect(gradeMathSciences(59)).toBe("C")
    })
    it("checks a value between 40 -49", () => {
        expect(gradeMathSciences(45)).toBe("Pass")
    })
    it("checks a value below 40", () => {
        expect(gradeMathSciences(12)).toBe("Sup")
    })

    // <-----------------------------religiousEducation--------------------------->
   
        it("checks the constraints of the grade inpt from 0 to 100", () => {
            expect(religiousEducation(105)).toBe("Please input a value between 0 to 100")
        }),
        it("checks a value bwtween 80 - 100", () => {
            expect(religiousEducation(80)).toBe("A")
        }),
        it("checks a value between 70 -79", () => {
            expect(religiousEducation(70)).toBe("B")
        }),
        it("checks a value between 60 -69", () => {
            expect(religiousEducation(69)).toBe("C")
        }),
        it("checks a value between 50 - 59", () => {
            expect(religiousEducation(55)).toBe("Pass")
        }),
        it("checks a value below 50", () => {
            expect(religiousEducation(40)).toBe("Sup")
        })

// <-------------------------------------languageComp----------------------->
it("checks the constraints of the grade input from 0 to 100", () => {
    expect(languagesComp(125)).toBe("Please input a value between 0 to 100")
})
it("checks a value between 75 -100", () => {
    expect(languagesComp(80)).toBe("A")
})
it("checks a value between 65 -74", () => {
    expect(languagesComp(70)).toBe("B")
})
it("checks a value between 55 -64", () => {
    expect(languagesComp(59)).toBe("C")
})
it("checks a value between 45 -54", () => {
    expect(languagesComp(45)).toBe("Pass")
})
it("checks a value below 45", () => {
    expect(languagesComp(12)).toBe("Sup")
})

// <-------------------------------------calculateGradesAndAverage----------------------->
it("checks the religious education test to 'A'", () => {
    expect(calculateGradesAndAverage(89)).toEqual("name: Dennis Doe, math: A, eng: B, kis: Pass, phy: B, che: C, re: A, comp: A, avgPts: 69")
})