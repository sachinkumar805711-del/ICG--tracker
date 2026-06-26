let spins = [];

const redNumbers = [
  1, 3, 5, 7, 9, 12, 14, 16, 18,
  19, 21, 23, 25, 27, 30, 32, 34, 36
];

function addSpin() {
  
  let input = document.getElementById("spin");
  let num = parseInt(input.value);
  
  if (isNaN(num) || num < 0 || num > 36) {
    alert("Please enter a number between 0 and 36");
    return;
  }
  
  let color = "Black";
  
  if (redNumbers.includes(num)) {
    color = "Red";
  }
  
  if (num === 0) {
    color = "Green";
  }
  
  let oddEven = "-";
  
  if (num !== 0) {
    oddEven = (num % 2 === 0) ? "Even" : "Odd";
  }
  
  let highLow = "-";
  
  if (num !== 0) {
    highLow = (num <= 18) ? "Low" : "High";
  }
  
  spins.unshift(
    `${num} | ${color} | ${oddEven} | ${highLow}`
  );
  
  document.getElementById("history").innerHTML =
    spins.join("<br>");
  
  input.value = "";
  input.focus();
  
}