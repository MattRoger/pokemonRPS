const computerChoices = ["fire", "grass", "water"]
let computerGuess = "";

let lives = 3;
let wins = 0;


$(".rulesDiv").on("click", ".rulesBtn", function () {
    console.log("rules btn clicked")
    $(".rulesDiv").empty("").css("display","none")
    $('audio#openMusic')[0].pause()
    $('audio#battleMusic')[0].play()  
    const pokeBar = $("<div>").addClass("pokeBar")
    const pokemonImgs = ["assets/images/charmander.png", "assets/images/bulbasaur.png", "assets/images/squirtle.png"]
    const type = ["fire", "grass", "water"]
    const playerResultsBar=$("<div>").addClass("resultsPokeImg")
    const teamRocketResultsBar=$("<div>").addClass("resultsPokeImg")
    for (i = 0; i < pokemonImgs.length; i++) {
        const pokeImg = $("<img>").attr("src", pokemonImgs[i])
        const pokeResultsImgP = $("<img>").attr("src", pokemonImgs[i])
        const pokeResultsImgR = $("<img>").attr("src", pokemonImgs[i])
        pokeImg.attr("type-value", type[i]).css("width","200px")
        pokeBar.append(pokeImg)

        pokeResultsImgP.addClass(type[i]+`ImgP`).css("display","none") 
        playerResultsBar.append(pokeResultsImgP) 

        pokeResultsImgR.addClass(type[i]+`ImgR`).css("display","none") 
        teamRocketResultsBar.append(pokeResultsImgR) 
    }
    $(".gameDiv").append(pokeBar)  
    $("#score").text(wins)
    $("#lives").text(lives)
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
    const playerImgClass=`${userGuess}ImgP`;    
    const computerImgClass=`${computerGuess}ImgR`;
    $(`.${playerImgClass}`).css("display","inline")    
    $(`.${computerImgClass}`).css("display","inline")    
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
        endGame()
    }

})

$("#endGame").on("click", "button", function () {
    lives=3;
    wins=0
    $("#score").text(wins)
    $("#lives").text(lives)
    $(".endGame").empty()
})


function hideResults(){
    $(".fireImgP").hide()
    $(".grassImgP").hide()
    $(".waterImgP").hide()
    $(".fireImgR").hide()
    $(".grassImgR").hide()
    $(".waterImgR").hide()
}

function endGame(){
    const endGameWindow =$("<div>").addClass("endGameWindow");
    const score= $("<p>").text(wins);
    const playAgainBtn=$("<button>").text("Play Again?")
    endGameWindow.append(score, playAgainBtn)
    $(".endGame").append(endGameWindow)
}


