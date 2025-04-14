document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("studentName").value;
    const regNumber = document.getElementById("regNumber").value;
    const branch = document.getElementById("branch").value;
    const course = document.getElementById("course").value;
  
    if (name && regNumber && branch && course) {
      const table = document.getElementById("studentsTable").getElementsByTagName('tbody')[0];
      const newRow = table.insertRow();
  
      newRow.insertCell(0).textContent = name;
      newRow.insertCell(1).textContent = regNumber;
      newRow.insertCell(2).textContent = branch;
      newRow.insertCell(3).textContent = course;
  
      document.getElementById("registrationForm").reset();
    }
  });
  