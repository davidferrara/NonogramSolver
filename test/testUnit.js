/*
    Nonogram Solver TestUnit
*/

/**
 * This is the main test function.
 */
function startTest() {
    console.log("In startTest.");
    testSetUp();
    console.log(board);
    console.log(rowClues[1][0]);
    test1();
    console.log(rowClues[1][0]);
}

/**
 * This is the testSetUp function.
 * It sets up the test environment by creating a board and clues.
 */
function testSetUp() {
    console.log("In testSetUp.");
    boardSize = 5;
    board = new Array(boardSize);
    populateClues();
    initializeBoard(board);
}

/**
 * This is the populateClues function.
 * It fills the rowClue and colClue arrays with arrays of Clue objects.
 */
function populateClues() {
    console.log("In populateClues.")
    var x = Array(new Clue(1), new Clue(1));
    rowClues.push(x);
    rowClues.push(Array(new Clue(5)));
    rowClues.push(Array(new Clue(3)));
    rowClues.push(Array(new Clue(1)));
    rowClues.push(Array(new Clue(2)));

    colClues.push(Array(new Clue(1)));
    var y = Array(new Clue(3), new Clue(1));
    colClues.push(y);
    colClues.push(Array(new Clue(4)));
    colClues.push(Array(new Clue(3)));
    colClues.push(Array(new Clue(1)));
}

function test1() {
    if ((rowClues[1][0].rS == null) && (rowClues[1][0].rE == null)) {
        console.log("It's null.");
        console.log(rowClues[1][0]);
    } else if ((rowClues[1][0].rS == 0) && (rowClues[1][0].rE == 4)) {
        console.log("It's not null.");
        console.log(rowClues[1][0]);
    }
    getInitialRange(rowClues);

    if ((rowClues[1][0].rS == null) && (rowClues[1][0].rE == null)) {
        console.log("It's null.");
        console.log(rowClues[1][0]);
    } else if ((rowClues[1][0].rS == 0) && (rowClues[1][0].rE == 4)) {
        console.log("It's not null.");
        console.log(rowClues[1][0]);


    }
}