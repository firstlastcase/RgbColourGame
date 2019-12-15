
var numberofColours = 6;
var colours = genColours(numberofColours);
var square = document.querySelectorAll(".squaresContainer div");
var theChosenColour = colours[Math.floor(Math.random() * Math.floor(numberofColours))];
var colourDisplay = document.querySelector("h1");
var resultDisplay = document.querySelector("#resultDisplay");
var resetBtn = document.querySelector(".resetButton");
var gameHeader = document.querySelector("#gameHeader");
var easyBtn = document.querySelector(".easy");
var hardBtn = document.querySelector(".hard");
var mode = 1; //hard ==> i.e. 6 colours   if 0, then it is easy with only 3 colours

colourDisplay.textContent = theChosenColour;

assignColours();
init();

resetBtn.addEventListener('click', resetAll);
easyBtn.addEventListener('click', goEasy);
hardBtn.addEventListener('click', goHard);

function init(){

    for (var b=0; b < square.length; b++){
        //when clicking a square
        square[b].addEventListener('click', clickSquare);
    };
}

function clickSquare(){

    // if it is the chosen colour then 1- display "Correct" 2- change all squares colours to it 
        // 3- change the reset button to say "Play Again" 4- change the game Header colour to it
    if (this.style.backgroundColor === theChosenColour){
        resultDisplay.textContent = "Correct";
        for (var j=0;j<colours.length;j++){
            square[j].style.backgroundColor=theChosenColour;
        }
        gameHeader.style.backgroundColor=theChosenColour;
        resetBtn.textContent="Play Again!"               
    }
    else {
        //change the color of the square to grey which is similar to the background (make the square disappear) & display "Try Again!"
        // console.log(this.style.backgroundColor);      //###########LOGGING###################
        resultDisplay.textContent = "Try Again!";
        this.style.backgroundColor='rgb(211, 211, 211)';

    }
}

function assignColours(){
    for (var i=0; i < square.length; i++){
        //setting the square colours to the random ones
        if (colours[i]){
            square[i].style.backgroundColor=colours[i];
        }
        else {
            square[i].classList.add("hideSquare");
            // square[i].style.display="none";
        }
    }
}

function resetAll(){
    colours= genColours(numberofColours);
    for (var i=0; i < square.length; i++){
        // square[i].style.display="block";
        square[i].classList.remove("hideSquare");
    }
    assignColours();
    theChosenColour=colours[Math.floor(Math.random() * Math.floor(colours.length))];
    colourDisplay.textContent = theChosenColour;
    
    init();
    this.textContent="New Colours";
    resultDisplay.textContent = "";

    gameHeader.style.backgroundColor = "steelblue";
}

function goEasy(){
    if (mode===1){
        mode=0;
        easyBtn.classList.toggle("selected");
        hardBtn.classList.toggle("selected");
        numberofColours=3;
        resetAll();

    }  
}

function goHard(){
    if (mode===0){
        mode=1;
        easyBtn.classList.toggle("selected");
        hardBtn.classList.toggle("selected");
        numberofColours=6;
        resetAll();

    }
}

function genColours(x) {
    var coloursArray = [];
    for (var d=0; d<x; d++){
        coloursArray.push(randColour());
    }    
    return coloursArray
};

function randColour(){
    var R = Math.floor(Math.random() * Math.floor(255));
    var G = Math.floor(Math.random() * Math.floor(255));
    var B = Math.floor(Math.random() * Math.floor(255));
    return 'rgb('+ R +', '+ G +', '+  B +')'
};

