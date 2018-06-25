
var correctAnswers = 0;

var allQuestions = {
  questions: [{
    question: "In Aladdin, what is the name of Jasmine's pet tiger?",
    choices: ["Rajah", "Bo", "Iago", "Jack"],
    correct: 0
  }, {
    question: "In Peter Pan, Captain Hook had a hook on which part of his body?",
    choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
    correct: 1

  }, {
    question: "In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    correct: 3

  }, {
    question: "In Beauty and the Beast, how many eggs does Gaston eat for breakfast?",
    choices: ["2 Dozen", "5 Dozen", "5000", "0"],
    correct: 1

  }, {
    question: "In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    correct: 0

  }, {
    question: "After being on earth, where did Hercules first meet his father Zeus?",
    choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian Fields"],
    correct: 2

  }, {
    question: "During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
    choices: ["Yellow", "Blue", "Gold", "White"],
    correct: 2

  }, {
    question: "In Bambi, what word does the owl use to describe falling in love?",
    choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
    correct: 3
  }]
}

function startGame() {
  for (var i = 0; i < allQuestions.questions.length; i++) {
    $("#quiz1").append(`
    <div class="question-container">
      <div class="question">${allQuestions.questions[i].question}</div>
      <div class="choices">
        <label>
          <input type="radio" name="question">${allQuestions.questions[i].choices[0]}              
        </label>
        <label>
          <input type="radio" name="question">${allQuestions.questions[i].choices[1]}              
        </label>
        <label>
          <input type="radio" name="question">${allQuestions.questions[i].choices[2]}              
        </label>
        <label>
          <input type="radio" name="question">${allQuestions.questions[i].choices[3]}              
        </label>
      </div>  
    </div>
    
  `)
  }

  //append the submit button, but only at the end of the for loop
  $("#quiz1").append(`
  <button id="submitButton" text-align="center">submit your questions</button>
  `)

}

//  Set our number counter to 100.
var number = 25;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
//  When the submit button gets clicked, run the stop function.
$("#submitButton").on("click", stop);

//  When the start game button gets clicked, execute the run function.
$("#startButton").on("click", run);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#timer").html("You have " + "<b>"+ number + "</b>" + " seconds left..." + "<br>");

  //  Once number hits zero...
  if (number === 0) {
    //  ...run the stop function.
    stop();
    //  Alert the user that time is up.
    alert("Time Up!");
  }
}
//  The stop function
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}
//  Execute the run function.
run();

function evaluateScore() {

  var a = document.getElementByName("question");
  var values = "";
  for (var i = 0; i < a.length; i++) {
    if (a[i].checked) {
      val = allQuestions[i].choices;

      if (val === 0) {
        correctAnswers++
      }
      if (val === 1) {
        correctAnswers++
      }
      if (val === 3) {
        correctAnswers++
      }
      if (val === 1) {
        correctAnswers++
      }
    }
  }
  console.log("Number of answers correct: " + correctAnswers)

  //the Game starts when you click the start game button
  $(document).ready(function () {
    $("#startButton").on("click", (startGame));

    //     //set timer variables 
    // var sec = 25;
    // var time = setInterval(myTimer, 1000);
    // //start timer function and write it to timer div
    // function myTimer() {
    //   document.getElementById('timer').innerHTML = sec + " seconds left";
    //   sec--;
    //   if (sec == -1) {
    //     clearInterval(time);
    //     alert("Time out!! :(");
    //   }
    // }
  })


  //Evalute score after you click the submit button
  $("#submitButton").on("click", (evaluateScore));
}
