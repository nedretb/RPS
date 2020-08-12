let myFuncCalls = 0;
let playerW = 0;
let computerw = 0;
const options = ['Rock', 'Paper', 'Scissors'];
let computerPlay = () => options[Math.floor(Math.random()*options.length)];


function play(playerSelection, computerSelection){
    
    if(playerSelection == computerSelection){
        const container = document.querySelector('#result');
        let rmv = document.getElementById("test");
        rmv.remove();

        const paragraph = document.createElement('p');
        paragraph.setAttribute("id", "test");
        paragraph.textContent = "Computer picked " + computerSelection + " It's a Tie!";

        container.appendChild(paragraph);
    }
    else if ((playerSelection == 'Rock' && computerSelection =='Paper') || (playerSelection == 'Paper' && computerSelection =='Scissors') ||
    (playerSelection == 'Scissors' && computerSelection =='Rock')){
        computerw++;
        const container = document.querySelector('#result');
        let rmv = document.getElementById("test");
        rmv.remove();
        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.setAttribute("id", "test");
        paragraph.textContent = "Computer picked " + computerSelection + " You lose!";

        container.appendChild(paragraph);
    }
    else{
        playerW++;
        const container = document.querySelector('#result');
        let rmv = document.getElementById("test");
        rmv.remove();

        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.setAttribute("id", "test");
        paragraph.textContent = "Computer picked " + computerSelection +" You win!";

        container.appendChild(paragraph);
    }
}

function rock(){
    myFuncCalls++;
    if(myFuncCalls > 5){
        endGame();
    }else{
        play("Rock", computerPlay());
    }
    
    
}

function paper(){
    myFuncCalls++;
    if(myFuncCalls > 5){
        endGame();
    }else{
        play("Paper", computerPlay());
    }
    
    
}

function scissors(){
    myFuncCalls++;
    if(myFuncCalls > 5){
        endGame();
    }else{
        play("Scissors", computerPlay());
    }
    
    
}

function endGame(){
    const container = document.querySelector('#result');
        let rmv = document.getElementById("test");
        rmv.remove();

        const paragraph = document.createElement('p');
        paragraph.classList.add('paragraph');
        paragraph.setAttribute("id", "test");
        paragraph.textContent = "Final Score: Player " +playerW + " Computer " +computerw;

        const button = document.createElement("button");
        button.classList.add('but');
        button.setAttribute("id", "deleteOnClick");
        button.setAttribute("onclick", "enableButtons()")
        button.textContent = "Play again";

        container.appendChild(paragraph);
        container.appendChild(button);
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissor").disabled = true;
        myFuncCalls = 0;
        playerW = 0;
        computerw = 0;
}

function enableButtons(){
    let rmv = document.getElementById("deleteOnClick");
    rmv.remove();
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
}