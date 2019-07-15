/*
    Nonogram Solver TestUnit
*/

/**
 * This is the main test function.
 */
function startTest() {
    console.log("In startTest.")
    populateClues();
    console.log(rowClues);
    changeBGColor();
}

/**
 * This is the testSetUp function.
 * It sets up the test environment by creating a board and clues.
 */
function testSetUp() {
    boardSize = 5;
    board.
}

/**
 * This is the changeBGColor function.
 * It should change the first table cell background to white.
 */
function changeBGColor() {
    //change the color in the table.
    document.getElementById('1.1').style.backgroundColor = 'white';
    console.log("in changeColor");
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