let btn = document.querySelector("button");
let generator = document.querySelector(".generate-password input");
let passLength = document.querySelector(".passLength");
let uppercaseInput = document.querySelector(".uppercaseInput");
let lowercaseInput = document.querySelector(".lowercaseInput");
let numbersInput = document.querySelector(".numbersInput");
let symbolInput = document.querySelector(".symbolInput");
let copy = document.querySelector(".generate-password img");
let strengthText = document.querySelector(".strength h6");
let checkboxes = document.querySelectorAll("input[type='checkbox']");

let count = 0;

copy.addEventListener("click", function () {
  generator.select();
  navigator.clipboard.writeText(generator.value);
});
// let symbols =
//   "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
let password = "";
let length = 0;
console.log(checkboxes);

let range = document.querySelector("#length");
range.addEventListener("change", function (e) {
  length = e.target.value;

  btn.addEventListener("click", () =>
    genarate(
      length,
      symbolInput.checked,
      lowercaseInput.checked,
      numbersInput.checked,
      uppercaseInput.checked
    )
  );
});
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
    count++;
  }
  if (includeLower) {
    symbols += "abcdefghijklmnopqrstuvwxyz";
    requiredLetters.push("lowercase");
    count++;
  }
  if (includeUpper) {
    symbols += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    requiredLetters.push("uppercase");
    count++;
  }
  if (includeNumber) {
    symbols += "0123456789";
    requiredLetters.push("number");
    count++;
  }
  count = 0;
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

  generator.value = password;
  // check(checkboxes);
  return password;
}

// function check(inps) {
//   for (let i = 0; i < inps.length; i++) {
//     count++;
//     if (count == 1) {
//       strengthText.innerHTML = "TOO WEAK!";
//     } else if (count == 2) {
//       strengthText.innerHTML = "WEAK";
//     } else if (count == 2) {
//       strengthText.innerHTML = "MEDIUM";
//     } else if (count == 3) {
//       strengthText.innerHTML = "STRONG";
//     }
//   }
// }
