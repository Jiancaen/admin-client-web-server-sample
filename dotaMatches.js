const tableData = document.querySelector("#tableData")
const matchData = "https://api.opendota.com/api/proMatches"
let matchArray


fetch(matchData)
.then(response => response.json())
.then(function(json){
    matchArray = json
    console.log(json)
    for (let obj in matchArray) {
        let matchID = matchArray[obj].match_id
        let duration = matchArray[obj].duration
        let startTime = matchArray[obj].start_time
        let radiantTeamID = matchArray[obj].radiant_team_id
        let radiantName = matchArray[obj].radiant_name
        let direTeamID = matchArray[obj].dire_team_id
        let direName = matchArray[obj].dire_name
        let leagueID = matchArray[obj].leagueid
        let leagueName = matchArray[obj].league_name
        let seriesID = matchArray[obj].series_id
        let seriesType = matchArray[obj].series_type
        let radiantScore = matchArray[obj].radiant_score
        let direScore = matchArray[obj].dire_score
        let matchWinner
        if (matchArray[obj].radiant_win === true) {
             matchWinner = matchArray[obj].radiant_name
        } else
             matchWinner = matchArray[obj].dire_name


        let template = `<tr>
                <td>${matchID}</td>
                <td>${duration}</td>
                <td>${startTime}</td>
                <td>${radiantTeamID}</td>
                <td>${radiantName}</td>
                <td>${direTeamID}</td>
                <td>${direName}</td>
                <td>${leagueID}</td>
                <td>${leagueName}</td>
                <td>${seriesID}</td>
                <td>${seriesType}</td>
                <td>${radiantScore}</td>
                <td>${direScore}</td>
                <td>${matchWinner}</td>

                </tr>`

    tableData.innerHTML += template

    }
})
