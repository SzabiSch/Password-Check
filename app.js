//Password Field inkl Hidden/show Button

function myFunction() {
  var pass1 = document.getElementById("myInput1");
  var pass2 = document.getElementById("myInput2");
  if (pass1.type === "password" || pass2.type === "password") {
    pass1.type = "text";
    pass2.type = "text";

    //label.parentElement.classList.remove("ShowPassword");
    //label.parentElement.classList.add("HiddenPassword");
  } else {
    pass1.type = "password";
    pass2.type = "password";
    //label.parentElement.classList.add("ShowPassword");
    //label.parentElement.classList.remove("HiddenPassword");
  }
}

const inputPasswordFirst = document.querySelector("#myInput1");
inputPasswordFirst.addEventListener("keyup", writeThePass);

const inputPasswordSecond = document.querySelector("#myInput2");
inputPasswordSecond.addEventListener("keyup", writeThePass);

function writeThePass() {
  // console.log("Pass first: " + inputPasswordFirst.value);
  //console.log("second first: " + inputPasswordSecond.value);
}

function passequal() {
  if (inputPasswordFirst.value === inputPasswordSecond.value) {
    console.log(inputPasswordSecond.value);
    console.log("fast fertig");
    equal - content - yes.parentElement.classList.add("equal-content-yes");
    equal - content - no.parentElement.classList.remove("equal-content-no");
  } else {
    equal - content - no.parentElement.classList.remove("equal-content-no");
    equal - content - yes.parentElement.classList.add("equal-content-yes");
  }
}
