//Password Field inkl Hidden/show Button

function myFunction() {
  var pass1 = document.getElementById("myInput1");
  var pass2 = document.getElementById("myInput2");
  if (pass1.type === "password" || pass2.type === "password") {
    pass1.type = "text";
    pass2.type = "text";

    //label.classList.remove("ShowPassword");
    //label.classList.add("HiddenPassword");
  } else {
    pass1.type = "password";
    pass2.type = "password";
    //label.classList.add("ShowPassword");
    //label.classList.remove("HiddenPassword");
  }
}
classList.remove("ShowPassword");

label.classList.add("ShowPassword");
label.classList.remove("HiddenPassword");

function buttonCahnge() {
  document.getElementById("hidden-show").innerHTML = "Hidden Passwort";
}

//const textOfPass1 = document.querySelector("#myInput1");

//const evenOrNot = document.querySelector("#start-test");
//eventOrNot.addEventListener("click", controlPasswords);
//function controlPasswords() {
//if (pass1 !=== pass2)
//}
