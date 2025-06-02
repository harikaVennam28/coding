let students = [];

function addStudent() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const course = document.getElementById("course").value;

  if (!name || !roll || !course) {
    alert("Please fill all fields!");
    return;
  }

  const student = { name, roll, course };
  students.push(student);
  displayStudents();
  clearForm();
}

function displayStudents() {
  const tableBody = document.querySelector("#studentTable tbody");
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    const row = `<tr>
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.course}</td>
      <td>
        <button onclick="editStudent(${index})">Edit</button>
        <button onclick="deleteStudent(${index})">Delete</button>
      </td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("roll").value = student.roll;
  document.getElementById("course").value = student.course;

  students.splice(index, 1); // Remove old entry, re-add on save
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("roll").value = "";
  document.getElementById("course").value = "";
}
