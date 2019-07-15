//var exports = module.exports = {};

//----------------------------------------------------------------
// Classes
//----------------------------------------------------------------

/**
 * This is the Clue class. It creates a clue object.
 * 
 * @constructor
 * @param {number} x - the length of a black run.
 * @property {number} lb - the length of the black run.
 * @property {number} rS - the starting cell of the range.
 * @property {number} rE - the ending cell of the range.
 */
function Clue(x) {
    this.lb = x;
    this.rS = null;
    this.rE = null;
}
Clue.prototype.setLB = function(x) {
    this.lb = x;
}
Clue.prototype.setRS = function(x) {
    this.rS = x;
}
Clue.prototype.setRE = function(x) {
    this.rE = x;
}

/*
module.exports = {
    Clue: Clue
}



class Clue {
    constructor(x) {
        this.lb = x;
        this.rS = null;
        this.rE = null;
    }
}

module.exports = Clue
*/


//----------------------------------------------------------------
// Global Values
//----------------------------------------------------------------

var rowClues = new Array();
var colClues = new Array();
var boardSize = 0;
var board = new Array(boardSize);

//----------------------------------------------------------------
// Code
//----------------------------------------------------------------
function initializeBoard(a) {
    for (var i = 0; i < boardSize; i++) {
        a[i] = new Array(boardSize);
        for (var j = 0; j < boardSize; j++) {
            a[i][j] = "_";
        }
    }
}

function solve() {
    getInitialRange(rowClues);
    console.log(rowClues);
    getInitialRange(colClues);
    console.log("In solve function.");
    console.log("row clues length: " + rowClues.length);
    for (var i = 0; i < rowClues.length; i++) {
        console.log("Solve forloop i: " + i);
        var clues = rowClues[i];
        console.log(clues);
        var cluesLength = clues.length;
        console.log("Clue array length:" + cluesLength);
        var boardLine = board[i];
        console.log(boardLine);
        solveLine(clues, boardLine, cluesLength);
        console.log("Exiting Solve forloop.");
    }
    /*
    for(var i = 0; i < colClues.length; i++) {
        console.log("Solve forloop i: " + i);
        var clues = colClues[i];
        console.log(clues);
        var cluesLength = clues.length;
        console.log("Clue array length:" + cluesLength);
        var boardLine = board[i];
        console.log(boardLine);
        solveLine(clues, boardLine, cluesLength);
        console.log("Exiting Solve forloop.");
    }
    */
    console.log("Exiting solve function.");
}

function solveLine(a, b, k) {
    console.log("In solveLine");
    console.log("clues array: " + a);
    console.log("BoardLine: " + b);
    console.log("Clue array length: " + k);
    var changed = false;
    console.log(changed);
    do {
        console.log("Entered doWhile loop.");
        rule1A(a, b, k);
        //rule1B(a, b, k);
    } while (changed)
    console.log("Exiting doWhile loop.");
    //printBoard();
    console.log("Exiting solveLine function.");
}


// Calculates the initial run range estimates for each clue.
function getInitialRange(a) {
    for (var x = 0; x < a.length; x++) {
        var clues = a[x];
        var k = clues.length;
        for (var j = 1; j <= k; j++) {
            if (j == 1) {
                clues[j - 1].setRS(0);
            } else if ((j >= 2) && (j <= k)) {
                for (i = 1; i <= j - 1; i++) {
                    clues[i].setRS(clues[i - 1].rS + (clues[i - 1].lb + 1));
                }
            }
        }
        for (var j = 1; j <= k; j++) {
            var y = 0;
            clues[j - 1].setRE(boardSize - 1);
            if ((j >= 1) && (j <= k - 1)) {
                for (i = j + 1; i <= k; i++) {
                    y += clues[i - 1].lb + 1;
                }
            }
            clues[j - 1].setRE(clues[j - 1].rE - y);
        }
    }
}

function getSegments(b) {
    var result = new Array();
    for (var i = 0; i < boardSize; i++) {
        if ((b[i] == "@") && (b[i - 1] !== "@")) {
            var temp = new Clue(1);
            temp.setRS(i);
            temp.setRE(i);
            result.push(temp);
        } else if ((b[i] == "@") && (b[i - 1] == "@")) {
            var temp = result.pop();
            temp.setLB(temp.lb + 1);
            temp.setRE(temp.rE + 1);
            result.push(temp);
        }
    }
    return result;
}


function rule1A(a, b, k) {
    console.log("Entered rule1A");
    for (var j = 1; j <= k; j++) {
        var u = ((a[j - 1].rE - a[j - 1].rS) + 1) - a[j - 1].lb;
        for (var i = a[j - 1].rS; i < boardSize; i++) {
            if ((a[j - 1].rS + u <= i) && (a[j - 1].rE - u >= i)) {
                b[i] = "@";
                changed = true;
            }
        }
    }
    console.log("Exiting rule1A");
}

function rule1B(a, b, k) {
    for (var j = 1; j <= k; j++) {
        for (var i = a[j - 1].rS; i < boardSize; i++) {
            if (((i >= 0) && (i >= a[j - 1].rS)) || ((i > boardSize - 1) && (i < boardSize)) || ((i > a[j - 1].rE) && (i < a[j].rS) && (j < k))) {
                b[i] = "X";
            }
        }
    }
}


function printBoard() {
    for (var i = 0; i < boardSize; i++) {
        var temp = String();
        for (var j = 0; j < boardSize; j++) {
            temp += board[i][j] + " ";
        }
        console.log(temp);
    }
}



/*Solve test
populateClues();
initializeBoard(board);
printBoard();
solve();
printBoard();
*/

/* Rule1B test
var theClue = new Clue(3);
theClue.setRS(0);
theClue.setRE(2)
var theClue2 = new Clue(1);
theClue2.setRS(4);
theClue2.setRE(4)
var testClues = [];
testClues.push(theClue);
testClues.push(theClue2);
console.log(testClues);

var testLength = testClues.length;
console.log(testLength);

var testBoard = ["_","_","_","_","_"];
console.log(testBoard);

rule1B(testClues, testBoard, testLength);
console.log(testBoard);
*/

/* GetSegments test
var testBoard = ["@","_","@","_","@"];
console.log(testBoard);
var seg = getSegments(testBoard);
console.log(seg);
*/