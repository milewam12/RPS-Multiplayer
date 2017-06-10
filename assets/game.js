
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

// Initial values
var player1 = {
    name: "",
    losess: 0,
    wins: 0

}
var player2 = {
    name: "",
    losess: 0,
    wins: 0
}



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





// database.ref("/players/2").on("value", function (snapshot) {

//     player2 = snapshot.val().player2
//     $("#display-player2").html(snapshot.val().player2)

// })

// Whenever a player login


$("#login").on("click", function (event) {
    event.preventDefault();
    var playerName = $("#login-name").val().trim();

    database.ref("/players/1").push({

        name: playerName,
        losses: 0,
        wins: 0

    });

    function playerOne() {
        database.ref("/players/1").on("child_added", function (childSnapshot) {
            player1 = childSnapshot.val().name;
            console.log(player1);
            $("#display-player1").html(childSnapshot.val().name);

            console.log(childSnapshot.val().name);

        });
    }


  
  playerOne();

});



$("#login2").on("click", function (event) {
    event.preventDefault();
    var playerName2 = $("#login-name2").val().trim();

    database.ref("/players/2").push({

        name: playerName2,
        losses: 0,
        wins: 0

    });

    function playerTwo() {
        database.ref("/players/2").on("child_added", function (childSnapshot) {
            player2 = childSnapshot.val().name;
            console.log(player2)
            $("#player2").html(childSnapshot.val().name)

            console.log(childSnapshot.val().name);

        });
    }


  
  playerTwo();

});






//game logic

