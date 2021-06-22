// function addQuestion() {

//     let date = new Date();
//     let question = {   text: 'Her er et nytt spørsmål', 
//                         id: 1, 
//                         parentId: null, 
//                         date: date, };
//     model.questions.push(question);


// }

// function removeQuestion(index) {
//     model.questions.splice(index, 1);
// }

// function changeQuestion(index) {
//     let question = {   text: 'Endre spørsmål', 
//                         id: 1, 
//                         parentId: null, 
//                         date: date, };

//     model.questions[index] = question;
// }

// function chosenModule() {
//     let Modul1=model.inputs.adminQmodelPage.modulCheckbox.modul1;
//     let Modul2=model.inputs.adminQmodelPage.modulCheckbox.modul2;
//     let Modul3=model.inputs.adminQmodelPage.modulCheckbox.modul3;

//     if (Modul1 == 'checked') {
//      createDropDownTeam(1);
//     }

//     else if (Modul2 == 'checked') {
//         createDropDownTeam(2);
//     }

//     else if (Modul3 == 'checked') {
//         createDropDownTeam(3);
//     }

//     updateView();
// }

function createTeamOptions(teams) {
    let html=``;

    if ((model.inputs.adminQmodelPage.modulCheckbox.modul1 == 'checked') ||
        (model.inputs.adminQmodelPage.modulCheckbox.modul2 == 'checked') || 
        (model.inputs.adminQmodelPage.modulCheckbox.modul3 == 'checked')) {

            for(var i = 0;i<teams.length;i++) {
                html+=
                `<option>${teams[i].name}</option>`
            };
    }
    return html;
}

function createDropDownTeam(){
    let getEleverFromParentEntity = null;

        if (model.inputs.adminQmodelPage.modulCheckbox.modul1 == 'checked') {      
            let dropDowns = '';
            getEleverFromParentEntity =  model.entities.filter(p => p.parentId == 1) ;
            //console.log(getEleverFromParentEntity);
            return dropDowns = `
            <select  id="selectTeam" class="large">   
                <option unselected selected>All teams</option>
                ${createTeamOptions(getEleverFromParentEntity)}
                </select>
            `; 
        }

        if (model.inputs.adminQmodelPage.modulCheckbox.modul2 == 'checked') {   
            getEleverFromParentEntity =  model.entities.filter(p => p.parentId == 2) ;
            //console.log(getEleverFromParentEntity);
            return dropDowns = `
            <select  id="selectTeam" class="large">   
                <option unselected selected>All teams</option>        
                ${createTeamOptions(getEleverFromParentEntity)}      
            </select>
            `;
            
        }

        if (model.inputs.adminQmodelPage.modulCheckbox.modul3 == 'checked') {
            getEleverFromParentEntity =  model.entities.filter(p => p.parentId == 3) ;
            //console.log(getEleverFromParentEntity);
            return dropDowns = `
            <select  id="selectTeam" class="large">
                <option unselected selected>All teams</option>
                ${createTeamOptions(getEleverFromParentEntity)}
            </select>
            `;
        } else return dropDowns = 'Select a module';
    }

function modulChecked(s) {
        
    if ( s== 1) {
        if(model.inputs.adminQmodelPage.modulCheckbox.modul1=="checked") {
            model.inputs.adminQmodelPage.modulCheckbox.modul1=""
        } else {model.inputs.adminQmodelPage.modulCheckbox.modul1="checked"}
    }

    if ( s== 2) {
        if(model.inputs.adminQmodelPage.modulCheckbox.modul2=="checked") {
            model.inputs.adminQmodelPage.modulCheckbox.modul2=""
        } else {model.inputs.adminQmodelPage.modulCheckbox.modul2="checked"}
    }

    if ( s== 3) {
        if(model.inputs.adminQmodelPage.modulCheckbox.modul3=="checked") {
            model.inputs.adminQmodelPage.modulCheckbox.modul3=""
        } else {model.inputs.adminQmodelPage.modulCheckbox.modul3="checked"}
    }
    updateView();
}

// function getEleverFromTeams() {
    
// }

// function createElevOptions() {
    
// }

function createDropDownElev() {
        let isChecked = model.inputs.adminQmodelPage.modulCheckbox;
        let M1Elev = '';

        if  ( (isChecked.modul1 == "checked") || isChecked.modul2 == "checked" || isChecked.modul3 == "checked") {
            return M1Elev = `
            <select id="selectElev" class="large" onchange="(parentId = this.value)" style="margin: auto; margin-bottom: 2vh;">   
                <option unselected selected>All teams</option>        
                <option value="">Team 1</option>
                <option value="2">Team 2</option>
                <option value="3">Team 3</option>      
            </select>
            `;
        } 

        else {return M1Elev;}

    }


    // getElevFromTeamEntity();

    function getElevFromTeamEntity(modul, team) {
        // Modul1: 
       
        let eleverFromTeam = model.entities.filter(p =>  ( ( p.parentId == 1001) && ( ( 3001 <= p.id ) && ( p.id <= 3005 ) ) ));
        console.log(eleverFromTeam);
    }


// else {
//     getEleverFromParentEntity =  model.entities.filter(p => ( ( 1 <= p.parentId) && (p.parentId <= 3) ) ) ;
//     console.log(getEleverFromParentEntity);
// }

// if (document.getElementById('id').checked) {
//     createDropDown(Modul);
// }




        // html += `
        //     <div id="box" style="float: left">
        //         <button id="knapp" onclick="removeFromArray()">Delete</button>
        //         <button id="endreKnapp" onclick="changeInArrayDisplay(${i})">Change</button>

        //     </div>
        //     `;
    
    // return html;

function getChildren(entity){
    let children =  model.entities.filter(e => e.parentId === entity.id);
    console.log(children);
    return children;
}
