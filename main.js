// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// const upperAlphabet = alphabet.toUpperCase();
// const specialCharacters = [
//   "@",
//   ":",
//   ";",
//   "#",
//   "&",
//   "-",
//   "?",
//   "/",
//   "%",
//   "+",
//   "*",
// ];

let btn = document.querySelector("button");

let passLength = document.querySelector(".passLength");
let uppercaseInput = document.querySelector(".uppercaseInput");
let lowercaseInput = document.querySelector(".lowercaseInput");
let numbersInput = document.querySelector(".numbersInput");
let symbolInput = document.querySelector(".symbolInput");

// let symbols =
//   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
let password = "";
btn.addEventListener("click", () =>
  genarate(
    passLength.value,
    symbolInput.checked,
    lowercaseInput.checked,
    numbersInput.checked,
    uppercaseInput.checked
  )
);

function genarate(
  length,
  includeSymbols,
  includeLower,
  includeNumber,
  includeUpper
) {
  //აქ მოთავსდა ის სიმბოლოები რომლებიც მონიშნულია
  let symbols = "";
  //აქ მოთავსდა იმ სიმბოლოების სახელები
  let requiredLetters = [];
  if (includeSymbols) {
    symbols += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    requiredLetters.push("symbols");
  }
  if (includeLower) {
    symbols += "abcdefghijklmnopqrstuvwxyz";
    requiredLetters.push("lowercase");
  }
  if (includeUpper) {
    symbols += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    requiredLetters.push("uppercase");
  }
  if (includeNumber) {
    symbols += "0123456789";
    requiredLetters.push("number");
  }
  let password = "";
  for (let i = 0; i < requiredLetters.length; ++i) {
    let pass = "";
    switch (requiredLetters[i]) {
      case "lowercase":
        pass = "abcdefghijklmnopqrstuvwxyz";
        break;
      case "uppercase":
        pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "number":
        pass = "0123456789";
        break;
      case "symbols":
        pass = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
        break;
    }

    password += pass.charAt(Math.floor(Math.random() * pass.length));
  }
  for (let i = password.length; i < length; ++i) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  console.log(password);

  return password;
}
window.addEventListener("click", () => {
  console.log("You knocked?");
});

let range = document.querySelector("#length");
range.addEventListener("change", function (e) {
  console.log(e.target.value);
});
