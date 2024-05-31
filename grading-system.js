export const gradeMathSciences= (grades) => {
    if ((grades < 0) || (grades >100)){
        return "Please input a value between 0 to 100"
    }else if(grades >= 70){
        return "A"
    }else if(grades >= 60){
        return "B"
    } else if(grades >= 50){
        return "C"
    }else if(grades >= 40 ){
        return "Pass"
    }else{
        return "Sup"
    }
}

export function religiousEducation(grades){
    if ((grades < 0) || (grades >100)){
        return "Please input a value between 0 to 100"
    }else if(grades >= 80){
        return "A"
    }else if(grades >= 70){
        return "B"
    } else if(grades >= 60){
        return "C"
    }else if(grades >= 50 ){
        return "Pass"
    }else{
        return "Sup"
    }
}

export function languagesComp(grades){
    if ((grades < 0) || (grades >100)){
        return "Please input a value between 0 to 100"
    }else if(grades >= 75){
        return "A"
    }else if(grades >= 65){
        return "B"
    } else if(grades >= 55){
        return "C"
    }else if(grades >= 45){
        return "Pass"
    }else{
        return "Sup"
    }
}

// <-------------------------Grade Calculation------------------>
export function calculateGradesAndAverage(){
    const studentScore = {name: "Dennis Doe", math: 80, eng: 65, kis: 48, phy: 67, che: 56, re:89, comp: 82};

    const avgpts = (studentScore.math + studentScore.eng +studentScore.kis + studentScore.phy + studentScore.che + studentScore.re + studentScore.comp)

    // console.log(avgpts)
    const average = Math.floor(avgpts / 7)
    // console.log(average)

    const studentsGrade = `name: ${studentScore.name}, math: ${gradeMathSciences(studentScore.math)}, eng: ${languagesComp(studentScore.eng)}, kis: ${languagesComp(studentScore.kis)}, phy: ${gradeMathSciences(studentScore.phy)}, che: ${gradeMathSciences(studentScore.che)}, re: ${religiousEducation(studentScore.re)}, comp: ${languagesComp(studentScore.comp)}, avgPts: ${average}`
    return (studentsGrade)
}
console.log(calculateGradesAndAverage())