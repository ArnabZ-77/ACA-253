alert("hello Everyone!!")

function revealText() {
  const textBox = document.getElementById("hidden-text");
  if (textBox.style.display === "block") {
    textBox.style.display = "none";
  } else {
    textBox.style.display = "block";
  }
}

function saveSkills() {
    const newSkills = document.getElementById("skills-textarea").value;
    alert("Skills updated:\n\n" + newSkills);
    // Optional: Save to localStorage
    localStorage.setItem("userSkills", newSkills);
}

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});