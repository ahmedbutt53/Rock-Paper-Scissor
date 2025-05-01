let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const drawgame = () => {
    msg.innerText = "Game was a draw .Play Again";
    msg.style.backgroundColor = "burlywood";
}

const showWinner = (Userwin,Userchoice,Compchoice) => {
    if(Userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Won! Your ${Userchoice} beats ${Compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose!  ${Compchoice} beats your ${Userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (Userchoice) => {
    console.log("User choice is:",Userchoice);
    // now for computer choice
    const Compchoice = genCompChoice();
    console.log("Comp choice is:",Compchoice);

    if (Userchoice === Compchoice) {
        drawgame ();
    } 
    else {
        let Userwin = true;
        if (Userchoice === "rock") {
            // scissor, paper
             Userwin = Compchoice === "paper" ? false : true;
        }
        else if (Userchoice === "paper") {
            // rock , scissor
           Userwin = Compchoice === "scissor" ? false : true;
        }
        else {
            // rock , paper
             Userwin = Compchoice === "rock" ? false : true;
        }
        showWinner(Userwin,Userchoice,Compchoice);
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
// ye floor decimal numbers ko remove krega * 3 mtlb 0 sy 2 tk random nmbr ayngy ab
    const randIdx = Math.floor(Math.random() * 3);     
    return options[randIdx];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id"); 
        playgame(Userchoice);
    });
});