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

// Change behavior of answer button and text box:

function getUserAnswer() {
	return answer_area.value;}


