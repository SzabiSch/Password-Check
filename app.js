//Password Field inkl Hidden/show Button

function myFunction() {
  var pass1 = document.getElementById("myInput1");
  var pass2 = document.getElementById("myInput2");
  if (pass1.type === "password" || pass2.type === "password") {
    pass1.type = "text";
    pass2.type = "text";
  } else {
    pass1.type = "password";
    pass2.type = "password";
  }
}

const textOfPass1 = document.querySelector("#myInput1");
const pass1 = textOfPass1.value.trim();

const textOfPass2 = document.querySelector("#myInput2");
const pass2 = textOfPass2.value.trim();

const evenOrNot = document.querySelector("#start-test");
eventOrNot.addEventListener("keyup", controlPasswords);

console.log("Pass1: " + pass1);
console.log("Pass2: " + pass2);
