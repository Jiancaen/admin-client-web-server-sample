const teamsDiv = document.querySelector(".teams")
const teamData = "https://api.opendota.com/api/teams"

let filteredTeams = []

fetch(teamData)
.then(resp => resp.json())
.then(function(json){
    let teamsArray = json
    // console.log(teamsArray)

    for (obj in teamsArray) {
        if (teamsArray[obj].last_match_time > 1600000000) {
            filteredTeams.push(teamsArray[obj])
        }
    }

    for (obj in filteredTeams) {
        let teamLogo = document.createElement('img')
        teamLogo.src = filteredTeams[obj].logo_url
        let teamFigure = document.createElement('figure')
        teamFigure.appendChild(teamLogo)
        let teamCaption = document.createTextNode(filteredTeams[obj].name)
        let teamName = document.createElement('figcaption')
        teamName.appendChild(teamCaption)
        teamFigure.appendChild(teamName)
        teamsDiv.appendChild(teamFigure)
    }
})
