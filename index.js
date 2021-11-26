var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0 ;
// welcome the user
var userResponse= readlineSync.question("Hello! ! what should I call you : ");
console.log(chalk.blue ("Welcome "+userResponse ))
console.log("__________________")
 
var userPermission = readlineSync.question("Are you ready to play 'The Film Industry quiz ' (y/n) ")

if (userPermission.toUpperCase()=="Y"){
  console.log("Grab your seat ! Let's begin with the quiz :) ");
  console.log("Best of Luck ");

// list of questions
var questions=[
{
  question:"1)Dadasaheb Phalke Award was introduce in which of the following year ? \na:1975 \nb:1963 \nc:1969 \nd:1970\n ",
  answer :"c",
  fact:"*The Dadasaheb Phalke Award is India's highest award in cinema ."
  },
  {
    question:"2)Who among the following won the Oscar 2021 for 'Best Actor in a Leading Role'? \na:Gary Oldman \nb:Anthony Hopkins \nc:Riz Ahmed \nd:Chadwick Boseman\n ",
    answer:"b",
    fact:"Anthony Hopkins wins his second Best Actor Award after nearly 30 years for The Father ."
  },
  {
    question:"3)Who among the following was honoured after completing the 50th year in the film industry with the Dadasaheb Phalke Award ? \na:Kamal Hasan \nb:Amitabh Bachchan \nc:Anupam Kher \nd:Naseeruddin Shah\n ",
    answer:"b",
    fact:"Amitabh Bachchan also has been honoured with '*Padma Vibhushan'\n'*Padma Bhushan'\n'*Padma Shri."
  },
  {
    question:"4)Which is the highest grossing Indian film ever ? \na:Bajrangi Bhaijaan \nb:PK \nc:Dangal \nd:None of these\n ",
      answer:"c",
      fact: "The highest grossing Indian film is Dangal released in 2016 has amassed a collection of Rs 2,024–2,100 crore worldwide."
  },
  {
    question:"5)Which is the first golden jubilee film of India ? \na:Pundalik \nb:Alam Ara \nc:Sant Tukaram \nd:Raja Harishchandra\n ",
    answer:"c",
    fact:"In 1936, the movie, Sant Tukaram (Saint Tukaram) became the first ever Marathi movie to be screened at the International Venice Film Festival and was rated as one of the best three movies that year."
  },
  {
    question:"6)Who is the Director of the movie 'BAHUBALI-2', which was released in the year 2017 ? \na:Rajkumar Hirani \nb:Rajamouli \nc:K Vishwanath \nd:Sanjay Leela Bhansali\n ",
    answer:"b",
    fact:"In 2016, he was honoured with the Padma Shri for his contributions towards the field of Art."
  },
  {
    question:"7)Which is the first talkie film in India ? \na:Pundalik \nb:Alam Ara \nc:Sant Tukaram \nd:Raja Harishchandra\n ",
    answer: "b",
    fact:" 'Alam Ara' which means The 'Light of the World' was the first movie featuring sound in India's history. It was by Ardeshir Irani and this movie was debuted on March 14, 1931 in Bombay."
  },
  {
    question:"8)Which was the first Indian movie nominated for Oscar ? \na:Salaam Bombay \nb:Lagaan \nc:Mother India \nd:None fo these\n ",
    answer:"c",
    fact:"As of 2014, only three Indian films—Mother India (1957), Salaam Bombay! (1988) and Lagaan (2001)—have been nominated for the Academy Award for “Best Foreign Language Film”."
  },
  {
    question:"9)Who was known as first lady of Indian cinema ? \na:Meena Kumari \nb:Devika Rani Chaudhari \nc:Suraiya \nd:None of these\n ",
    answer:"b",
    fact:"Actress in Indian films who was active during the 1930s and 1940s. Widely acknowledged as the first lady of Indian cinema ."
  },
  {
    question:"10)How many times AR Rahman was nominated for Oscar ? \na:4 \nb:1 \nc:2 \nd:None of the above\n " ,
    answer:"c",
    fact:"A R Rahman (Allan Rakha Rahman) won two Oscar awards for the film “SLUMDOG MILLIONAIRE”"
  }
] 
// toppers
var topScorer = [
  {
    name :"Rahul",
    scored:"9"
  },
  {
    name:"Durgesh",
    scored:"8"
  },
  {
    name:"Jagruti",
    scored:"8"
  }
]
// function 
function quiz (question , answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer.toUpperCase()== answer.toUpperCase()){
    
    console.log(chalk.black.bgGreen.bold("Yes!! That's correct "));
    score++;
    console.log(questions[i].fact);
  }else{
    console.log(chalk.black.bgRed.bold("Nope!! That's wrong "));
    
  }

console.log("Current Score "+ score);
console.log("_______________________");

}

// for loop for all question
for(i=0 ;i<questions.length ;i++){
 quiz (questions[i].question , questions[i].answer) ;
}



  // score board
  console.log(chalk.black.bgYellow("Your score was "+score+ "/10 below are the top scorers. Send me a screenshot if you are in the top "));

// for loop for scorer
for (i =0 ; i<topScorer.length ;i++ ){
  console.log(topScorer[i].name+"===>"+topScorer[i].scored);
}
  
    
  }else{
     console.log(chalk.bgMagneta("Comeback whenever you are ready... "));
  }


  
