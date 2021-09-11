let cells = document.querySelectorAll('td');

let player = "X";
let xMoves = [];
let oMoves = [];

for (i=0; i < cells.length; i++) {
    cells[i].addEventListener('click', onClick)
}

function onClick() {
    let wincon = win_condition();
    if (wincon == "x wins"){
        alert("X wins!");
        reset();
        return;
    }
    if (wincon == "o wins"){
        alert("O wins!");
        reset();
        return;
    }
    // Known bug - sometimes the final X or O is not added to the board. Sometimes it is. Only seems to happen on draw condition. 
    if (wincon == "draw"){
        alert("Draw!");
        reset();
        player = ""; // added to prevent the board from registering final click from previous game on board after reset
    }
    if (event.target.textContent != ""){
        return;
    }
    event.target.textContent = player;
    change_player();
}

function change_player() {
    if (player == "X") {
        xMoves.push(event.target.id);
        player = "O";
    }
    else {
        oMoves.push(event.target.id);
        player = "X";
    }
}
 
function win_condition() {
    // X win conditions
    if (xMoves.includes("box1") && xMoves.includes("box2") && xMoves.includes("box3")) {
        return "x wins";
    }
    else if (xMoves.includes("box4") && xMoves.includes("box5") && xMoves.includes("box6")) {
        return "x wins";
    }
    else if (xMoves.includes("box7") && xMoves.includes("box8") && xMoves.includes("box9")) {
        return "x wins";
    }
    else if (xMoves.includes("box1") && xMoves.includes("box5") && xMoves.includes("box9")) {
        return "x wins";
    }
    else if (xMoves.includes("box1") && xMoves.includes("box4") && xMoves.includes("box7")) {
        return "x wins";
    }
    else if (xMoves.includes("box2") && xMoves.includes("box5") && xMoves.includes("box8")) {
        return "x wins";
    }
    else if (xMoves.includes("box3") && xMoves.includes("box6") && xMoves.includes("box9")) {
        return "x wins";
    }
    else if (xMoves.includes("box3") && xMoves.includes("box5") && xMoves.includes("box7")) {
        return "x wins";
    }

    // O win conditions
    else if (oMoves.includes("box1") && oMoves.includes("box2") && oMoves.includes("box3")) {
        return "o wins";
    }
    else if (oMoves.includes("box4") && oMoves.includes("box5") && oMoves.includes("box6")) {
        return "o wins";
    }
    else if (oMoves.includes("box7") && oMoves.includes("box8") && oMoves.includes("box9")) {
        return "o wins";
    }
    else if (oMoves.includes("box1") && oMoves.includes("box5") && oMoves.includes("box9")) {
        return "o wins";
    }
    else if (oMoves.includes("box1") && oMoves.includes("box4") && oMoves.includes("box7")) {
        return "o wins";
    }
    else if (oMoves.includes("box2") && oMoves.includes("box5") && oMoves.includes("box8")) {
        return "o wins";
    }
    else if (oMoves.includes("box3") && oMoves.includes("box6") && oMoves.includes("box9")) {
        return "o wins";
    }
    else if (oMoves.includes("box3") && oMoves.includes("box5") && oMoves.includes("box7")) {
        return "o wins";
    }
    // If no winnner, game is a draw.
    else if ((xMoves + oMoves).length == 43){
        console.log((xMoves + oMoves).length);
        return "draw";
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