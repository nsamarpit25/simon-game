let buttons = ["#green", "#red", "#yellow", "#blue"];

let compList = [];
let usrList = [];
let level = 0;
for (let i = 0; i < buttons.length; i++) {
  $(buttons[i]).on("click", function () {
    $("h1").text(
      `Level:- ${level}, Continue to play!`
    );
    // Add Class of pressed on cliclicking every button.
    usrList.push(buttons[i]);
    buttonPressed(buttons[i]);

    // Checking User pressed Button
    checkUsrInput();
  });
}

$("body").on("keypress", function () {
  if ((usrList = [])) {
    randomButton();
  }
});
$("#start").on("click", function () {
  buttonPressed("#start");
  if ((usrList = [])) {
    setTimeout(randomButton, 500);
  }
});

function buttonPressed(btn) {
  $(btn).addClass("pressed");
  setTimeout(function () {
    $(btn).removeClass("pressed");
  }, 200);
}
// This function will automatically random button to computer List.
function randomButton() {
  let randomIndex = Math.floor(Math.random() * buttons.length);
  compList.push(buttons[randomIndex]);
  buttonPressed(buttons[randomIndex]);
  level++;
  usrList = [];
}

function checkUsrInput() {
  if (usrList.length < compList.length) {
    let slicedCompList = compList.slice(0, usrList.length);
    if (usrList.toString() === slicedCompList.toString()) {
    } else {
      GameOver();
    }
  } else if (usrList.length === compList.length) {
    if (usrList.toString === compList.toString) {
      setTimeout(randomButton, 1000);
    } else {
      GameOver();
    }
  }
}

// GameOver
function GameOver() {
  usrList = [];
  compList = [];
  level = 0;
  $("body").addClass("red");
  setTimeout(() => {
    $("body").removeClass("red");
  }, 100);
  $("h1").text(
    `Game over at level ${level}. Press any key or Start Button to start again`
  );
}
