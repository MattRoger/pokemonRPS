const computerChoices = ["fire", "grass", "water"]
let computerGuess = "";
let lives = 3;
let wins = 0;


$(".rulesDiv").on("click", "button", function () {
    console.log("rules btn clicked")
    $(".rulesDiv").empty("")
    const pokeBar = $("<div>").addClass("pokeBar")
    const pokemonImgs = ["assets/images/charmander.png", "assets/images/bulbasaur.png", "assets/images/squirtle.png"]
    const type = ["fire", "grass", "water"]
    for (i = 0; i < pokemonImgs.length; i++) {
        const pokeImg = $("<img>").attr("src", pokemonImgs[i])
        pokeImg.attr("type-value", type[i])
        pokeBar.append(pokeImg)
    }
    $(".gameDiv").append(pokeBar)  
    $("#score").text(wins)
    $("#lives").text(lives)
    })
    


$(".gameDiv").on("click", "img", function () {
    let userGuess = ($(this).attr("type-value"))
    console.log(userGuess + " pokemon clicked")
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess + "computer guess")
    if ((userGuess === "fire" && computerGuess === "grass") ||
        (userGuess === "grass" && computerGuess === "water") ||
        (userGuess === "water" && computerGuess === "fire")) {
        console.log("win")
        wins++;
        $("#score").text(wins)
    } else if (userGuess === computerGuess) {
        console.log("reroll")
        let coinFlip = Math.floor(Math.random() * 2);
        if (coinFlip === 1) {
            console.log("win")
            wins++;
            $("#score").text(wins)

        } else {
            console.log("loser")
            lives--;
            $("#lives").text(lives)
        
        }
    } else {
        console.log("loser")
        lives--;
        $("#lives").text(lives)
       
    }
    if (lives === 0) {
        console.log("you lose")
    }

})

function computerPick() {

    // console.log(computerGuess)
}
