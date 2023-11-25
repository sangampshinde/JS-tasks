'use strict'

/*console.log(document.querySelector('.message'));//<p class="message">Start guessing...</p>
console.log(document.querySelector('.message').textContent);//Start guessing...
document.querySelector('.message').textContent='🎉Correct Number!';//🎉Correct Number! 
console.log(document.querySelector('.message').textContent);//🎉Correct Number!(on console)
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
console.log(document.querySelector('.guess').value);//
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);//23(on console)*/

/*document.querySelector('.check').addEventListener('click',function(){
    //console.log(document.querySelector('.guess').value);
    //document.querySelector('.message').textContent='🎉Correct Number!';
    //const guess= document.querySelector('.guess').value;
    //console.log(guess);
    //console.log( typeof(guess));//string
    const guess=Number(document.querySelector('.guess').value);
    console.log( guess,typeof(guess));// 12 'Number'
})*/
//varible decler
let secreatNumber= Math.trunc(Math.random()*20)+1;//secreat number generation
let score=20;
let highScore=0;
//function for logics

 const displayMesssage=function (message){
    document.querySelector('.message').textContent=message;
}
// game logic
document.querySelector('.check').addEventListener('click',function()
{
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof (guess));
    //first scnerio
    if(!guess)
    {
        displayMesssage('⛔ No input!');
        //document.querySelector('.message').textContent='⛔ No input!';
    }
    //guess is correct WIN
    else if(guess===secreatNumber)
    {
        displayMesssage('🎉Correct Number');
        //document.querySelector('.message').textContent='🎉Correct Number'
        document.querySelector('.number').textContent=secreatNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    //guess is wrong
    else if(guess!==secreatNumber){
        if(score>1)
        {
            displayMesssage(guess>secreatNumber?'📈 Too HIGH!':'📉Too LOW!');
            //document.querySelector('.message').textContent= guess>secreatNumber?'📈 Too HIGH!':'📉Too LOW!';
            //score=score-1;
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            displayMesssage('You Lose');
            //document.querySelector('.message').textContent='You Lose';
            document.querySelector('.score').textContent=0;
        }
}
//guess is up
   /* else if(guess>secreatNumber)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent='📈 Too HIGH!';
            //score=score-1;
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='You Lose';
            document.querySelector('.score').textContent=0;
        }
    }
    //guess is down
    else if(guess<secreatNumber)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent='📉Too LOW!';
            //score=score-1;
            score--;
            document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.message').textContent='You Lose';
            document.querySelector('.score').textContent=0;
        }
    }
*/

});
//again button
document.querySelector('.again').addEventListener('click' ,function(){
    score=20;
    secreatNumber= Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    displayMesssage('Start guessing...');
    //document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';


});

