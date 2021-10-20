function playCraps() {
    console.log("playcraps() function Started");
    var die1 = Math.ceil(Math.random() * 6); //This sets the first dice number to be 1-6
    var die2 = Math.ceil(Math.random() * 6); //This sets the second dice number to be 1-6
    var sum = die1 + die2; //This adds the two dice together
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //This displays the roll of the first die
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; //This displays the roll of the second die
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //This displays the sum of the two dies
    if (sum == 7 || sum == 11) { //If the sum of the two die is 7 or 11, the user loses
        loss = loss + 1;
        document.getElementById("lossRes").innerHTML = loss;
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose!"; //Displays a "you lose!"
    }
    else if (die1 == die2 && die1 % 2 == 0) { //If the player rolls doubles, then they win
        wins++;
        document.getElementById("winsRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win"; //Displays a "you win!"
    } else {
        tie++;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML =
            "Draw - You neither won nor lost. Please try again."; //If they roll anything else, it is a draw
    }

}

function blastOff() {
    var currTime = 50;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function btrBlasfOff(){
    console.log("btrBlastOff() started");
    var currTime = 50;
    for(var i = 0; i < 11; i++){
        setTimeout(function(){
            if(currTime >= 25){
                //If conditions are true
                document.getElementById("countdownTimer").innerHTML = currTime;
            } else if(currTime == 0){
                //If else if conditions are true
                document.getElementById("countdownTimer").innerHTML = "Blastoff!";
            } else {
                //If conditions are false
                document.getElementById("countdownTimer").innerHTML = 
                    "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        },i * 5000);
    }
}

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}