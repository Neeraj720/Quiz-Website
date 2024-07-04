const quizDB=[
    {
    question: "Q1 What is the full form of HTML",
    a: "Hello World",
    b: "Hello India",
    c: "Hyper Text Markup Language",
    d: "None of these",
    ans:"ans3"
},
{
    question:" Q2 Which planet is known as the Red Planet?",
    a:"Mars", 
    b:"Venus", 
    c:"Jupiter", 
    d:"Saturn",
    ans:"ans1"
}
,
{
    question:"Q3 What is the largest organ in the human body?",
    a:"Liver", 
    b:"Lungs", 
    c:"Skin", 
    d:"Heart",
    ans:"ans2"
}
,
{
    question:"Q4 Who painted the Mona Lisa?",
    a:"Vincent van Gogh", 
    b:"Leonardo da Vinci", 
    c:"Pablo Picasso", 
    d:"Michelangelo",
    ans:"ans1"
},
{
    question:"Q5 Which year was the first iPhone released?",
    a:"2005", 
    b:"2007", 
    c:"2009", 
    d:"2010",
    ans:"ans1"
}
];
//get all the id and class
const question=document.querySelector('.question')
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2')
const option3=document.querySelector('#option3')
const option4=document.querySelector('#option4')
const submit=document.querySelector('#submit')
//here i have used getElementsByClassName becuase in my case querySelector is not Working
const answers=document.getElementsByClassName('answer')
const showScore=document.getElementById('showScore')
//we use let becuase it will be changed and const cant be changed
let score=0
let questionCount=0
//Function for load question and answer
let loadQuestion=()=>{
    const questionList=quizDB[questionCount]
    question.innerHTML=questionList.question
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
}
function getCheckAnswer(){
    //Also Here I Have used getElementsByClassName becuse query selector is not working in this case
    // const answers=document.getElementsByClassName('answer')
    let answer;
    // Here I Have used Simple For Loop Beacuse ForEach Loop is not working In this Case
    for(let currAnsElem=0;currAnsElem<answers.length;currAnsElem++ ){
        if(answers[currAnsElem].checked){
            answer = answers[currAnsElem].id
        }
    }
     return answer
};
//Here also We got the same problem with forEach Loop that's why we use normal Loop Instead of ForEach Loop
function deselectAll(){
    for(let currAnsElem=0;currAnsElem<answers.length;currAnsElem++ ){
        if(answers[currAnsElem].checked = false){
            console.log("succsee")
        }
    }
}
submit.addEventListener('click',()=>{
    const checkAnswer=getCheckAnswer()
    console.log(checkAnswer)

    if(checkAnswer === quizDB[questionCount].ans){
        score++
    }

    questionCount++

    //Before Question will be loaded Deselect all the options
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3>Your Score is ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea')
    }
})
loadQuestion()
