// ------------------ CONTACT FORM VALIDATION ------------------
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out all fields!";
    formMessage.style.color = "red";
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email!";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully ✅";
  formMessage.style.color = "green";
  document.getElementById("contactForm").reset();
});

// ------------------ DYNAMIC TO-DO LIST ------------------
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});
