document.querySelector("#masaiForm").addEventListener("submit",cricket)
var teamCrickter= JSON.parse(localStorage.getItem("schedule")) || [];

function cricket(){
    event.preventDefault();
    var dataObj={
        matchnum:masaiForm.matchNum.value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,
    };
    teamCrickter.push(dataObj);
    // console.log(cricketTeam)
    localStorage.setItem("schedule",JSON.stringify(teamCrickter));
}