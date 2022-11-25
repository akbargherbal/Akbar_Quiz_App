let language = 'en';
if (language === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.querySelector('html').style.fontSize = '18px';
    document.getElementById('quiz_no').textContent = 'السؤال 1 من 20';
    document.getElementById('answer_text_box').placeholder = 'الإجابة؟';
    document.getElementById('answer_submit_button').value = 'تأكيد';

    document.getElementById('current_score').textContent = 'النقاط : 0'
    document.getElementById('correct').textContent = 'إجابات صحيحة : 0'
    document.getElementById('wrong').textContent =' إجابات خاطئة : 0'

    document.getElementById('question_text').style.fontFamily = 'Amiri Roboto Helvetica Arial';
    console.log('The Language of this Document is Arabic!');} else {console.log('Not Arabic')}


const answer_area = document.getElementById('answer_text_box');
const answer_btn = document.getElementById('answer_submit_button');

let list_options = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var finalAnswer = ''


// Load all events listerns
loadEventListeners();
// Load all events listerns

// Submit answer via submit button:
function loadEventListeners() {
    answer_btn.addEventListener('click', submitButtonClick);
    answer_area.addEventListener('keyup', submitEnterKey);
    }


function submitButtonClick(e) {
    let user_answer = answer_area.value;
    finalAnswer =  user_answer.trim();
    answer_area.value = '';
    checkAnsewr(finalAnswer);
    console.log(finalAnswer);
    e.preventDefault();
    
}

function submitEnterKey(e) {
    if (e.keyCode === 13) {
            submitButtonClick(e);
            e.preventDefault();
        }
    }

function checkAnsewr(answer) {
    if (list_options.includes(answer)) {
        console.log( "Correct")}
    else {console.log( "Wrong!")}
    }