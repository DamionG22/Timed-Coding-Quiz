var startButton = document.getElementById("startButton");
var questionText = document.getElementById("question-text");
var answerText1 = document.getElementById("answer-text1")
var answerText2 = document.getElementById("answer-text2")
var answerText3 = document.getElementById("answer-text3")
var answerText4 = document.getElementById("answer-text4")
var nextButton = document.getElementById("next");
var showTimer = document.getElementById("timer");
// startButton.addEventListener("click", function() {

    
// })

var questions = document.getElementsByClassName("questions");
var answers = document.getElementsByClassName("answers")

var scoreCounter = 0
// sets timer to start at 10 seconds
var seconds = 10;

var intervalId 

// function clearInterval {
//     clearInterval

// }
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
    }
   
}
function init() {
    scoreTracker();
    seconds = 10 

}

var currentQuestion = 0;

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

// // sets timer to start at 10 seconds
// var seconds = 10;

// var intervalId; 




// // Timer
// function countdown() {
    

//   // updates the seconds value
//   seconds--;

//   // displays the updated seconds value
//   console.log(seconds);

//   showTimer.textContent = seconds;

//   // stops the timer at 0
//   if (seconds > 0) {
//     clearInterval(intervalId);
//   }
 
// }
// var intervalId = setInterval(countdown, 1000);

startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    nextButton.style.display = "block";
    displayQuestion();
    showTimer.style.display = "block";
    intervalId = setInterval (countdown, 1000)
    
});
answerText1.addEventListener("click", function() {
    startButton.style.display = "none";
    nextButton.style.display = "block";
    displayQuestion();
    showTimer.style.display = "block";
    intervalId = setInterval (countdown, 1000);
});

answerText2.addEventListener("click", function() {

    startButton.style.display = "none";
    nextButton.style.display = "block";
    displayQuestion();
    showTimer.style.display = "block";
    intervalId = setInterval (countdown, 1000);
});

answerText3.addEventListener("click", function() {
   startButton.style.display = "none";
  nextButton.style.display = "block";
  displayQuestion();
  showTimer.style.display = "block";
  intervalId = setInterval (countdown, 1000);
 
});

answerText4.addEventListener("click", function() {
    startButton.style.display = "none";
    nextButton.style.display = "block";
    displayQuestion();
    showTimer.style.display = "block";
    intervalId = setInterval (countdown, 1000);
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