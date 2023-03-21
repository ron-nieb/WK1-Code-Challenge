//Student Grade Generator//
document.getElementById("calculate-button").addEventListener("click", function() {
  let marks = document.getElementById("marks-input").value;

  let output;
  if (marks > 100 || marks < 0) {
    output = "Invalid input. Marks should be between 0 and 100.";
  } else if (marks >= 80) {
    output = "Grade: A";
  } else if (marks >= 60) {
    output = "Grade: B";
  } else if (marks >= 50) {
    output = "Grade: C";
  } else if (marks >= 40) {
    output = "Grade: D";
  } else {
    output = "Grade: E";
  }

  document.getElementById("output").textContent = output;
});

