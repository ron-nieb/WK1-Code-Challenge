//Student Grade Generator//
let marks = 55

if (marks > 100 || marks < 0) {
  console.log("Invalid input. Marks should be between 0 and 100.");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else if (marks >= 40) {
  console.log("Grade: D");
} else {
  console.log("Grade: E");
}