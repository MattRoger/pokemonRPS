console.log("rules working");
$(document).ready(function () {
    const welcome= $("<h1>").text(`Welcome to Pokemon FGW Battles!!!`)
    const about=$("<p>").text(`Pokemon FGW Battles is a take on Rock, Paper Scissors. `)
    const fgw =$("<span>").text(`Fire Type, Grass Type, Water Type`)
    about.append(fgw)
    about.append(`Fire Beats Grass, Grass Beats Water, Water Beats Fire. Each turn the player choose their pokemon! Careful you only have three lives.`)
    const rulesWrapper =$("<div>").addClass("rulesWrapper")
    const rulesButton =$("<button>").addClass("rulesBtn").text(`I Am Ready To Be The Very Best`)
    rulesWrapper.append(welcome, about, rulesButton);
    $(".rulesDiv").append(rulesWrapper)    
})
       