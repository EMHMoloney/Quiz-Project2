//starts quiz after DOCLoadingComplete
addEventListener("DOMContentLoaded", function () {
 let username = "";
 
//loads question when called by username
function loadQuestion(){
    if(currentQuestion<questions.length){
        document.getElementById("question").textContent = questions[currentQuestion].question;
        document.getElementById("currentQuestion").textContent = currentQuestion+1;
    } else {
        showResults(); 
    }
};
//adds event listener to true button and hands to function
document.getElementById("trueButton").addEventListener("click", handleTrueButtonClick);

//handles true button click event, checks boolean, advances to next question 
function handleTrueButtonClick(){
    if(questions[currentQuestion].answer === true){
        score ++;
    }
    currentQuestion++
    document.getElementById("score").textContent = score;
      loadQuestion();
}; 

//adds event listener to false button and hands to function
document.getElementById("falseButton").addEventListener("click", handleFalseButtonClick);

// handles false button click event, checks boolean, advances to next question
function handleFalseButtonClick(){
    if(questions[currentQuestion].answer === false){
        score ++;
    }
   currentQuestion++
   document.getElementById("score").textContent = score;
      loadQuestion();
};

//collates score out of 10 and displays in final score paragraph 
function showResults(){
    document.getElementById("results").classList.remove("hidden");
    document.getElementById("finalScore").textContent = score ;

    document.getElementById("congratulationsMessage").textContent = ` Congratulations, ${username}!`; 
};

//score variable question variable
let score = 0;
let currentQuestion =0;
//questions array of question:value, answer:value objects
const questions = [
    { question: "True or False:Irish film 'An Irish Goodbye'won the Oscar for Best Short Film. " , answer:true },
    { question: "True or False:The 2023 Rugby World Cup hosts are South Africa. ", answer: false},
    { question: "True or False: Michael D. Higgins and Leo Varadkar became the first ever President and Taoiseach to attend a British coronation.  ", answer: true },
    { question: "True or False: An Post moved is headquarters from the G.P.O to Cork.", answer: false },
    { question: "True or False: Ireland was represented in the Eurovision Song Contest 2023 by Hozier", answer: false },
    { question: "True or False: Limerck won the All Ireland senior hurling final for the fourth time in a row", answer: true },
    { question: "True or False: U.S. Vice President Kamala Harris made a state visit to Ireland in April", answer: false },
    { question: "True or False: Meta was fined €390 million by the Irish Data Protection Council", answer: true },
    { question: "True or False: Comedian Patrick Kielty took over as the new host of The Late Late Show", answer: true },
    { question: "True or False: The Irish Grand National was won by 'I Am Roy Keane', trained by Willie Mullins", answer: false },
];

//username handle, and event listener to pass  start to loadQuestion
document.getElementById("start").addEventListener("click",() => {
    username = document.getElementById("username").value;
    document.getElementById("usernameArea").classList.add("hidden");
    loadQuestion();
 });

});
