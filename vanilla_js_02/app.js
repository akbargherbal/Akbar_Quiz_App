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
function runEvent(e) {
    console.log(`EVENT happening ${e.type}`);
    console.log(`You Entered: ${e.target.value}`);
    e.preventDefault();
}
ansewr_area.addEventListener('onSubmit', runEvent);


console.log('Finish Debugging')

/* console.log('Start Debugging!')
console.log('----------------')
let val;
val = document.querySelector('.question_text');

let text_append = 'Element Created by JS!'
const p_append = document.createElement('p');
p_append.textContent = text_append
p_append.className = 'made_by_js';
p_append.id = 'id_made_by_js'

val = val.append(p_append)
console.log('End of Debugging!')
console.log('----------------')
 */