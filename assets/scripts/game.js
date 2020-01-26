console.log("game working");
$(".rulesDiv").on("click", "button", function () {
    console.log("rules btn clicked")
    $(".rulesDiv").empty("")
    const pokeBar = $("<div>").addClass("pokeBar")
    const pokemonImgs = ["assets/images/charmander.png","assets/images/bulbasaur.png", "assets/images/squirtle.png"]
    const type= ["fire", "grass", "water"]
    for (i = 0; i < pokemonImgs.length; i++) {
        const pokeImg = $("<img>").attr("src", pokemonImgs[i])
        pokeImg.attr("type-value", type[i])
        pokeBar.append(pokeImg)
    }
    $(".gameDiv").append(pokeBar)
})

$(".gameDiv").on("click", "img", function(){
    var typeValue = ($(this).attr("type-value"))
    console.log(typeValue +"pokemon clicked")
})
