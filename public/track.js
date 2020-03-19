// eastablishes new variables
var walkBtn = document.getElementById("walkBtn");
var peeBtn = document.getElementById("peeBtn");
var poopBtn = document.getElementById("poopBtn");
var foodBtn = document.getElementById("foodBtn");

// creates array of the variables
var keys = ["Food", "Pee", "Poop", "Walk"];

// initializes the class
class DatabaseMessenger {
    constructor(index) {
        this.index = index;
    }
    // method for taking system time and passing it to the databse
    async addToLog() {
        var today = new Date();
        var time = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear() + " | " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let currentNumChildren = 0
        await firebase.database().ref(keys[this.index]).once('value', snap => {
            currentNumChildren = snap.numChildren() + 1
        })
        firebase.database().ref(keys[this.index]).child(currentNumChildren.toString()).set(time).then(() => {
            window.alert("You Tracked: " + keys[this.index])
        })
    }
}


//methods that run once the corresponding button is pushed in the html code
function submitFood() {
    let msgr = new DatabaseMessenger(0);
    msgr.addToLog();
}

function submitPee() {
    let msgr = new DatabaseMessenger(1);
    msgr.addToLog();
}


function submitPoop() {
    let msgr = new DatabaseMessenger(2);
    msgr.addToLog();
}

function submitWalk() {
    let msgr = new DatabaseMessenger(3);
    msgr.addToLog();
}
