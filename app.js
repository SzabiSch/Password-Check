//Password Field inkl Hidden/show Button

//Um nicht kaputt zu machen, ich habe CODE in JSBin getestet, da läuft!!!
//What der heilige Bim Bam passiert hier?!?!?!
function myFunction() {
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

//Wenn pass1 gleich mit pass2 wird controlContinue Wert 1, und die andere Conditionen
//werden 2 Voraussetzungen erfülen müssen, erstaml Wert soll 1 sein sprich
//nur wenn pass1 gleich pass2 dann kommt die tatsächliche kontrolle
let controlContinue = 0;

myInput2.addEventListener("keyup", controlEqual());

function controlEqual() {
  if (inputPasswordFirst.value == inputPasswordSecond.value) {
    console.log("Hollee");
    console.log(inputPasswordFirst.value);
    controlContinue++;
  }
}

function includeLowerCase() {
  const contLow = document.getElementById("lower-content");

  if (controlContinue === 1 && /[a-z]/.test(inputPasswordSecond)) {
    contLow.innerText = "✅";
  } else {
    contLow.innerText = "❌";
  }
}

function includeUpperCase() {
  const contUpp = document.getElementById("upper-content");

  if (controlContinue === 1 && /[A-Z]/.test(inputPasswordSecond)) {
    contUpp.innerText = "✅";
  } else {
    contUpp.innerText = "❌";
  }
}

function includeNumber() {
  const contNumb = document.getElementById("number-content");
  if (controlContinue === 1 && /[0-9]/.test(inputPasswordSecond)) {
    contNumb.innerText = "✅";
  } else {
    contNumb.innerText = "❌";
  }
}

function tenCharachter() {
  const moreThanTen = document.getElementById("char-content");

  if (controlContinue === 1 && inputPasswordFirst.length >= 10) {
    moreThanTen.innerText = "✅";
  } else {
    moreThanTen.innerText = "❌";
  }
}
