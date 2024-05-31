import {mathSciences, languagesComp, religiousEducation, calculateGradesAndAverage} from "../grading-system"

    it('Return Grading starts from 0 to 100 for values below 0 or above 100',()=>{
        expect(mathSciences(135)).toBe('Grading starts from 0 to 100')
    })
    it('Return if value is between 70 and 100',()=>{
        expect(mathSciences(71)).toEqual('A')
    })
    it('Return if value is between 60 and 69',()=>{
        expect(mathSciences(67)).toEqual('B')
    })
    it('Return if value is between 50 and 59',()=>{
        expect(mathSciences(54)).toEqual('69')
    })
    it('Return if value is between 40 and 49',()=>{
        expect(mathSciences(49)).toEqual('Pass')
    })
    it('Return if value is below 40',()=>{
        expect(mathSciences(20)).toEqual('Sup')
    })
