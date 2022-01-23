var readlineSync = require("readline-sync");
var colors = require("colors");
var net = require("net");

var HOST = "127.0.0.1";
var PORT = 6969;

var client = null;

function menu() {
    var lineRead = readlineSync.question("\n\nEnter Option (1-Open, 2-Send, 3-Close, 4-Quit):");

    switch (lineRead) {
        case "1":
            console.log("Option 1 selected");
            break;
        case "2":
            console.log("Option 2 selected");
            break;
        case "3":
            console.log("Option 3 selected");
            break;
        case "4":
            console.log("Option 4 selected");
            break;
        default:
            setTimeout(function () {
                menu();
            }, 0);
            break;

    }
}

setTimeout(function () {
    menu();
}, 0);
