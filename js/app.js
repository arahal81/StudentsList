`use strict`;
Student.sL = [];
let tableDiv = document.getElementById('tableDiv');
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
/*
const StudentsList = function (stL) {
    this.sL = stL;

}
StudentsList.prototype.add = function (st) {
    this.sL.push(st);
}

*/

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
    // console.log(students);
    Student.prototype.SetLocalStorage();
    //StudentsList.prototype.add(sTemp);

    renderTable()
    form.reset();
}
renderTable()

function renderTable() {

    Student.prototype.getLocalStorage();
    tableDiv.innerHTML = "";
    let table = document.createElement('table');
    tableDiv.appendChild(table);
    let trH = document.createElement('tr');
    table.appendChild(trH);
    let thId = document.createElement('th');
    trH.appendChild(thId);
    thId.textContent = "Id";
    let thName = document.createElement('th');
    trH.appendChild(thName);
    thName.textContent = "Name";
    let thEmail = document.createElement('th');
    trH.appendChild(thEmail);
    thEmail.textContent = "Email";


    let thMobile = document.createElement('th');
    trH.appendChild(thMobile);
    thMobile.textContent = "Mobile";
    let thAge = document.createElement('th');
    trH.appendChild(thAge);
    thAge.textContent = "Age";
    let thTuition = document.createElement('th');
    trH.appendChild(thTuition);
    thTuition.textContent = "Tuition";

    for (let i in Student.sL) {

        let tr = document.createElement('tr');
        table.appendChild(tr);
        let tdID = document.createElement('td');
        tr.appendChild(tdID)
        //console.log(students);
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
    let h4 = document.createElement('h4');
    tableDiv.appendChild(h4);
    h4.textContent = `Total: ${tot}`;
}


