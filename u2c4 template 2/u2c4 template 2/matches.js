// write js code here corresponding to matches.html
var teamCrickter = JSON.parse(localStorage.getItem("schedule"));
    displayData(teamCrickter);

   
        function handleNameSort() {
            var selected = document.getElementById("filterVenue").value;
            console.log(selected);
            var filteredList=teamCrickter.filter(function (elem) {
              return elem.venue == selected;
            });
            console.log(filteredList);
            displayData(filteredList);
          }

    
    var matchesArr = JSON.parse(localStorage.getItem("")) || [];

    function displayData(data) {
      document.querySelector("tbody").innerHTML = "";
      data.forEach(function (elem) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.matchnum;

        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.teamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.date;

        var td5 = document.createElement("td");
        td5.innerText=elem.venue;
        var td6 = document.createElement("td");
        
        td6.innerText = "Add to favrate";
        td6.style.color = "blue";
        td6.style.cursor = "pointer";
        td6.addEventListener("click", function () {
          //writing logic here
          bookMarkFun(elem);
        });
        tr.append(td1, td2, td3, td4, td5,td6);

        document.querySelector("tbody").append(tr);
      });
    }

    function bookMarkFun(elem) {
      console.log(elem);
      matchesArr.push(elem);
      localStorage.setItem("bookmarks", JSON.stringify(matchesArr));
    }