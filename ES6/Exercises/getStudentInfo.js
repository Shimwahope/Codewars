/*Write a JavaScript function named getStudentInfo that takes the student object as an argument and uses object destructuring to extract the name and subject properties. The function should return a string in this format:*/

const student = {
    name: "Alice",
    age: 20,
    grade: "A",
    subject: "Mathematics",
};

function getStudentInfo({ name,subject }) {
    return `${name} is studying ${subject}`
}
console.log(getStudentInfo(student))