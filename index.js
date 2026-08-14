console.log("rock paper scissors game");
let humanscore=0;
let computerscore=0;
console.log("game started!");
console.log("human score:",humanscore);
console.log("computer score:",computerscore);
function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    let Cchoice=Math.floor(Math.random()*3);
    return choices[Cchoice];
}
function getHumanChoice(){
    
    let choice =prompt("rock, paper or scissors:");
    return choice;

}
function play(humanchoice,computerchoice){
    if(humanchoice===computerchoice){
        console.log("it is a draw ");
    }
    else if(computerchoice==="rock"&&humanchoice==="scissors"){
        computerscore++;
        console.log("u lost this round");

    }
    else if(computerchoice==="rock"&&humanchoice==="paper"){
        humanscore++;
        console.log("u won this round");

    }
    else if(computerchoice==="paper"&&humanchoice==="scissors"){
        humanscore++
        console.log("u won this round");
    }
    else if(computerchoice==="paper"&&humanchoice==="rock"){
        computerscore++;
        console.log("u lost this round");
    }
    else if(computerchoice==="scissors"&&humanchoice==="rock"){
        humanscore++;
        console.log("u won this round");
    }
    else if(computerchoice==="scissors"&&humanchoice==="paper"){
        computerscore++;
        console.log("u lost this round");
    }
    else{
        console.log("not valid input");
    }


}
while (humanscore < 5 && computerscore < 5){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);
    play(humanChoice,computerChoice);
    console.log("Human score:", humanscore);
    console.log("Computer score:", computerscore);

}
if(humanscore>computerscore){
    console.log("u won");

}
else{
     console.log("computer won");

}
