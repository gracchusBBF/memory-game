import {display} from "./displayBoard.js"
import {buildDeck} from "./drawDeck.js"
import {rules} from "./gameRules.js"
let deckSize = 4;
const startBu = document.getElementById("bu")
startBu.addEventListener("click", startGame)
function startGame(){
    // let name = document.getElementById("userName").value;
    // deckSize = parseInt(document.getElementById("level").value)
    
    document.getElementById("formE").style.display = "none";

    document.getElementById("formD").style.display = "grid";
    document.getElementById("points").style.display = "flex";
    
    
    console.log("ok")
   
    
    const deck = buildDeck(deckSize);
    display(deck, deckSize);
    rules(deckSize);

} 


