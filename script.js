
// Part 1: Variables & Conditionals
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  const age = parseInt(document.getElementById("ageInput").value);
  const result = document.getElementById("ageResult");

  if (isNaN(age)) {
    result.textContent = "Please enter a valid age.";
  } else if (age >= 18) {
    result.textContent = "✅ You are eligible!";
  } else {
    result.textContent = "❌ You are not eligible yet.";
  }
});

// Part 2: Functions (Reusability)


// Function to calculate total price
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

// Function to format result
function displayCartTotal() {
  const prices = [10, 20, 30]; // Example cart items
  const total = calculateTotal(prices);
  document.getElementById("cartResult").textContent = `Cart total: $${total}`;
}

// Attach event listener
document.getElementById("calcTotalBtn").addEventListener("click", displayCartTotal);

// Part 3: Loops (Iteration)
document.getElementById("startCountdownBtn").addEventListener("click", () => {
  const list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear previous countdown

  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }

  // Add "Go!" at the end
  const li = document.createElement("li");
  li.textContent = "Go!";
  list.appendChild(li);
});

// ==============================
// Part 4: DOM Manipulation
// ==============================
const colorBox = document.getElementById("colorBox");
colorBox.addEventListener("click", () => {
  const colors = ["lightblue", "lightgreen", "lightpink", "yellow", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = randomColor;
});
