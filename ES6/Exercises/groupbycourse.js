function groupStudentsByCourse(studentsList) {
  const courseMap = new Map();
  for(const student of studentsList){
    if(student.grade<70) continue;
    for(const course of student.course){
        if(!courseMap.has(course)){
            courseMap.set(course,[])
        }
        course.get(course).push(student.name)
    } 
  }
  return courseMap;
}

// Input data
const students = [
  { name: "Alice", grade: 85, courses: ["Math", "Science"] },
  { name: "Bob", grade: 65, courses: ["Math"] },
  { name: "Charlie", grade: 90, courses: ["Science"] },
  { name: "David", grade: 75, courses: ["Math"] }
];

// Execution
console.log(groupStudentsByCourse(students));
/* Expected Output:
Map(2) {
  'Math' => [ 'Alice', 'David' ],
  'Science' => [ 'Alice', 'Charlie' ]
}
*/
