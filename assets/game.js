
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC5l_m4X2oMZjjyrpbJb9FQJF4A5R-LyY0",
    authDomain: "rps-multiplayer-8ee2f.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-8ee2f.firebaseio.com",
    projectId: "rps-multiplayer-8ee2f",
    storageBucket: "rps-multiplayer-8ee2f.appspot.com",
    messagingSenderId: "307701226571"
};
firebase.initializeApp(config);

var database = firebase.database();

//Initial values
var player1 = "";
var player2 = "";
var p1Wins = 0;
var p1Losses = 0;


// var turn = database.ref("/turn");
// var players = database.ref("/players");
// var one = database.ref("/players/1").push({
//     losses: 0,
//     name: "",
//     wins: 0
// })

// var two = database.ref("/players/2").push({
//     losses: 0,
//     name: "",
//     wins: 0
// })

//wrap this in a function
//have function call on click

function myFunction(){
    database.ref("/players/1").on("value", function (snapshot) {
        console.log(snapshot.child("player1").exists());
        if(snapshot.child("player1").exists()){

        player1 = snapshot.val().player1
        $("#display-player1").html(snapshot.val().player1)
        }
    });
}


myFunction();

// database.ref("/players/2").on("value", function (snapshot) {

//     player2 = snapshot.val().player2
//     $("#display-player2").html(snapshot.val().player2)

// })

// Whenever a player login

$("#login").on("click", function (event) {
    event.preventDefault();
    var playerName = $("#login-name").val().trim();

    database.ref("/players/1").push({
        player1: playerName,
    });

    //    database.ref("/players/2").push({
    //     player2: playerName,
    // });

    console.log("this is player 1")
    console.log("this is player 2")
});



//game logic

