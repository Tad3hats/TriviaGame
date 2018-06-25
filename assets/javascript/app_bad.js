
var score=0;
var correct=0;
var incorrect=0;


// set up the actual trivia questions
var questions = [
    {
        question:   "Q1: blah blah blah?",
        answers:   {
                    a: "Steve Jobs",
                    b: "Bill Gates",
                    c: "Albert Einstein",
                    d: "Ralph Waldo Emerson"
                },
        correctAnswer: "c"
        },                            
    {
        question:   "Q2: hahahaha?",
        answers:   {
            a: "Steve Jobs",
            b: "Maxwell Marovich",
            c: "Albert Einstein",
            d: "Ralph Waldo Emerson"
        },
        correctAnswer: "c"
        },
    {
        question: "Q3: What event began on April 12, 1861?",
        answers:  {
            a:  "First manned flight",
            b:  "California became a state",
            c:  "American Civil War began",
            d:  "Declaration of Independence"
        },
        correctAnswer: "c"
        }

            ];

    //select these HTML tags and store references to these elements in variables:
            var quizContainer = document.getElementById('quiz');
            var resultsContainer = document.getElementById('results');
            var submitButton = document.getElementById('submit');

function buildquiz() {

    // we'll need a place to store the HTML output
        var output = [];
      
        // for each question...
        myQuestions.forEach(
          (questions, questionNumber) => {
      
            // we'll want to store the list of answer choices
            var answers = [];
      
            // and for each available answer...
            for(letter in questions.answers){
      
              // ...add an HTML radio button
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
       // add this question and its answers to the output
       output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
    }
}


function showResults() {
 // gather answer containers from our quiz
 var answerContainers = quizContainer.querySelectorAll('.answers');

 // keep track of user's answers
 var correct = 0;

 // for each question...
 myQuestions.forEach( (currentQuestion, questionNumber) => {

   // find selected answer
   var answerContainer = answerContainers[questionNumber];
   var selector = 'input[name=question'+questionNumber+']:checked';
   var userAnswer = (answerContainer.querySelector(selector) || {}).value;

   // if answer is correct
   if(userAnswer===currentQuestion.correctAnswer){
     // add to the number of correct answers
     correct++;

     // color the answers green
     answerContainers[questionNumber].style.color = 'lightgreen';
   }
   // if answer is wrong or blank
   else{
     // color the answers red
     answerContainers[questionNumber].style.color = 'red';
   }
 });

 // show number of correct answers out of total
 resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}



// on submit, show results
submitButton.addEventListener('click', showResults); 


})



