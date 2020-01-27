
$("#start").on("click", function(){
    $("#start").css("display","none")
    $('audio#openMusic')[0].play()  
    teamRocketIntro();
    $(".nextDiv").on("click", function (){
        rules()
    })

})






function rules(){
    $(".rocketIntro").empty()
    $('audio#rocketMusic')[0].pause() 
    $('audio#openMusic')[0].play()  
    const welcome= $("<h1>").text(`Welcome to Pokemon FGW Battles!!!`)
    const aboutDiv=$("<div>").addClass("rulesText")
    const aboutP=$("<p>").text(`Pokemon FGW Battles is a take on Rock, Paper Scissors. `)
    const f =$("<span>").text(` Fire Type, `).addClass("fire")
    const g =$("<span>").text(`Grass Type, `).addClass("grass")
    const w =$("<span>").text(`Water Type. `).addClass("water")
    const aboutP2=$("<p>").append(f,g,w)
    const aboutP3=$("<p>").text(`Fire Beats Grass, Grass Beats Water, Water Beats Fire. Each turn the player choose their pokemon! Careful you only have three lives.`)

    aboutDiv.append(aboutP,aboutP2,aboutP3)
    const rulesWrapper =$("<div>").addClass("rulesWrapper")
    const img=$("<img>").attr("src","assets/images/guide.png").addClass("guideImg")
    const rulesButton =$("<button>").addClass("rulesBtn").text(`I Am Ready To Be The Very Best`)
    rulesWrapper.append(welcome, aboutDiv, img, rulesButton);
    $(".rulesDiv").append(rulesWrapper)        
}

function teamRocketIntro(){  
    $('audio#openMusic')[0].pause()  
    $('audio#rocketMusic')[0].play() 
    console.log(" rocket intro working") 
    const img=$("<img>").attr("src","assets/images/teamRocket.png").addClass("teamRocketImg")
    const introLines=["Prepare for Trouble!",
    "Make it Double!",
    "To protect the world from devastation!",
    "To unite all peoples within our nation!",
    "To denounce the evils of truth and love!",
    "To extend our reach to the starts above!",
    "Jessie!",
    "James!",
    "Team Rocket, blast off at the speed of light!",
    "Surrender now or prepare to fight!",
    "We Challenge you to a FGW Battle!",
    "Meowth that's right!",]
    const teamRocketDiv=$("<div>").addClass("rocketIntro")
    const lines=v=$("<div>").addClass("rocketIntroLines")
    for(i=0;i<introLines.length;i++){
        const line=$("<p>").text(introLines[i])
        lines.append(line)
    }
    const nextDiv=$("<div>").addClass("nextDiv")
    const img2=$("<img>").attr("src","assets/images/squirtleBoss.png")
    const text=$("<p>").text("Challenge Accepted!")
    nextDiv.append(img2,text)
    teamRocketDiv.append(img,lines, nextDiv)
    $(".rulesDiv").append(teamRocketDiv)
}