//Password Field inkl Hidden/show Button

const contUpp = document.getElementById("upper-content");
const contNumb = document.getElementById("number-content");
const moreThanTen = document.getElementById("char-content");
const contLow = document.getElementById("lower-content");

//Um nicht kaputt zu machen, ich habe CODE in JSBin getestet, da läuft!!!
//What der heilige Bim Bam passiert hier?!?!?!
function myFunctionShowHidden() {
  const btnShowHidden = document.getElementById("show-hidden");
  var pass1 = document.getElementById("myInput1");
  var pass2 = document.getElementById("myInput2");
  if (pass1.type === "password" || pass2.type === "password") {
    pass1.type = "text";
    pass2.type = "text";
    btnShowHidden.innerText = "Hidden Password";
  } else {
    pass1.type = "password";
    pass2.type = "password";
    btnShowHidden.innerText = "Show Password";
  }
}

const inputPasswordFirst = document.querySelector("#myInput1");
inputPasswordFirst.addEventListener("keyup", writeThePass);

const inputPasswordSecond = document.querySelector("#myInput2");
inputPasswordSecond.addEventListener("keyup", writeThePass);

function writeThePass() {
  console.log("Pass first: " + inputPasswordFirst.value);
  console.log("Pass second: " + inputPasswordSecond.value);
}

myInput1.addEventListener("input", controlEqual);
myInput2.addEventListener("input", controlEqual);

let startAnimation = 0;

function controlEqual() {
  const passEqual1 = inputPasswordFirst.value;
  const passEqual2 = inputPasswordSecond.value;
  const contEqual = document.getElementById("equal-content");
  if (passEqual1 === passEqual2) {
    contEqual.innerText = "✅";
    includeLowerCase();
    includeUpperCase();
    includeNumber();
    tenCharachter();
    startAnimation++;
    return startAnimation;
    console.log(startAnimation);
  } else {
    contEqual.innerText = "❌";
    contLow.innerText = "❌";
    contUpp.innerText = "❌";
    contNumb.innerText = "❌";
    moreThanTen.innerText = "❌";
  }
}

function includeLowerCase() {
  if (/[a-z]/.test(inputPasswordSecond.value)) {
    contLow.innerText = "✅";

    return contLow;
  } else {
    contLow.innerText = "❌";
  }
}

function includeUpperCase() {
  if (/[A-Z]/.test(inputPasswordSecond.value)) {
    contUpp.innerText = "✅";
    startAnimation++;
    return startAnimation;
  } else {
    contUpp.innerText = "❌";
  }
}

function includeNumber() {
  if (/[0-9]/.test(inputPasswordSecond.value)) {
    contNumb.innerText = "✅";
    startAnimation++;
    return startAnimation;
  } else {
    contNumb.innerText = "❌";
  }
}

function tenCharachter() {
  if (inputPasswordFirst.value.length >= 10) {
    moreThanTen.innerText = "✅";
    startAnimation++;
    return startAnimation;
  } else {
    moreThanTen.innerText = "❌";
  }
}

console.log("Animation: " + startAnimation);
