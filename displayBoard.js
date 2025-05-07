
export function display(deck, deckSize){
    const board = document.getElementById('formD');
    for(let i=0; i<deckSize; i++){
        const cardHTML = `
            <div class="card-container">
                <div class="card">
                    <div class="front"></div>
                    <div class="back">
                        <span class="num">${deck[i]}</span>
                    </div>
                </div>
            </div>
        `;
        board.innerHTML +=cardHTML;
    }
}