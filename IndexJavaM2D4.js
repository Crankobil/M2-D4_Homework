let listOfNames = []
const submitNamebutton = document.querySelector("#submitName")
const studentName = document.querySelector("#nameOfStudent")

const getNames = () => {
    let getStudentName = studentName.value
    listofNames.push(getStudentName)
    console.log(listOfNames)
}

submitNamebutton.addEventlistener("click", getNames)


