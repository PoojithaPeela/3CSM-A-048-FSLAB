let students = [];

function addStudent() {

    let input = document.getElementById("studentName");
    let name = input.value.trim();

    if(name === ""){
        alert("Enter a student name");
        return;
    }

    students.push(name);

    input.value = "";

    displayStudents();
}

function displayStudents(){

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    for(let i=0;i<students.length;i++){

        let li = document.createElement("li");

        li.innerHTML = (i+1)+". "+students[i]+
        '<button class="delete" onclick="deleteStudent('+i+')">Delete</button>';

        list.appendChild(li);
    }

    document.getElementById("count").innerText = students.length;
}

function deleteStudent(index){

    students.splice(index,1);

    displayStudents();
}