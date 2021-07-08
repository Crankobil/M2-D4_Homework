
const submitNamebutton = document.querySelector("#submitName")
console.log(submitNamebutton)
const studentName = document.querySelector("#nameOfStudent")
let listOfNames = []

window.onload = () => {

console.log(studentName)
    submitNamebutton.addEventListener("click", getNames)
}

const getNames = () => {
    let getStudentName = studentName.value
    listOfNames.push(getStudentName)
    console.log(listOfNames)
}




