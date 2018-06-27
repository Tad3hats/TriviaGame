
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
    <div class="question-container"><form>
      <div class="question">${allQuestions.questions[i].question}</div>
      <div class="choices">
        <label>
          <input type="radio" name="question` + i + `">${allQuestions.questions[i].choices[0]}              
        </label><br>
        <label>
          <input type="radio" name="question` + i + `">${allQuestions.questions[i].choices[1]}              
        </label><br>
        <label>
          <input type="radio" name="question` + i + `">${allQuestions.questions[i].choices[2]}              
        </label><br>
        <label>
          <input type="radio" name="question` + i + `">${allQuestions.questions[i].choices[3]}              
        </label><br>
      </div>  
      </form>
    </div>
    
  `)
  }

  //append the submit button, but only at the end of the for loop
  $("#quiz1").append(`
  <button id="submitButton" text-align="center">submit your questions</button>
  `)

}

//  Set our number counter to 25.
var number = 35;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the start game button gets clicked, execute the run function.
$("#startButton").on("click", run);
//  When the submit button gets clicked, run the stop function.
$("#submitButton").on("click", stop);

//  The run function sets an interval
//  that runs the decrement function once a second.
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);

  //  The decrement function.
  function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#timer").html("You have " + "<b>" + number + "</b>" + " seconds left..." + "<br><br>");

    //if user clicks submit button before timer runs out, then run the evaluate score function
    if ($("#submitButton").on("click", evaluateScore));

    //  Once number hits zero...
    if (number === 0) {
      //  ...run the stop function.
      stop();
      //  Alert the user that time is up.
      // alert("Time Up!");
    }
  }
}


function evaluateScore(label) {
  var answers = [0, 1, 3, 1, 0, 2, 2, 3]
  var correctAnswers = 0;

  for (var i = 0; i < allQuestions.questions.length; i++) {
    if (label.elements[i].checked) {
      if (label.elements[i].value == allQuestions.questions.choices[i]) {
        correctAnswers++
      }
    }
  }
  console.log("Number of answers correct: " + correctAnswers)
}


//the Game starts when you click the start game button
$(document).ready(function () {
  $("#startButton").on("click", startGame);
  console.log("the document is ready");
})


//  The stop function
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  //  Alert the user that time is up.
  alert("Time Up!");
  evaluateScore();
}