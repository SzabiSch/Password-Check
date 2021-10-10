//Password Field inkl Hidden/show Button

function myFunction() {
  const btnShowHidden = document.getElementById("#show-hidden");
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

Let controlContinue = 0;

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
  var charLow = /[a-z]/g;
  const lookingLow = inputPasswordSecond.search(charLow);
  if (controlContinue === 1 && lookingLow !== -1) {
    
      contLow.innerText = "✅";
    } else {
      contLow.innerText = "❌";
    } 
  
}

function includeUpperCase() {
  const contUpp = document.getElementById("upper-content");
  var charUp = /[A-Z]/g;
  const lookingUpp = inputPasswordSecond.search(charUp);
  if (controlContinue === 1 && lookingUpp !== -1){
  contUpp.innerText = "✅";}
  else {
  contUpp.innerText = "❌";
} 
}

function includeNumber() {
 
const contNumb = document.getElementById("number-content");
  var charNumb = /[0-9]/g;
  const lookingNumb = inputPasswordSecond.search(charNumb);
  if (controlContinue === 1 && lookingNumb !== -1){
  contNumb.innerText = "✅";}
  else {
  contNumb.innerText = "❌";
} 








function tenCharachter() {
  const moreThanTen = document.getElementById("char-content");

  if (inputPasswordFirst.length >= 10) {
    moreThanTen.innerText = "✅";
  } else {
    moreThanTen.innerText = "❌";
  }
}
