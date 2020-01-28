const computerChoices = ["fire", "grass", "water"]
let computerGuess = "";
let lives = 3;
let wins = 0;
let playerFire=0;
let playerGrass=0;
let playerWater=0;
let compFire=0;
let compGrass=0;
let compWater=0;


$(".rulesDiv").on("click", ".rulesBtn", function () {
    console.log("rules btn clicked")
    $(".gameDiv").css("display", "block")
    $(".rulesDiv").empty("").css("display", "none")
    $('audio#openMusic')[0].pause()
    $('audio#battleMusic')[0].play()
    const pokeBar = $("<div>").addClass("pokeBar")
    const pokemonImgs = ["assets/images/charmander.png", "assets/images/bulbasaur.png", "assets/images/squirtle.png"]
    const type = ["fire", "grass", "water"]
    const playerResultsBar = $("<div>").addClass("resultsPokeImg")
    const teamRocketResultsBar = $("<div>").addClass("resultsPokeImg")
    for (i = 0; i < pokemonImgs.length; i++) {
        const pokeImg = $("<img>").attr("src", pokemonImgs[i])
        const pokeResultsImgP = $("<img>").attr("src", pokemonImgs[i])
        const pokeResultsImgR = $("<img>").attr("src", pokemonImgs[i])
        pokeImg.attr("type-value", type[i]).css("width", "200px")
        pokeBar.append(pokeImg)

        pokeResultsImgP.addClass(type[i] + `ImgP`).css("display", "none")
        playerResultsBar.append(pokeResultsImgP)

        pokeResultsImgR.addClass(type[i] + `ImgR`).css("display", "none")
        teamRocketResultsBar.append(pokeResultsImgR)
    }
    $(".gameDiv").append(pokeBar)
    $("#score").text(wins + " Wins")
    $("#lives").text(lives + " Lives")
    $(".resultsDiv").css("display", "inline")
    $(".teamRocketResults").append(teamRocketResultsBar)
    $(".playerResults").append(playerResultsBar)

})



$(".gameDiv").on("click", "img", function () {
    hideResults()
    let userGuess = ($(this).attr("type-value"))
    console.log(userGuess + " pokemon clicked")
    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess + "computer guess")
    const playerImgClass = `${userGuess}ImgP`;
    const computerImgClass = `${computerGuess}ImgR`;
    $(`.${playerImgClass}`).css("display", "inline")
    $(`.${computerImgClass}`).css("display", "inline")
    if ((userGuess === "fire" && computerGuess === "grass") ||
        (userGuess === "grass" && computerGuess === "water") ||
        (userGuess === "water" && computerGuess === "fire")) {
        console.log("win")
        wins++;
        $(".playerWinner").show()
        $("#score").text(wins+" Wins")
    } else if (userGuess === computerGuess) {
        console.log("reroll")
        let coinFlip = Math.floor(Math.random() * 2);
        if (coinFlip === 1) {
            console.log("win")
            wins++;
            $(".playerWinner").show()            
            $("#score").text(wins+" Wins")            
        } else {
            console.log("loser")
            lives--;
            $(".rocketWinner").show()
            $("#lives").text(lives +" Lives")
        }
    } else {
        console.log("loser")
        lives--;
        $(".rocketWinner").show()
        $("#lives").text(lives +" Lives")

    }
    if (lives === 0) {
        console.log("you lose")
        endGame()
    }

    if(userGuess==="fire"){
        playerFire++
    }else if(userGuess==="grass")
    {
        playerGrass++
    }else{
        playerWater++
    }

    if(computerGuess==="fire"){
        compFire++
    }else if(computerGuess==="grass")
    {
        compGrass++
    }else{
        compWater++
    }

})

$("#endGame").on("click", "button", function () {
    lives = 3;
    wins = 0;
    playerFire=0
    playerWater=0
    playerGrass=0
    compFire=0
    compWater=0
    compGrass=0
    $("#score").text(wins)
    $("#lives").text(lives)
    $(".endGame").empty()
})


function endGame() {
    const endGameWindow = $("<div>").addClass("endGameWindow");
    const score = $("<h1>").text(`You Won ${wins} Rounds! `);
    endGameWindow.append(score)

    
    const playerStatsDiv=$("<div>").addClass("playerStats")
    const playerHead=$("<h2>").text("Player")
    const playerFireStats=$("<p>").text(`Charmander x ${playerFire}`)    
    const playerGrassStats=$("<p>").text(`Bulbasaur x ${playerGrass}`)
    const playerWaterStats=$("<p>").text(`Squirtle x ${playerWater}`)
    playerStatsDiv.append(playerHead, playerFireStats,playerGrassStats, playerWaterStats)
    endGameWindow.append(playerStatsDiv)

    const compStatsDiv=$("<div>").addClass("compStats")
    const compHead=$("<h2>").text("Team Rocket")
    const compFireStats=$("<p>").text(`Charmander x ${compFire}`)    
    const compGrassStats=$("<p>").text(`Bulbasaur x ${compGrass}`)
    const compWaterStats=$("<p>").text(`Squirtle x ${compWater}`)
    compStatsDiv.append(compHead, compFireStats,compGrassStats, compWaterStats)
    endGameWindow.append(compStatsDiv)
    const badMessage = $("<p>").text("You Lose Twerp!").addClass("message")
    const goodMessage = $("<p>").text("We'll Get You Next Time!").addClass("message")
    const greatMessage = $("<p>").text("Team Rocket Blasting Off Again!").addClass("message")
    const badMessageImg = $("<img>").attr("src","assets/images/badwinner.png").addClass("endImg")
    const goodMessageImg= $("<img>").attr("src","assets/images/goodwinner.png").addClass("endImg")
    const greatMessageImg = $("<img>").attr("src","assets/images/greatWinner.png").addClass("endImg")
    if (wins > 4) {
        endGameWindow.append(greatMessage, greatMessageImg)
    } else if (wins > 3) {
        endGameWindow.append(goodMessage, goodMessageImg);
    } else {
        endGameWindow.append(badMessage, badMessageImg)
    }


    const playAgainBtn = $("<button>").text("Play Again?").addClass("playAgainBtn")
    endGameWindow.append(playAgainBtn)
    $(".endGame").append(endGameWindow)
    $(".endGameWindow").on("click", ".playAgainBtn", function () {
        console.log("click")
        hideResults();
        wins = 0;
        lives = 3;
        $("#score").text(wins + " Wins")
        $("#lives").text(lives + " Lives")
        $(".endGame").empty();

    })
}

function hideResults() {
    $(".fireImgP").hide()
    $(".grassImgP").hide()
    $(".waterImgP").hide()
    $(".playerWinner").hide()
    $(".fireImgR").hide()
    $(".grassImgR").hide()
    $(".waterImgR").hide()
    $(".rocketWinner").hide()
}

function stats(){
   
}