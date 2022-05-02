var bookMarkArr = JSON.parse(localStorage.getItem("bookmarks"));
// 3
displayData(bookMarkArr);

function displayData(data) {
  data.forEach(function (elem, index) {
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
    td5.innerText = elem.venue;
    var td6 = document.createElement("td");
    td6.innerText = "Remove";
    td6.setAttribute("class", "deleteText");
    td6.addEventListener("click", function () {
      deleteItem(elem, index);
    });

    tr.append(td1, td2, td3, td4, td5,td6);

    document.querySelector("tbody").append(tr);
  });
}

function deleteItem(elem, index) {
  bookMarkArr.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookMarkArr));
  window.location.reload();
  //
}