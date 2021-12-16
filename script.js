
//******************For Menu*************************/

const bars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

const toggleMenu = function(){
    if(menu.style.display === "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}

//*****************For Hero************************/

//For messages
let msg1 = document.querySelector('.vacation');
let msg2 = document.querySelector('.va-text');
let msg3 = document.querySelector('.va-text2');

let msg1Txt = ["“Some of your best ideas come when you're on vacation.”","“Never go on trips with anyone you do not love.”",'"...Relaxation is good for your mental Health"','"Take vacations, and go as many places as you can"'];
let msg2Txt = ["Laughter is an instant Medicine.","Life is better in flip flops.","The best things in life are the people we love, the places we’ve been,","Go on a six month vacation, twice a year."];
let msg3Txt = ["Don't Worry!","It is peaceful here","and all the memories we’ve made along the way.","Take a Deep Breathe!"];

let msgCounter = 0;

//Select hero
const hero = document.querySelector('.hero');

//background images - Array list
let backgroundImgs = ["url('../images/img2.jpg')","url('../images/img3.jpg')","url('../images/img4.jpg')","url('../images/img5.jpg')"];

let counter = 0;

//*********Timer to change images and messages**********/

function changeImgAndMsg(){
    //To change images
    if(counter >= backgroundImgs.length){
        counter = 0;
    }
    
    hero.style.backgroundImage = backgroundImgs[counter];
    hero.style.transition = "all 2s ease-in";
    counter++;

    //To change messages
    if(msgCounter >= msg1Txt.length && msg2Txt.length && msg3Txt.length){
        msgCounter = 0;
    }

    //
   
    msg1.innerText = msg1Txt[msgCounter];
    // msg1.classList.add("vacation");
    msg2.innerText = msg2Txt[msgCounter];
    msg3.innerText = msg3Txt[msgCounter];
    msgCounter++;
}


let startInterval = setInterval(changeImgAndMsg, 3000);

//kill timer
hero.onclick = function stopInterval(){
   clearInterval(startInterval)
}

//change the images on click
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let prevCounter = 0;
let nextCounter = 0;

prev.addEventListener('click', () => {
    if(prevCounter >= backgroundImgs.length){
        prevCounter = 0;
    }

    hero.style.backgroundImage = backgroundImgs[prevCounter];
    prevCounter++;

    //To change messages
    if(msgCounter >= msg1Txt.length && msg2Txt.length && msg3Txt.length){
        msgCounter = 0;
    }

    //
   
    msg1.innerText = msg1Txt[msgCounter];
    msg2.innerText = msg2Txt[msgCounter];
    msg3.innerText = msg3Txt[msgCounter];
    msgCounter++;
})

next.addEventListener('click', () => {
    if(nextCounter >= backgroundImgs.length){
        nextCounter = 0;
    }

    hero.style.backgroundImage = backgroundImgs[nextCounter];
    hero.style.transition = "all 3s ease-in";
    nextCounter++;

    //To change messages
    if(msgCounter >= msg1Txt.length && msg2Txt.length && msg3Txt.length){
        msgCounter = 0;
    }
   
    msg1.innerText = msg1Txt[msgCounter];
    msg2.innerText = msg2Txt[msgCounter];
    msg3.innerText = msg3Txt[msgCounter];
    msgCounter++;
})





