// let totalAttempts=10;
// let attempt=0;
// let totalLosts=0;
// let totalwons=0;

// const cardBody=document.querySelector('.card-body')
// const form=document.querySelector('form');
// const input=form.querySelector('.game-input');
// const button=form.querySelector('.btn')
// const lostWonSection =cardBody.querySelector('.lostWonSection');
// const countSection =cardBody.querySelector('.countSection');
// const remain=cardBody.querySelector(".remain-section")

// const wonNum=document.createElement('h4');
// wonNum.classList.add('wintext')
// cardBody.insertBefore(wonNum,lostWonSection)

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     attempt++;
//     if (attempt>=10) {
//         input.disabled=true;
//         button.disabled=true;
//     }else if(attempt<15) {
//         checkFun();
//     } else{

//     }
//     remain.innerHTML=`Remain attempts : ${totalAttempts-attempt}`
//     input.value="";
// });
// const checkFun=()=>{
//     const inputNum=Number(input.value);
//     const guessNum=guessingNumber(5);
// if (inputNum===guessNum) {
//     wonNum.innerHTML=`"YOU HAVE WON"`
//     lostWonSection.style.color="blue"
//     lostWonSection.innerHTML=`The guessing number was : ${guessNum}`
//     totalwons++;
// } else {
//     lostWonSection.innerHTML=`You have lost! The guessing number was :${guessNum}`
//     lostWonSection.style.color="red"
//     wonNum.innerHTML="";
//     totalLosts++;
// }
// countSection.innerHTML=`Total won : ${totalwons} , Total lost : ${totalLosts}`
// }
// const guessingNumber=(num)=>{
//     return Math.floor(Math.random()*num)+1;
// }



// practise model
let totalAttempts=10;
let attempt=0;
let totalLosts=0;
let totalwons=0;

const cardBody=document.querySelector('.card-body');
const form=document.querySelector('form');
const input=form.querySelector('.game-input');
const button=form.querySelector('.btn');
const lostWonSection =cardBody.querySelector('.lostWonSection');
const countSection =cardBody.querySelector('.countSection');
const remain=cardBody.querySelector(".remain-attempt");
const wonNum=document.createElement('h4');
    wonNum.classList.add('wintext');
    cardBody.insertBefore(wonNum,lostWonSection);

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    attempt++;
    if (attempt>=10) {
        input.disabled=true;
        button.disabled=true;
    } else {
        checkFun();
    }
    remain.innerHTML=`Remain attempts : ${totalAttempts-attempt}`
    input.value='';
});

const checkFun=()=>{
    let inputNum=Number(input.value)
    let guessNum=randomNum(5);
    if (inputNum===guessNum) {
        wonNum.innerHTML=`"You Have Won"`;
        lostWonSection.innerHTML=`The guessing number was : ${guessNum}`
        lostWonSection.style.color="blue";
        totalwons++;
    } else {
        lostWonSection.innerHTML=`You have lost! The guess number was : ${guessNum}`
        lostWonSection.style.color="red";
        wonNum.innerHTML='';
        totalLosts++;
    }
    countSection.textContent=`Total won : ${totalwons} , Total lost : ${totalLosts}`
}
const randomNum=(num)=>{
    return    Math.floor(Math.random()*num)+1;
}