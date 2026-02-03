let students =[
    {name: "Sofie", age: 25, course: "Webudvikler"},
    {name: "Lukas", age: 22, course: "Mediegrafiker"},
    {name: "Emil", age: 28, course: "Teknisk designer"},
];

let studentListDiv = document.querySelector(".studentlist");

students.forEach(function(student){
    const studentDiv = document.createElement("Div");
    studentDiv.textContent = `${student.name}, Alder: ${student.age}, Uddannelse: ${student.course}`;
    studentListDiv.append(studentDiv);
});