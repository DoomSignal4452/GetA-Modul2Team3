

function updateViewAdminDash() {
    console.log('updateViewAdminDash is running')
    let html = `        
    <div id=adminDashPage>
        <div id="weekTheme"><h3>Week Theme </h3>             
            <div id="pinnedWeekThemeModul2">
                <h2> Week5: Locus of Control</h2> 

                <h3> Theme for Monday </h3>
                <h3> Theme for Thuesday </h3>
                <h3> Theme for Wednesday </h3>
                <h3> Theme for Thursday </h3>
                <h3> Theme for Monday </h3>           
            </div>

            <div id="calendar">
                ${getCalendar()}
            </div>
        </div>
    <div>
    `;

    // modul3Collapse

    let counter = 0;
    for (let modulEntity of getTopLevelEntities()) {
        counter++;
        let moduleName = 'modul' + `${counter}`;
        let moduleCollapseName = 'modul' + `${counter}` + 'Collapse';

        html += `
            <div class="moduler noselect" >
                <div>
                    <div id="${moduleName}" class="modulHeader" onclick="collapse(this.id)">
                        <h2>${modulEntity.name}</h2>
                    </div>
                <div id="${moduleCollapseName}" class="modulBox">
            `;

        const teams = getChildren(modulEntity);

        let counter2 = 0;

        for(let team of teams){
            counter2++;

            html += `<div id="teamContainer"  class="teamBox">
                        <h3 id="teamHeader">${team.name}</h3>`;
            const students = getChildren(team);
                for(let student of students){
                html += `<div onclick="updateViewAdminLogg()">${student.name}</div>`;
            }

            html += `<div></div></div>`;
        }
        html += `</div></div></div>`;
    }

    html += '</div></div>'
    document.getElementById('app').innerHTML = html;

};




/* <div id="modul1" onclick="collapse(this.id)">Modul1>
    <div id="modul1Collapse"> Content1 </div>
</div>

<div id="modul2" onclick="collapse(this.id)">Modul1>
    <div id="modul2Collapse"> Content2 </div>
</div>

<div id="modul3" onclick="collapse(this.id)">Modul1>
    <div id="modul3Collapse"> Content3 </div>
</div> */