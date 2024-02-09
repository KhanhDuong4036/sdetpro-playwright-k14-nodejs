/**
 * Student: {
 *  name: String
 *  grade: Array[Number]
 * }
 *  Given 3 students -> find the best one
 *  The best one is the one who has highest score
 *  Incase more than 1 persons have same score -> print them all
 */

let ti = {
    name: "Ti",
    grades: [9, 8, 6]
}

let teo = JSON.parse(JSON.stringify(ti));
teo.name = "Teo";
teo.grades = [9, 9, 8];
let tun = JSON.parse(JSON.stringify(ti));
tun.name = "Tun";
tun.grades = [6, 7, 8];

const students = [ti, teo, tun]
const bestStudent = findBestStudent(students);
console.log('The best student is: ', bestStudent);

function findBestStudent(students) {
    let currentHighestScore = 0;
    let bestStudent = undefined;
    for (const student of students) {
        const averageScore = calculateAverageScore(student);
        if (averageScore >= currentHighestScore) {
            bestStudent = student;
            currentHighestScore = averageScore;
        }
    }
    return bestStudent;

}

function calculateAverageScore(student) {
    const studentGrades = student.grades;
    let totalGrade = 0;
    let scoreLength = studentGrades.length;
    for (const grade of studentGrades) {
        totalGrade += grade;

    }

    return Math.floor(totalGrade / scoreLength);
}