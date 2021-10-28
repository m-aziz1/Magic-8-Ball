//Magic 8 Ball

//HTML Variables
const imgBallEl = document.getElementById("img-in");
const qtnInEl = document.getElementById("qtn-in");
const ansrTxtEl = document.getElementById("ansr-txt");

//Event Listener
imgBallEl.addEventListener("click", magicResponse);

//Event Functions
function magicResponse() {
  if (qtnInEl.value === "Does a magic 8 ball actually work?") {
    ansrTxtEl.innerHTML = "&nbspHow dare you doubt me!";
  } else if (qtnInEl.value === "Is JavaScript awesome?") {
    ansrTxtEl.innerHTML = "&nbspOf course!";
  } else if (qtnInEl.value === "What's your name?") {
    ansrTxtEl.innerHTML = "&nbspThe Magic 8 Ball!";
  } else if (qtnInEl.value === "") {
    ansrTxtEl.innerHTML = "&nbspPlease ask a question...";
  } else if (qtnInEl.value === "Is the earth flat?") {
    ansrTxtEl.innerHTML = "&nbspNo, it's shaped like me.";
  } else {
    //Run general answers function
    findAnswer();
  }
}

function findAnswer() {
  let randNum = Math.random();
  if (randNum < 0.2) {
    ansrTxtEl.innerHTML = "&nbspWithout a Doubt.";
  } else if (randNum < 0.4) {
    ansrTxtEl.innerHTML = "&nbspAs I see it, yes.";
  } else if (randNum < 0.6) {
    ansrTxtEl.innerHTML = "&nbspConcentrate and ask again.";
  } else if (randNum < 0.8) {
    ansrTxtEl.innerHTML = "&nbspDon't count on it.";
  } else {
    ansrTxtEl.innerHTML = "&nbspOutlook not so good.";
  }
}
