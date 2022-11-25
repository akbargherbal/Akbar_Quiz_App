Synthesizing 10/10 solutions

=======

*/
function getAnswer() {
    document.getElementById("answer_text_box").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("answer_submit").click();
        }
    });
}

// Path: github_piolot.js
/*
Upon clicking the button of id answer_submit; get the value of the user's answer
*/
function getAnswer() {
    document.getElementById("answer_submit").addEventListener("click", function(event) {
        event.preventDefault();
        let answer = document.getElementById("answer_text_box").value;
        document.getElementById("answer_text_box").value = '';
        document.getElementById("answer_text_box").focus();
        document.getElementById("answer_text_box").value = '';
        document.getElementById("answer_text_box").focus();
        if (answer == null || answer == "") {
            alert("You must enter a value");
        } else {
            //alert("You entered: " + answer);
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
            document.getElementById("answer_text_box").value = '';
            document.getElementById("answer_text_box").focus();
        }
    });
}

// Path: github_piolot.js

=======

*/
function getAnswer() {
  var input = document.getElementById("answer_text_box");
  var answer = input.value;
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; send the value of the user's answer to the server
*/
function sendAnswer() {
  var answer = getAnswer();
  var data = {answer: answer};
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/answer", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; clear the input of id answer_text_box
*/
function clearAnswer() {
  var input = document.getElementById("answer_text_box");
  input.value = "";
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer, send the value of the user's answer to the server, and clear the input of id answer_text_box
*/
function sendAndClearAnswer() {
  sendAnswer();
  clearAnswer();
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer, send the value of the user's answer to the server, and clear the input of id answer_text_box
*/
function sendAndClearAnswerEnterKey(event) {
  if (event.keyCode == 13) {
    sendAndClearAnswer();
  }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer, send the value of the user's answer to the server, and clear the input of id answer_text_box
*/
function sendAndClearAnswerEnterKey(event) {
  if (event.keyCode == 13) {
    sendAndClearAnswer();
  }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer, send the value of the user's answer to the server, and clear the input of id answer_text_box
*/
function sendAndClearAnswerEnterKey(event) {
  if (event.keyCode == 13) {
    sendAndClearAnswer();
  }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer, send the value of the user's answer to the server, and clear the input

=======

*/
answer_text_box.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        answer = answer_text_box.value;
    }
});

// Path: github_piolot.js
/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
answer_text_box.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        answer = answer_text_box.value;
        if(answer == current_question.correct_answer){
            correct_answer();
        }
        else{
            wrong_answer();
        }
    }
});

// Path: github_piolot.js
/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
answer_text_box.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        answer = answer_text_box.value;
        if(answer == current_question.correct_answer){
            correct_answer();
        }
        else{
            wrong_answer();
        }
    }
});

// Path: github_piolot.js
/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
answer_text_box.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        answer = answer_text_box.value;
        if(answer == current_question.correct_answer){
            correct_answer();
        }
        else{
            wrong_answer();
        }
    }
});

// Path: github_piolot.js
/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
answer_text_box.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        answer = answer_text_box.value;
        if(answer == current_question.correct_answer){
            correct_answer();
        }
        else{
            wrong_answer();
        }
    }
});

// Path: github_piolot.js
/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
answer_text_box.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode == 13){
        answer = answer_text_box.value;
        if(answer == current_question.correct_answer){
            correct_answer();
        }
        else{
            wrong_answer();
        }
    }
});

// Path: github_piol

=======

*/
function getAnswer(){
  var answer_text_box = document.getElementById("answer_text_box");
  var answer = answer_text_box.value;
  //alert(answer);
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer2(){
  var answer_text_box = document.getElementById("answer_text_box2");
  var answer = answer_text_box.value;
  //alert(answer);
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer3(){
  var answer_text_box = document.getElementById("answer_text_box3");
  var answer = answer_text_box.value;
  //alert(answer);
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer4(){
  var answer_text_box = document.getElementById("answer_text_box4");
  var answer = answer_text_box.value;
  //alert(answer);
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer5(){
  var answer_text_box = document.getElementById("answer_text_box5");
  var answer = answer_text_box.value;
  //alert(answer);
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer6(){
  var answer_text_box = document.getElementById("answer_text_box6");
  var answer = answer_text_box.value;
  //alert(answer);
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer7(){
  var answer_text_box = document.getElementById("answer_text_box7");
  var answer = answer_text_box.value;
  //alert(answer);
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer8(){
  var answer_text_box = document.getElementById("answer_text_box8");
  var answer = answer_text_box.value;
  //alert(answer);
  return answer;
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box

=======

*/
function get_answer() {
  var answer = document.getElementById("answer_text_box").value;
  console.log(answer);
}

/*
Send the answer to the server
*/
function send_answer() {
  var answer = document.getElementById("answer_text_box").value;
  var question_id = document.getElementById("question_id").value;
  var url = "/answer/" + question_id + "/" + answer;
  console.log(url);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();
}

/*
Upon clicking the submit button, send the answer to the server
*/
function submit_answer() {
  send_answer();
  get_answer();
}

// Path: index.html
<div class="form-group">
  <input type="text" class="form-control" id="answer_text_box" placeholder="Enter Answer">
</div>
<button type="button" class="btn btn-default" onclick="submit_answer()">Submit</button>

=======

*/
function getAnswer() {
  // Get the value of the user's answer
  var userAnswer = document.getElementById('answer_text_box').value;
  // If the user's answer is not empty
  if (userAnswer !== '') {
    // Check the user's answer
    checkAnswer(userAnswer);
    // Clear the input of id answer_text_box
    document.getElementById('answer_text_box').value = '';
  }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer() {
  // Get the value of the user's answer
  var userAnswer = document.getElementById('answer_text_box').value;
  // If the user's answer is not empty
  if (userAnswer !== '') {
    // Check the user's answer
    checkAnswer(userAnswer);
    // Clear the input of id answer_text_box
    document.getElementById('answer_text_box').value = '';
  }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer() {
  // Get the value of the user's answer
  var userAnswer = document.getElementById('answer_text_box').value;
  // If the user's answer is not empty
  if (userAnswer !== '') {
    // Check the user's answer
    checkAnswer(userAnswer);
    // Clear the input of id answer_text_box
    document.getElementById('answer_text_box').value = '';
  }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer() {
  // Get the value of the user's answer
  var userAnswer = document.getElementById('answer_text_box').value;
  // If the user's answer is not empty
  if (userAnswer !== '') {
    // Check the user's answer
    checkAnswer(userAnswer);
    // Clear the input of id answer_text_box
    document.getElementById('answer_text_box').value = '';
  }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; get the value of the user's answer
*/
function getAnswer() {
  // Get the value of the user's answer
  var userAnswer = document.getElementById('answer_text_box').value;
  // If the user's answer is not empty
  if

=======

*/
function getAnswer() {
    var answer = document.getElementById('answer_text_box').value;
    var answer = answer.trim();
    if (answer.length > 0) {
        document.getElementById('answer_text_box').value = '';
        return answer;
    }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; send the user's answer to the server
*/
function sendAnswer() {
    var answer = getAnswer();
    if (answer) {
        var msg = {
            'type': 'answer',
            'answer': answer
        };
        console.log('sending answer: ' + answer);
        ws.send(JSON.stringify(msg));
    }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; send the user's answer to the server
*/
function sendAnswer() {
    var answer = getAnswer();
    if (answer) {
        var msg = {
            'type': 'answer',
            'answer': answer
        };
        console.log('sending answer: ' + answer);
        ws.send(JSON.stringify(msg));
    }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; send the user's answer to the server
*/
function sendAnswer() {
    var answer = getAnswer();
    if (answer) {
        var msg = {
            'type': 'answer',
            'answer': answer
        };
        console.log('sending answer: ' + answer);
        ws.send(JSON.stringify(msg));
    }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; send the user's answer to the server
*/
function sendAnswer() {
    var answer = getAnswer();
    if (answer) {
        var msg = {
            'type': 'answer',
            'answer': answer
        };
        console.log('sending answer: ' + answer);
        ws.send(JSON.stringify(msg));
    }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; send the user's answer to the server
*/
function sendAnswer() {
    var answer = getAnswer();
    if (answer) {
        var msg = {
            'type': 'answer',
            'answer': answer
        };
        console.log('sending answer: ' + answer);
        ws.send(JSON.stringify(msg));
    }
}

/*
Upon hitting the Enter key after typing in input of id answer_text_box; send the user's answer

=======

*/
function getAnswer() {
  var answer = document.getElementById('answer_text_box').value;
  console.log

=======

*/
function getAnswer() {
    // get the value of the user's answer
    var userAnswer = document.getElementById("answer_text_box").value;
    // call the function that will check the answer
    checkAnswer(userAnswer);
}

// Path: github_piolot.js
/*
Upon getting the user's answer, check if it is correct
*/
function checkAnswer(userAnswer) {
    // if the user's answer is correct, call the function that will show the user that they are correct
    if (userAnswer == currentQuestion.correctAnswer) {
        showCorrect();
    }
    // if the user's answer is incorrect, call the function that will show the user that they are incorrect
    else {
        showIncorrect();
    }
}

// Path: github_piolot.js
/*
Upon getting the user's answer, show the user that they are correct
*/
function showCorrect() {
    // show the user that they are correct
    document.getElementById("correct_incorrect").innerHTML = "Correct!";
    // update the user's score
    updateScore();
    // call the function that will show the next question
    showNextQuestion();
}

// Path: github_piolot.js
/*
Upon getting the user's answer, show the user that they are incorrect
*/
function showIncorrect() {
    // show the user that they are incorrect
    document.getElementById("correct_incorrect").innerHTML = "Incorrect!";
    // call the function that will show the next question
    showNextQuestion();
}

// Path: github_piolot.js
/*
Upon getting the user's answer, update the user's score
*/
function updateScore() {
    // update the user's score
    currentScore += 1;
    // update the score on the page
    document.getElementById("score").innerHTML = "Score: " + currentScore;
}

// Path: github_piolot.js
/*
Upon getting the user's answer, show the next question
*/
function showNextQuestion() {
    // check if there are any more questions
    if (currentQuestionIndex == questions.length - 1) {
        // if there are no more questions, call the function that will show the user their final score
        showFinalScore();
    }
    // if there are more questions, show the next question
    else {
        // update the current question index
        currentQuestionIndex += 1;
        // update the current question

=======

*/
function getAnswer(){
  var userAnswer = document.getElementById("answer_text_box").value;
  if (userAnswer == "") {
    alert("You must enter a value");
  } else {
    // Do something with the user's answer
  }
}

// Path: index.html
<input id="answer_text_box" type="text" onkeypress="if(event.keyCode==13) getAnswer();" />

Answer

You can use the onkeypress event to detect when the user presses the Enter key.

The onkeypress event is fired when a key is pressed down.

It is fired before the keyup event.

It is not fired for non-printable keys, such as the arrow keys.

The onkeypress event is not supported in Internet Explorer 8 and earlier versions.

Test it Yourself »

Previous

Next
