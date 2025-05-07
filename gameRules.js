export function rules(deckSize){
    let cardsOn = 0;
    let points = 0;
    let selectedCards = [];
    let selectedElements = [];
    let allCards = document.querySelectorAll(".card");
    console.log(points);
    allCards.forEach(card => {
        card.addEventListener("click", function () {
            if (cardsOn < 2 && !this.classList.contains("flipped")) {
                this.classList.add("flipped");
                cardsOn++;
                selectedCards.push(this.querySelector(".num").textContent);
                selectedElements.push(this);
                
                if (selectedCards.length === 2) {
                    if (selectedCards[0] === selectedCards[1]) {
                        
                        points++;
                        updateScoreUI(points);

                        selectedCards = [];
                        selectedElements = [];
                        cardsOn = 0;

                        if (points === deckSize / 2) {
                            displayVictory();
                        }

                    } else {
                        shakeBoard();
                        setTimeout(() => {
                            selectedElements.forEach(el => el.classList.remove("flipped"));
                            selectedCards = [];
                            selectedElements = [];
                            cardsOn = 0;
                        }, 2000);
                    }
                }
            }
        });
    });

    function updateScoreUI(score) {
        const pointsDiv = document.querySelector("#points");
        pointsDiv.style.transform = "scale(2)";
        pointsDiv.style.transition = "transform 0.3s ease";
        setTimeout(() => {
            pointsDiv.style.transform = "scale(1)";
        }, 300);
        document.getElementById("score").textContent = score;
    }

    function shakeBoard() {
        const board = document.querySelector(".formD");
        let isRed = false;
        const idInter = setInterval(() => {
            board.style.backgroundColor = isRed ? "white" : "pink";
            isRed = !isRed;
        }, 100); // clignote plus rapidement
        
        setTimeout(() => {
            clearInterval(idInter);
            board.style.backgroundColor = ""; 
        }, 500); 

   
    }
    function displayVictory() {
        const victory = document.createElement("p");
        victory.textContent = "Winner!!!";
        victory.classList.add("victory-message");
        document.querySelector(".formD").appendChild(victory)
        document.addEventListener("keydown", function (event) {
            if (event.key === " ") {
                window.location.href = "jouer.html";
            }
        });
    }
}
