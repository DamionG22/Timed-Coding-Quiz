var startButton = document.getElementById("startButton");
var questionText = document.getElementById("question-text");
var answerText1 = document.getElementById("answer-text1");
var answerText2 = document.getElementById("answer-text2");
var answerText3 = document.getElementById("answer-text3");
var answerText4 = document.getElementById("answer-text4");
var nextButton = document.getElementById("next");
var showTimer = document.getElementById("timer");
var headerStart = document.getElementById("start-screen-text");
var startText = document.getElementById("start-text");
var gameOver = document.getElementById("game-over");
var scoreText = document.getElementById("score-text");
var inGameText = document.getElementById("game-text");
var timerText = document.getElementById("timer-text");
var showScore = document.getElementById("show-score");


var questions = document.getElementsByClassName("questions");
var answers = document.getElementsByClassName("answers")

var scoreCounter = 0
// sets timer to start at 10 seconds
var seconds = 60;

var intervalId 


// Timer
function countdown() {
    

    // updates the seconds value
    seconds--;
  
    // displays the updated seconds value
    console.log(seconds);
  
    showTimer.textContent = seconds;
  
    // stops the timer at 0
    if (seconds === 0) {
      clearInterval(intervalId);
      questionText.style.display = "none";
      answerText1.style.display = "none";
      answerText2.style.display = "none";
      answerText3.style.display = "none";
      answerText4.style.display = "none";
      nextButton.style.display = "none";
      gameOver.style.display = "block";
      headerStart.style.display = "none";
      scoreText.style.display = "block";
      showTimer.style.display = "none";
      inGameText.style.display = "none";
      timerText.style.display = "none";
      showScore.style.display = "none";

    }
   
}
function init() {
    scoreTracker();
    seconds = 60 

}

var currentQuestion = 0;
// houses all questions,choices and correct answers
var allQuestions = [
    {
        question: "Which HTML element do we put javascript in?",
        choices: ["script", "Java", "css","I dont know!?!"],
        answerIndex: 0
    },
    {
        question:"Can Javascript only be used with an external page?",
        choices: ["yes","No","what's javascript?", "I don't know!?!?"],
        answerIndex: 1
    },
    {
        question: "Javascript can create HMTL elements?",
        choices: ["Yes", "No","What's HTML?","I don't know!?!?"],
        answerIndex: 0 
    }
]



startButton.addEventListener("click", function() {
    startText.style.display = "none"
    startButton.style.display = "none";
    nextButton.style.display = "block";
    headerStart.style.display = "none";
    inGameText.style.display = "block"
    displayQuestion();
    showTimer.style.display = "block";
    intervalId = setInterval (countdown, 1000)
    
});
answerText1.addEventListener("click", function() {
    startButton.style.display = "none";
    nextButton.style.display = "block";
    displayQuestion();
    showTimer.style.display = "block";
   
});

answerText2.addEventListener("click", function() {

    startButton.style.display = "none";
    nextButton.style.display = "block";
    displayQuestion();
    showTimer.style.display = "block";
    
});

answerText3.addEventListener("click", function() {
   startButton.style.display = "none";
  nextButton.style.display = "block";
  displayQuestion();
  showTimer.style.display = "block";

 
});

answerText4.addEventListener("click", function() {
    startButton.style.display = "none";
    nextButton.style.display = "block";
    displayQuestion();
    showTimer.style.display = "block";
    
});

function displayQuestion(){ 
    if(currentQuestion <= allQuestions.length - 1){
        // displays the question
        questionText.textContent = allQuestions[currentQuestion].question

        answerText1.textContent = allQuestions[currentQuestion].choices[0];
        answerText2.textContent = allQuestions[currentQuestion].choices[1];
        answerText3.textContent = allQuestions[currentQuestion].choices[2];
        answerText4.textContent = allQuestions[currentQuestion].choices[3];

      

        
        // move to next question
        currentQuestion++
    } else {
        // when user finished all the questions
        questionText.textContent = 'Scores'
        nextButton.style.display = "none"
        answerText1.style.display = "none"
        answerText2.style.display = "none"
        answerText3.style.display = "none"
        answerText4.style.display = "none"
        showTimer.style.display = "none"
        timerText.style.display = "none"
        seconds.style.display = "none"
        inGameText.style.display = "none"
        gameOver.style.display = "block"
        showScore.style.display = "block"
        
    }
}

function displayHighScores() {

}

nextButton.addEventListener("click", function() {
    // TODO: check the answer here
    //  if (choices === answerIndex)


    // after answer is checked and accounted for run displayQuestion
    displayQuestion()
    
})