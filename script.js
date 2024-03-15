const btn = document.querySelector(".btn");
const dismiss = document.querySelector(".btn2");
const input = document.querySelector("#email");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const bold = document.querySelector(".bold");
const errorMessage = document.querySelector(".validEmailText");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener("click", () => {
  const inputValue = input.value.trim();

  if (emailRegex.test(inputValue)) {
    handleValidEmail(inputValue);
  } else {
    handleInvalidEmail();
  }
});

dismiss.addEventListener("click", () => {
  hidePage2();
});

function handleValidEmail(email) {
  input.style.borderColor = "green";
  page2.style.display = "block";
  page1.style.display = "none";
  bold.textContent = email;
  errorMessage.style.opacity = "0";
}

function handleInvalidEmail() {
  input.style.borderColor = "hsl(4, 100%, 67%)";
  input.style.backgroundColor = "#FFE8E6";
  input.style.color = "hsl(4, 100%, 67%)";
  errorMessage.style.opacity = "1";
}

function hidePage2() {
  page2.style.display = "none";
  page1.style.display = "flex";
}
