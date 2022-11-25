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

    // document.getElementById('question_text').style.fontFamily = 'Amiri Roboto Helvetica Arial';


    console.log('The Language of this Document is Arabic!');} else {console.log('Not Arabic')}




// Load Event Listeners; Something I saw Travery Media do in his JavaScript Course!! 
// No Idea what it does but it works!


const question_set = [
{'QUESTION_TEXT': 'Canler remained behind, with the other Two Rivers lads, ready to l _ _ _  them from the Black Tower in an escape attempt if something went wrong tonight. It made sense to leave him, despite his protests. He had a family. [4 Letters L _ _ _ ]',
'OPTION_1': 'lead',
'OPTION_2': 'LEAD',
'OPTION_3': 'Lead'},
{'QUESTION_TEXT': '"Listen," I cut off Hills-I had to. "Naomi w _ _ _ e me a letter almost every week that she was in school. I saved those letters, all of them. I helped to bring her up. We\'re close. That means a lot to me." [5 Letters W _ _ _ _ _ E]',
'OPTION_1': 'wrote',
'OPTION_2': 'WROTE',
'OPTION_3': 'Wrote'},
{'QUESTION_TEXT': 'His gaze s _ _ _ _ d on my face, and I realized he was being playful. Not exactly seductive, but playful. It was different and almost more disturbing. Nathaniel managed to be childlike, catlike, and still be an adult. [6 Letters S _ _ _ _ _ D]',
'OPTION_1': 'stayed',
'OPTION_2': 'STAYED',
'OPTION_3': 'Stayed'},
{'QUESTION_TEXT': 'His hand s _ _ _  up my back and into my damp hair before he murmured, "You\'re mine now, beautiful, in all the ways you can be. What we just shared, I loved it, it was right. [4 Letters S _ _ _ ]',
'OPTION_1': 'slid',
'OPTION_2': 'SLID',
'OPTION_3': 'Slid'}
                    ]
let question = question_set[0].QUESTION_TEXT                   
let options = [question_set[0].OPTION_1, question_set[0].OPTION_2, question_set[0].OPTION_3]

let paragaraph = document.getElementById('q_text');
//paragaraph.textContent = `${question} >>>>>>>> CHANGED with JS!`


const ansewr_area = document.getElementById('answer_text_box');
ansewr_area.value = '';


console.log(question)
console.log(options)

console.log('Start Debugging')



let list_answer = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

let final_answer;

let answer_input = document.getElementById("answer_text_box");
let answer_button = document.getElementById("answer_submit_button");

function checkAnswer(event) {
    let user_input = document.getElementById("answer_text_box").value;
    if (event.keyCode === 13 || event.type === "click") {
        document.getElementById("user_answer_for_js").textContent = user_input.trim();
    }
  }

answer_input.addEventListener("keyup", checkAnswer);
answer_button.addEventListener("click", checkAnswer);

function user_answer_func( ) {
let user_answer = document.getElementById("user_answer_for_js").textContent.trim();
if (list_answer.includes(user_answer)) 
    {console.log(`Correct Answer! ${user_answer} is in the list`)} 
else 
    {console.log(`WRONG! ${user_answer} is NOT in the list`)}
    }
let answerTag = document.getElementById("user_answer_for_js").textContent.trim();
while (answerTag.length > 0) {
    user_answer_func();
    console.log('Reseting Tag Text Content');
    document.getElementById("user_answer_for_js").textContent = '';
}