function showHide(divID) {
    var x = document.getElementById(divID);
    if (x.style.display === "table-row-group") {
      x.style.display = "block";
    } else {
      x.style.display = "table-row-group";
    }
  }