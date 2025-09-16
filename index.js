// create a variable to hold a button
// var, let, const


//function

// JavaScript functions for opening and closing the modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
// Crystal ball
const answers = ["it is certain", "not likely", "maybe", "ask again later", "definitely not"];

// Grab the button
const getAnswerButton = document.getElementById("crystalBallBtn");

// Hold the answer text
const answerText = document.getElementById("crystalBallText");

// Create a function that randomly selects an answer
function randomAnswer() {
  let answersIndex = Math.floor(Math.random() * answers.length);
  let answer = answers[answersIndex];
  answerText.textContent = answer;
}

// Add an event listener to the button
getAnswerButton.addEventListener("click", (e) => {
  console.log("Button clicked"); // Debugging line
  randomAnswer();
});
