let cells = document.querySelectorAll('td');

let player = "X";
let xMoves = [];
let oMoves = [];
let winningStates = [
    ["box1", "box2", "box3"], 
    ["box4", "box5", "box6"], 
    ["box7", "box8", "box9"], 
    ["box1", "box5", "box9"], 
    ["box1", "box4", "box7"], 
    ["box2", "box5", "box8"], 
    ["box3", "box6", "box9"], 
    ["box3", "box5", "box7"]
    ];

for (i=0; i < cells.length; i++) {
    cells[i].addEventListener('click', onClick)
}

function onClick() {
    if (event.target.textContent != ""){
        return;
    }
    event.target.textContent = player;
    change_player();
    declareWinner();
}

function change_player() {
    if (player == "X") {
        player = "O";
        xMoves.push(event.target.id);
    }
    else {
        oMoves.push(event.target.id);
        player = "X";
    }
}

function gameWon(moves){
    for (let i = 0; i < winningStates.length; i++) {    
        let a = moves.includes(winningStates[i][0]);
        let b = moves.includes(winningStates[i][1]);
        let c = moves.includes(winningStates[i][2]);
        if (a && b && c){
            return true;
        }
    }
}

function declareWinner(){
    if (gameWon(xMoves)){
        announceResult("X wins!");
        return;
    }
    if (gameWon(oMoves)){
        announceResult("O wins!");
        return;
    }
    // If no winnner, game is a draw.
    else if ((xMoves.length + oMoves.length)== 9){ // checks to see if all 9 squares are filled
        announceResult("Draw!");
        return;
    }
}

// Resets board when called.
function reset() {
    for (i=0; i < cells.length; i++) {
        cells[i].textContent = ""
    }
    player = "X";
    xMoves = [];
    oMoves = [];
}

function announceResult(result){
    setTimeout(_ => {
        alert(result);
        reset();
    }, 0)
}