/*
if the user hit the Enter key or clicked on the Answer button after they typed in the text input of id "answer_input";
get the value of the input and save it to local to a variable called final_result
*/

function checkAnswer(event) {
    let user_input = document.getElementById("answer_text_box").value;
    if (event.keyCode === 13 || event.type === "click") {
        return user_input;
    }
  }