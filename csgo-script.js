const tableData = document.querySelector("#tableData2")
const compData = "https://api.sportsdata.io/v3/csgo/scores/json/Competitions?key=d174d0511af74128b71eca872ed8ed84"
let compArray

fetch(compData)
    .then(response => response.json())
    .then(function (json) {
        compArray = json
        console.log(json)
        for (let obj in compArray) {
			if (compArray[obj].CompetitionId === 100000009){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000010){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000011){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000012){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000013){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000014){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000015){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000016){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000017){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000018){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000023){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000024){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000025){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000026){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000027){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000029){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000030){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000031){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000032){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000033){
				var info = getInfo(compArray,obj)
			} else if(compArray[obj].CompetitionId === 100000034){
				var info = getInfo(compArray,obj)
			}
        }
    })

function getInfo(compArray,obj){

	let tournamentName = compArray[obj].Name
	for (let season in compArray[obj].Seasons) {
		for (let rounds in compArray[obj].Seasons[season].Rounds) {
			let competitionId = compArray[obj].Seasons[season].CompetitionId
			let competitionName = compArray[obj].Seasons[season].Name
			let roundId = compArray[obj].Seasons[season].Rounds[rounds].RoundId
			let roundName = compArray[obj].Seasons[season].Rounds[rounds].Name
			let startDate = compArray[obj].Seasons[season].Rounds[rounds].StartDate.substring(0,10)
			let endDate = compArray[obj].Seasons[season].Rounds[rounds].EndDate.substring(0,10)


			let template = `<tr>
				<td>${tournamentName}</td>
				<td>${competitionId}</td>
				<td>${competitionName}</td>
				<td>${roundId}</td>
				<td>${roundName}</td>
				<td>${startDate}</td>
				<td>${endDate}</td>

				</tr>`

			tableData.innerHTML += template
		}
	}
}
