var num = document.querySelector(".number");
var guessbtn = document.querySelector("#guess-btn");
var playagainbtn = document.querySelector("#playagain-btn");
var win = document.querySelector(".win");
var choose = document.querySelector(".numberchoose");
var guesses = document.querySelector(".guesses");
var popup = document.querySelector(".pop-up");
var feedback = document.querySelector(".feedback");
var difficulty = document.querySelector("#difficulty");
var ask = document.querySelector(".ask");

// random number generator based on difficulties

var randomnumber = ()=>{
    var diff = Number(difficulty.value);
    if(diff == 0){
        var number = Math.floor(Math.random()* 9) + 1;
    return number;
    }
    else if(diff == 1){
        var number = Math.floor(Math.random()* 4) + 1;
    return number;
    }
    else if(diff == 2){
        var number = Math.floor(Math.random()* 24) + 1;
    return number;
    }
    else if (diff == 3){
        var number = Math.floor(Math.random()* 49) + 1;
    return number;
    }
    else{
        var number = Math.floor(Math.random()* 99) + 1;
    return number;
    }
};
randomvalue =  randomnumber();



// update related to difficulty 
difficulty.addEventListener("click",function(){
    if(Number(difficulty.value) == 0){
        ask.textContent = "1-10"
        randomvalue =  randomnumber();
    }
    else if(Number(difficulty.value) == 1){
        ask.textContent = "1-5"
        randomvalue =  randomnumber();
    }
    else if(Number(difficulty.value) == 2){
        ask.textContent = "1-25"
        randomvalue =  randomnumber();
    }
    else if(Number(difficulty.value) == 3){
        ask.textContent = "1-50"
        randomvalue =  randomnumber();
    }
    else{
        ask.textContent = "1-100"
        randomvalue =  randomnumber();
    }
})






// main logics 
var guesscount = 0;
var guesscountactive = true;
guessbtn.addEventListener("click",function(){  
    console.log(randomvalue);
    if (randomvalue == num.value && guesscountactive == true) {
        guesscount++;
       choose.textContent = num.value; 
       guesses.textContent = guesscount; 
       win.style.display = "block";
       guesscountactive = false;
       guessbtn.style.display = "none";
       playagainbtn.style.display = "block";
       popup.style.display = "none";

       if(guesscount < 3){
        feedback.textContent = "your guess is too high 😮";
       }
       else if(guesscount > 3 && guesscount < 6){
        feedback.textContent = "Getting warmer... Keep guessing! 🔥😍";
       }
       else if(guesscount > 6 && guesscount < 10){
        feedback.textContent = "Try again. You're almost there! 👀";
       }
       else if(guesscount > 10 ){
        feedback.textContent = "You need more practice. Keep trying! 💪";
       }
       feedback.style.display = "block";


      
       
    }
    else if(num.value.length > 0){
        guesscount++;
        popup.style.color = randomcolor();
        popup.style.display = "block";
        popup.textContent = "Try another number !";
    }
    else{
        popup.style.color = randomcolor();
        popup.style.display = "block";
        popup.textContent = "enter a number !";
    }
})


// play again logic
playagainbtn.addEventListener("click",function(){
    guesscountactive = true;
    guesscount = 0;
    win.style.display = "none";
    guessbtn.style.display = "block";
    playagainbtn.style.display = "none";
    feedback.style.display = "none";
    randomvalue = randomnumber();
})


// random color generator
var randomcolor = ()=>{
    var val = "0123456789ABCDEFG";
    var color = "#";
    for (let i = 0; i < 6; i++) {
        color += val[Math.floor(Math.random()*16)];
    };
    return color;
}


num.addEventListener("click",function(){
    num.style.background = "black";
    num.style.color = "greenyellow";
})

