/*
log keyboard events to the console for input of id answer_text_box
*/

document.getElementById("answer_text_box").addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.key === 13) {
        document.getElementById("answer_submit").click();
    }
    else {
        console.log(`Key Pressed: ${event.key}`)
    }
});