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

function chosenModule() {
    let Modul1=model.inputs.adminQmodelPage.modulCheckbox.modul1;
    let Modul2=model.inputs.adminQmodelPage.modulCheckbox.modul2;
    let Modul3=model.inputs.adminQmodelPage.modulCheckbox.modul3;

    if (Modul1 == 'checked') {
        createDropDownTeam(1);
    }

    else if (Modul2 == 'checked') {
        createDropDownTeam(2);
    }

    else if (Modul3 == 'checked') {
        createDropDownTeam(3);
    }

    updateView();
}




function createDropDownTeam(Modul){
   
    let getEntity = model.entity;

    let getEleverFromParentEntity = null;

        if (Modul == 1) {      
            getEleverFromParentEntity =  model.entities.filter(p => p.parentId == 1) ;
            console.log(getEleverFromParentEntity);
            createDropDownElev();
        }

        if (Modul == 2) {   
            getEleverFromParentEntity =  model.entities.filter(p => p.parentId == 2) ;
            console.log(getEleverFromParentEntity);
            createDropDownElev();
        }

        if (Modul == 3) {   
            getEleverFromParentEntity =  model.entities.filter(p => p.parentId == 3) ;
            console.log(getEleverFromParentEntity);
            createDropDownElev();
        }
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

function getEleverFromTeams() {
    
}


function createDropDownElev() {
        let M1teams = '';
        let getEleverFromEntity = model.entities.filter(p => (p.parentId)) 
        if (model.inputs.adminQmodelPage.modulCheckbox.modul1 == "checked")  {
            return M1teams = `
            <select id="selectElev" class="large" onchange="(parentId = this.value)" style="margin: auto; margin-bottom: 2vh;">   
                <option unselected selected>All students</option>        
                <option value="1">Elev1</option>
                <option value="2">Elev2</option>
                <option value="3">Elev3</option>      
            </select>
            `;
        } else {return M1teams;}

    }

    getElevFromTeamEntity();

    function getElevFromTeamEntity() {
       
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
    return model.entities.filter(e => e.parentId === entity.id);
}
