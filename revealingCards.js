window.addEventListener("load", init, false);  //after the pages loads the function init will run



let cards={
    'CardSpot': { 'div': '#flex-box-result' },
    'cards': ['DA', 'LA', 'RA', 'UA'],
    'bot': [],
    user:[],
}
let bot = cards['bot'];
const cardSpot = cards['CardSpot'];
const hitSound = new Audio('sounds/swish.m4a'); //creating a variable that will hold a sound
const winnerSound=new Audio('sounds/cash.mp3');
const loserSound=new Audio('sounds/aww.mp3');
let counterBot=0;
let user = cards.user;
let i;
let correct=0;

function init(){
    document.getElementById("click-button").addEventListener("click",creatingCard);/*
     clicking in the start ion the start button the function gettingCards will run*/



}


function randomCard() {    //this function will give me a number between 1 and 4

    let randomIndex = (Math.floor(Math.random() * 4))+1;
return randomIndex;
}

function creatingCard() { //this function will create a variabl that contain an image
    do {
        randomCard(); //create the ramdon number

    ramdonCard = randomCard();  //saving the ramdon number in a variable to its usage in the switch statement

    let cardImage = document.createElement('img'); /* create a image */
        cardImage.height = 100; //height of the image
        cardImage.width = 100; //width of the image
   switch (ramdonCard) {
       case 1: // if the random number es 1 it will save the LA image in cardImage
            cardImage.src = `img/LA.JPG`;
           bot[counterBot] = 'LA';
           break;
        case 2:  // if the random number es 2 it will save the UA image in cardImage
           cardImage.src = `img/UA.JPG`;
           bot[counterBot] = 'UA';
           break;
        case 3:
           cardImage.src = `img/RA.JPG`;
           bot[counterBot] = 'RA';
       break;
       case 4:
          cardImage.src = `img/DA.JPG`;
           bot[counterBot] = 'DA';




            break;
    }

            document.querySelector(cardSpot['div']).appendChild(cardImage); //puting the image in the cardSpot(div)which is  #flex-box-result
            hitSound.play(); //Sound like a card
            counterBot++;  //i just want to show 4 cards thats why im using a counter to do the proccess 4 times
    }while (counterBot<8);
    showingTheMiddleCounter();
    comparingArrays();
console.log(user.length);
}


function showingTheMiddleCounter(){
    counterInTheMiddle();  //this function is in counterBack.js
}


 function comparingArrays () {
     var update = setTimeout(comparingArrays,12000);  //it will keep prompt the funtion 12 seconds after the DOM is loaded.
     if(user.length>=8){

     for (i = 0; i < 8; i++) {

         if (user[i] === bot[i]) {
             correct++;

         }

     }
     console.log(correct);
     if (correct == 8) // if the user and the cards that the PC created are the same , the user won.

         {
             document.getElementById("middleMessageWinner").innerText = "You won";
         winnerSound.play();

         }
     else
         {

            document.getElementById("middleMessageWinner").innerText = "You lose";
             loserSound.play();

             }
         }




 }
