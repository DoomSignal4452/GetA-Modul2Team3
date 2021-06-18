

function updateViewAdminDash() {
    console.log('updateViewAdminDash is running')
    let html = `        <div id=adminDashPage>
            <div id="weekTheme">Week Theme</div>
            <div>
    `;

    // modul3Collapse

    let counter = 0;
    for (let modulEntity of getTopLevelEntities()) {
        counter++;
        let moduleName = 'modul' + `${counter}`;
        let moduleCollapseName = 'modul' + `${counter}` + 'Collapse';

        html += `
            <div class="moduler" id=${moduleName} onclick="collapse(this.id)">
                <div id=temp class="modulHeader">
                    <h2>${modulEntity.name}</h2>
                
                    <div id="${moduleCollapseName}">
            
            `;


        
        const teams = getChildren(modulEntity);
        

        let counter2 = 0;
        
 
        for(let team of teams){
            counter2++;
            
            
            html += `<div>
                        <h3>${team.name}</h3>`;
            const students = getChildren(team);
            html += '<div>'
            for(let student of students){
                html += `<li>${student.name}</li>`;
            }


            html += `</div></div>`;
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