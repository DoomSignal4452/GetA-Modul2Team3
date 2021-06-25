function updateViewAdminQ(hei) {

    let date = new Date();
    date = date.toISOString().substring(0,10);


    // let year = date.substring(0,4);
    // let month = date.substring(5,7);
    // let dayOfMonth = date.substring(8,10);

    // date = `${dayOfMonth}` + '-' + `${month}` + '-' + `${year}`;


    let html = `
    
    <div id="adminLog">
        <div id="logWeekThemeElev">
            <h3>Week Theme </h3>             
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

    <div id="makeQuestions">
        <div id="addQuestion">     
            <div id="addQuestionText">
                <p class="newQ" style="float:left; margin-left: 0.2vw;">Legg til spørsmål</p> 
                <p> <button id="addQuestionButton"> + </button> 
                </p> 
            </div>
        </div>

         <div id="qToModules" class="large">
            <div id="writeQuestion">
                <input
                value="${model.inputs.adminQmodelPage.lagSpm}"
                oninput="(model.inputs.adminQmodelPage.lagSpm = this.value)" 
                id="questionText" 
                type="text" 
                placeholder="Spørsmålstekst"/>
            </div>


            <div id="checkboxContainer">
                <div class="modulbox">Modul 1
                    <input ${model.inputs.adminQmodelPage.modulCheckbox.modul1} onclick="modulChecked(1)" id="modul1" value="${model.inputs.adminQmodelPage.modulCheckbox.modul1}" class="checkbox" type="checkbox" />
                </div>
                <div class="dropbox">
                    ${createDropDownTeam()} 
                    <input id="teamCheckbox"  class="checkbox" type="checkbox" />
                </div>

                <input id="questionDate" value = "${date}" type="date">  

                <div class="modulbox">Modul 2 
                    <input ${model.inputs.adminQmodelPage.modulCheckbox.modul2} onclick="modulChecked(2)" id="modul2" value="${model.inputs.adminQmodelPage.modulCheckbox.modul2}" class="checkbox" type="checkbox" />
                </div>
                <div class="dropbox">
                    ${createDropDownElever()}  
                    <input  class="checkbox" type="checkbox" />
                </div>
                <div></div>
                <div class="modulbox">Modul 3 
                    <input ${model.inputs.adminQmodelPage.modulCheckbox.modul3} onclick="modulChecked(3)" id="modul3" value="${model.inputs.adminQmodelPage.modulCheckbox.modul3}" class="checkbox" type="checkbox" />
                </div>
                <div class="modulbox">add slidebar 
                    <input  class="checkbox" type="checkbox" />
                </div>
                <button id="addnow" onclick="addQuestion()">Save</button> 
                </div>
            </div>    
        </div>








    

`;
document.getElementById('app').innerHTML = html;



}

