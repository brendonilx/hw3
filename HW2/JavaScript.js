/*
    Brendon So
    Copyright 2024
    Umass Lowell
    email: Brendon_So@student.uml.edu
*/
function myFunction() {

    /*https://stackoverflow.com/questions/39884915/getelementbyid-returns-nan
    Help me debug added value fixed the NAN error
    */
    xs = parseFloat(document.getElementById("xs").value);
    xe = parseFloat(document.getElementById("xe").value);
    ys = parseFloat(document.getElementById("ys").value);
    ye = parseFloat(document.getElementById("ye").value);
    var xs = xs;
    var xe = xe;
    var ys = ys;
    var ye = ye;
    
    if (xe < -50 || xe >= 50) {
        document.getElementById("test").textContent = "ERROR";
    }
    else if (xs < -50 || xs >= 50) {
        document.getElementById("test").textContent = "ERROR";
    }
    else if (ye < -50 || ye >= 50) {
        document.getElementById("test").textContent = "ERROR";
    }
    else if (ys < -50 || ys >= 50) {
        document.getElementById("test").textContent = "ERROR";
    }
    else { //test code
        document.getElementById("test").textContent = "Valid";
        var key = 1; //tells program all are valid input
    }
}

function xs() {
    return parseFloat(document.getElementById("xs").value);
}

function xe() {
    return parseFloat(document.getElementById("xe").value);
}

function ys() {
    return parseFloat(document.getElementById("ys").value);
}

function ye() {
    return parseFloat(document.getElementById("ye").value);
}