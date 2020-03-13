var walkBtn = document.getElementById("walkBtn");
var peeBtn = document.getElementById("peeBtn");
var poopBtn = document.getElementById("poopBtn");
var foodBtn = document.getElementById("foodBtn");


async function addToLog(section) {
    var today = new Date();
    var time = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear() + " | " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let currentNumChildren = 0
    await firebase.database().ref(section).once('value', snap => {
        currentNumChildren = snap.numChildren() + 1
    })
    firebase.database().ref(section).child(currentNumChildren.toString()).set(time);
}

function submitWalk() {
    addToLog("Walk")
    alert("Walk")
}

function submitPee() {
    addToLog("Pee")
    alert("Pee")
}


function submitPoop() {
    addToLog("Poop")
    alert("Poop")
}


function submitFood() {
    addToLog("Food")
    alert("Food")
}



