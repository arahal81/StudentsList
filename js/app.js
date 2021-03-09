`use strict`;
let students = [];
let table = document.getElementById('tableData');
function Student(name, email, age, tuition) {
    this.id = students.length + 1;
    this.name = name;
    this.email = email;
    this.age = age;
    this.tuition = tuition;
    students.push(this);
}

/*const StudentsList=function(St){
    

}*/



Student.prototype.SetLocalStorage = function () {
    localStorage.setItem('students', JSON.stringify(students[students.length - 1]));
}


function randumAge() {
    return Math.floor(Math.random() * (24 - 18) + 18);
}

let form = document.getElementById('form');
form.addEventListener('submit', submitStudentForm);
function submitStudentForm(event) {
    event.preventDefault();
    console.log(event);
    let age = randumAge();
    console.log(age);
    let email = event.target.email.value;
    let name = email.split("@")[0];
    let tuition = event.target.fee.value;
    new Student(name, email, age, tuition);
    console.log(students);
    Student.prototype.SetLocalStorage();
    renderTable()

}


function renderTable() {

    document.getElementById('tableData').innerHTML = "";
    let trH = document.createElement('tr');
    table.appendChild(trH);
    let thId = Document.createElement('th')
    trH.appendChild(thId);
    thId.textContent = "Id";
    let thName = Document.createElement('th')
    trH.appendChild(thName);
    thName.textContent = "Name";
    let thEmail = Document.createElement('th')
    trH.appendChild(thEmail);
    thEmail.textContent = "Email";


    let thMobile = Document.createElement('th')
    trH.appendChild(thMobile);
    thMobile.textContent = "Mobile";
    let thAge = Document.createElement('th')
    trH.appendChild(thAge);
    thAge.textContent = "Age";
    let thTuition = Document.createElement('th')
    trH.appendChild(thTuition);
    thTuition.textContent = "Tuition";

    for (let i in students) {

        let tr = document.createElement('tr');
        table.appendChild(tr);
        let tdID = document.createElement('td');
        tr.appendChild(tdID)
        tdID.textContent = students[i].id

        let tdName = document.createElement('td');
        tr.appendChild(tdName)
        tdName.textContent = students[i].name


        let tdEmail = document.createElement('td');
        tr.appendChild(tdEmail)
        tdEmail.textContent = students[i].email

        let tdMoblie = document.createElement('td');
        tr.appendChild(tdMoblie)
        tdMoblie.textContent = students[i].name
        let tdTuition = document.createElement('td');
        tr.appendChild(tdTuition)
        tdTuition.textContent = students[i].tuition
    }
}


