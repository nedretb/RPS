const options = ['Rock', 'Paper', 'Scissors'];
    
    let computerPlay = () => options[Math.floor(Math.random()*options.length)];

    let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    

    function play(playerSelection, computerSelection){
        
        if(playerSelection == computerSelection){
            return "Its a tie";
        }
        else if ((playerSelection == 'Rock' && computerSelection =='Paper') || (playerSelection == 'Paper' && computerSelection =='Scissors') ||
        (playerSelection == 'Scissors' && computerSelection =='Rock')){
            return "You lose";
        }
        else{
            return "You win";
        }
    }

    function game(){
        let userInput = "";
        let userCounter = 0;
        let computerCounter = 0;
        let computerSelection;
        
        
        for (let i = 0; i < 5; i++){
            userInput = prompt("Choose between Rock, Paper or Scissors.");
            userInput = capitalize(userInput);
            let a = 0;
            while (a == 0){
                if (userInput == 'Rock' || userInput == 'Paper' || userInput == 'Scissors'){
                    a++;
                }
                else{
                    userInput = prompt("Dont be a \"mentol\" Please enter Rock, Paper or Scissors.");
                    userInput = capitalize(userInput);
                }
            }
            computerSelection = computerPlay();
            let result = play(userInput, computerSelection);

            if (result == "Its a tie"){
                console.log(result);
                console.log(userInput);
            }
            else if (result == "You lose"){
                computerCounter++;
                console.log(result);
                console.log(userInput);
            }
            else{
                userCounter++;
                console.log(result);
                console.log(userInput);
                }
            }
        
        if (userCounter > computerCounter){
            console.log("YOU ARE A WINNER");
            console.log(`Score ${userCounter} : ${computerCounter}`);
        }
        else if (userCounter < computerCounter){
            console.log("YOU lose :(");
            console.log(`Score ${userCounter} : ${computerCounter}`);
        }
        else{
            console.log("ISSATIE");
            console.log(`Score ${userCounter} : ${computerCounter}`);
        }
        }