`use strict`;
Student.sL = [];
let tableDiv = document.getElementById('studentTable');
let total1 = document.getElementById('total');
function Student(name, email, phone, age, tuition, id) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.age = age;
    this.tuition = tuition;
    Student.sL.push(this);
}

function total(params) {
    let tot = 0;
    for (let i in Student.sL) {

        tot += parseInt(Student.sL[i].tuition);
    }
    return tot;
}
Student.prototype.SetLocalStorage = function () {
    localStorage.setItem('students', JSON.stringify(Student.sL));
}
Student.prototype.getLocalStorage = function () {
    const temp = JSON.parse(localStorage.getItem('students'));
    if (temp !== null) {
        Student.sL = temp;
    }
}

function randumAge() {
    return Math.floor(Math.random() * (24 - 18) + 18);
}

let form = document.getElementById('form');
form.addEventListener('submit', submitStudentForm);
function submitStudentForm(event) {
    event.preventDefault();
    let age = randumAge();
    let email = event.target.email.value;
    let name = email.split("@")[0];
    let tuition = event.target.fee.value;
    let phone = event.target.phone.value;
    let id;
    if (Student.sL.length === 0) {
        id = 1;
    } else { id = Student.sL.length + 1 }
    new Student(name, email, phone, age, tuition, id);
    Student.prototype.SetLocalStorage();
    renderTable()
    form.reset();
}
renderTable()

function renderTable() {
     let table = document.createElement('table');

 Student.prototype.getLocalStorage();
    for (let i in Student.sL) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        let tdID = document.createElement('td');
        tr.appendChild(tdID)
        tdID.textContent = Student.sL[i].id;
        let tdName = document.createElement('td');
        tr.appendChild(tdName)
        tdName.textContent = Student.sL[i].name;
        let tdEmail = document.createElement('td');
        tr.appendChild(tdEmail)
        tdEmail.textContent = Student.sL[i].email;
        let tdMoblie = document.createElement('td');
        tr.appendChild(tdMoblie)
        tdMoblie.textContent = Student.sL[i].phone;
        let tdAge = document.createElement('td');
        tr.appendChild(tdAge)
        tdAge.textContent = Student.sL[i].age
        let tdTuition = document.createElement('td');
        tr.appendChild(tdTuition)
        tdTuition.textContent = Student.sL[i].tuition
    }
    let tot = total();
    total1.textContent = tot;
}
