function updateViewAdminDash() {
    let html = ``;
    // let resultat = document.getElementById('app').innerHTML;


    // for(let i = 0; i < model.entities.length; i++){
    //     if(model.entities[i].parentId == null){

    //         html += `


    //         <div>${model.entities[i].name} </div>

    //         `;

    //     }

    //     if(model.entities[i].id == model.entities[i].parentId){
    //         html += `<div> ${model.entities[i].name} </div>`
    //     }
    // }
    // html + `</div>`
    //resultat += html;

    for (let modulEntity of getTopLevelEntities()) {
        html += `
                 <div  class="moduler">
                    ${modulEntity.name}                     
                 </div>            
            `;
        const teams = getChildren(modulEntity);
        for(let team of teams){
            html += `<h3 class="modulHeader">${team.name}</h3>`;
            const students = getChildren(team);
            for(let student of students){
                html += `<li>${student.name}</li>`;
            }
        }
    }

    document.getElementById('app').innerHTML = html;

};

// function showTeams() {
//     for(let i = 0; i < model.entities.length; i++) {
//         if(model.entities[i].parentId == null && model.entities[i].id == 1) {
// }

function updateViewAdminDashx() {
    document.getElementById('app').innerHTML = `
        <div id=adminDashPage>
            <div id="weekTheme">weee</div>
            <div>
            <div class="moduler" id="modul1" onclick="showHide('modul1collapse')">
                <div class="modulHeader">${model.entities[0].name}</div>
                    <div id="modul1collapse" class="innerModulGrid">
                </div>
            </div>

            <div class="moduler" id="modul2" onclick="showHide('modul2collapse')">
                <div class="modulHeader">${model.entities[1].name}</div>
                    <div id="modul2collapse" class="innerModulGrid">
                </div>
            </div>

            <div class="moduler" id="modul3" onclick="showHide('modul3collapse')">
                <div class="modulHeader">${model.entities[2].name}</div>
                    <div id="modul3collapse" class="innerModulGrid">

                </div>
            </div>

            <div class="moduler" id="GetIt" onclick="showHide('GetItcollapse')">
                <div class="modulHeader">Get IT</div>
                    <div id="GetItcollapse" class="innerModulGrid">

                </div>
            </div>

            <div class="moduler" id="Teachers" onclick="showHide('Teacherscollapse')">
                <div class="modulHeader">Teachers</div>
                    <div id="Teacherscollapse" class="innerModulGrid">

                </div>
            </div>

            <div class="moduler" id="Notes">
                <input type="textarea" placeholder="notes"></input>
            </div>
            </div>
            </div>
                `;
}






