function updateViewAdminDash() {
    let html = `        <div id=adminDashPage>
            <div id="weekTheme">Week Theme</div>
            <div>
    `;

    for (let modulEntity of getTopLevelEntities()) {
        html += `
            <div  class="moduler">
                <div class="modulHeader"><h2>${modulEntity.name}</h2></div>
        
            `;
        const teams = getChildren(modulEntity);
        for(let team of teams){
            html += `<div id="modul1collapse"><h3>${team.name}</h3>`;
            const students = getChildren(team);
            for(let student of students){
                html += `<li>${student.name}</li>`;
            }

            html += '</div>';
        }
        html += '</div>';
    }

    html += '</div></div>'
    document.getElementById('app').innerHTML = html;

};

// function showTeams() {
//     for(let i = 0; i < model.entities.length; i++) {
//         if(model.entities[i].parentId == null && model.entities[i].id == 1) {
// }<h3 class="modulHeader">${team.name}</h3>

/* function updateViewAdminDashx() {
    document.getElementById('app').innerHTML = `
        <div id=adminDashPage>
            <div id="weekTheme">weee</div>
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
} */






