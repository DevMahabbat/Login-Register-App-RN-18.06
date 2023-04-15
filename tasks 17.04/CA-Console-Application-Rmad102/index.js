const readline = require('readline-sync')
const file = require('fs')
const { log } = require('console')

const options = ['Add Teacher', 'Add Student', 'List Teachers', 'List Students', 'Delete Teacher', 'Delete Student', 'Teacher Detail', 'Students Detail','Save Data']
let teachers = []
let students = []
Main()

function Main() {
    let answer = readline.keyInSelect(options)
    answer++

    switch (answer) {
        case 1:
            CreateTeacher()
            break;
        case 2:
            CreateStudent()
            break;
        case 3:
            GetAll(teachers)
            break;
        case 4:
            GetAll(students)
            break;
        case 5:
            DeleteByIdTeacher()
            break;
        case 9:
            loaddata()
            break;
        default:
            console.log('Duzgun emeliyyat secin');
            break;
    }
    if (answer != 0) {
        setTimeout(() => {
            Main()

        }, 3000)
    }

}


function CreateTeacher() {

    let id = GenerateId(teachers)
    console.log("let's create teacher!");
    let nameTeacher = readline.question("Teacher name: ")
    let ageTeacher = readline.question('Teacher age: ')
    let subjectTeacher = readline.question('Teacher subject: ')
    let teacher = {
        id: id,
        name: nameTeacher,
        age: ageTeacher,
        subject: subjectTeacher
    }
    teachers.push(teacher)
}
function CreateStudent() {
    let id = GenerateId(students)
    console.log("let's create student!");
    let nameStd = readline.question("Student name: ")
    let gradeStd = readline.question('Std grade: ')
    let majorStd = readline.question('Std major: ')
    let std = {
        id: id,
        name: nameStd,
        grade: gradeStd,
        major: majorStd
    }
    students.push(std)

}

function GetAll(array) {
    array.forEach(tch => {
        // console.log(tch);
        if (tch.grade) {
            console.log(`Id: ${tch.id} Name: ${tch.name}  Grade: ${tch.grade}   Major: ${tch.major} `)
        } else {
            console.log(`Id: ${tch.id} Name: ${tch.name}  Age: ${tch.age}   Subject: ${tch.subject} `)
        }
    })
}

function DeleteByIdTeacher() {
    let id = readline.question("Enter teacher id: ")
    if (readline.keyInYN()) {
        teachers = teachers.filter(tch => tch.id != id)
    }
}

function GenerateId(array) {

    if (array.length == 0) {
        return 1
    }
    let previousId = array[array.length - 1].id
    return previousId += 1

}

