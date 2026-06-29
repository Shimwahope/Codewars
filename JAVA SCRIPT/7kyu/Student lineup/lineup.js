function lineupStudents(students) {
    const student=students.split(" ")
    const sorted=student.sort((a,b)=>(b.length-a.length)|| b.localeCompare(a))
    return sorted
}
console.log(lineupStudents('Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'))