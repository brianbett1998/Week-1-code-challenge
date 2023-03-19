// Challenge 1 Student Grade Generator.
//prompt user to input score
const prompt = require('propmt-sync')();
let studentScore = prompt("Enter studentScore")
function grade(studentScore){
    console.log("grade is A")}
else if ("studentScore >= 60 && studentScore <79"){
    console.log("grade is B")
}
else if (studentScore >= 60 && studentScore < 79) {
    console.log("grade is B")
}
else if (studentScore >= 49 && studentScore <= 59) {
    console.log("grade is C")
}
else if (studentScore >= 40 && studentScore < 49) {
    console.log("grade is D")
}
else if (studentScore >= 0 && studentScore <40) {
    console.log("grade is E")
}
else{
    console.log("student's score is invalid")
}
// call out the function
grading(studentScore)