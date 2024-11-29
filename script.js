function handleSubmit() {
    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim();
    const msgError = document.querySelector(".msg_error");
    const msgSuccess = document.querySelector(".success");
    const listContainer = document.getElementById("container");
    const dataNotFound = document.getElementsByClassName("data_not_found")[0];

    // Validate Input Fields
    if (!name || !profession || !age) {
        msgError.style.display = "block";
        msgSuccess.style.display = "none";
        dataNotFound.style.display = "none";
        return;
    } else {
        msgError.style.display = "none";
        msgSuccess.style.display = "block";
    }
    if (dataNotFound) {
        dataNotFound.style.display = "none";
    }
    // Create a new row for the employee
    const newEmployee = document.createElement("div");
    newEmployee.classList.add("employee_row");
    newEmployee.style.display = "flex";
    

    // Create the employee details
    const employeeDetails = document.createElement("div");
    employeeDetails.textContent = `${name} | ${profession} | ${age}`;
    employeeDetails.style.border = "1px solid white";
    employeeDetails.style.width = "400px";
    employeeDetails.style.height = "54px";
    employeeDetails.style.borderRadius = "20px";
    employeeDetails.style.textAlign = "center";
    employeeDetails.style.alignContent = "center";
    employeeDetails.style.fontSize = "large";

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "white";
    deleteButton.style.color = "black";
    deleteButton.style.border = "1px solid black";
    deleteButton.style.padding = "5px";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.width = "100px";
    deleteButton.style.height = "40px";
    deleteButton.style.borderRadius = "30px";
    deleteButton.onclick = () => deleteEmployee(deleteButton);

    // Add the details and delete button to the employee row
    newEmployee.appendChild(employeeDetails);
    newEmployee.appendChild(deleteButton);

    // Append the employee row to the list container
    listContainer.appendChild(newEmployee);

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
}

// Delete an employee row
function deleteEmployee(button) {
    const employeeRow = button.parentElement;
    employeeRow.remove();

    // Check if the container is empty and display "Data not found"
    const listContainer = document.getElementById("container");
    const dataNotFound = document.getElementsByClassName("data_not_found")[0];
    dataNotFound.style.display = "block";
    if (listContainer.children.length === 1) {
        document.getElementById("data_not_found").style.display = "block";
    }
}
