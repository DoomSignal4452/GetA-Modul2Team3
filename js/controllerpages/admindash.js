
function LoggUt() {
  model.app.currentPage = "login";
  updateView();
}


function collapse(modulId) {
  if (modulId == 'modul1') {
     document.getElementById('modul1Collapse').classList.toggle('collapse');
  }

  else if (modulId == 'modul2') {
    document.getElementById('modul2Collapse').classList.toggle('collapse');
 }

 else {
  document.getElementById('modul3Collapse').classList.toggle('collapse');
}

}



// AdminQ




// function collapseTeam(teamId) {
//     if (teamId == 'team1') {
//       document.getElementById('modul1Collapse').classList.toggle('collapse');
//     }

//     else if (modulId == 'modul2') {
//     document.getElementById('modul2Collapse').classList.toggle('collapse');
//     }

//     else {
//     document.getElementById('modul3Collapse').classList.toggle('collapse');
//     }

// }





/* 
function collapse(modulId) {
  let html = ``;
  for(let i = 0; i < model.enteties.length; i ++) {
      if(i === 6){

          break;
      }
    if(model.enteties.id === 1)
      html += ``;
  }

} */


// document.getElementById(id).classList.toggle(displayNone);

// for (i = 0; i<model.entities.length; i++)
// if (openClose == 'none') {
//   console.log('collapse is running block')
//   openClose = 'block';
// }
// else {openClose = 'none';
//   console.log('collapse is running none')
// }
// updateViewAdminDash();


