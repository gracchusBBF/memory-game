

export function buildDeck(deckSize){
    const cardSymbols = ['🍎', '🍌', '🍇', '🍊', '🍓', '🍉', '🍒', '🥝', '🍐', '🥥'];
    // let pairCardsNumber = 4;
    let drawed = [];
    while(drawed.length<deckSize){
        let toDraw = Math.floor(Math.random() * cardSymbols.length);
        if(!drawed.includes(cardSymbols[toDraw])){
            drawed.push(cardSymbols[toDraw]);
            drawed.push(cardSymbols[toDraw]);
        }else{
            continue;
        }
    }
    let deck = drawed.sort(() => Math.random() - 0.5);
    
    return deck;
    
}
