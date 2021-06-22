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
    let html = ``;

    if ((model.inputs.adminQmodelPage.modulCheckbox.modul1 == 'checked') ||
        (model.inputs.adminQmodelPage.modulCheckbox.modul2 == 'checked') ||
        (model.inputs.adminQmodelPage.modulCheckbox.modul3 == 'checked')) {

        for (var i = 0; i < teams.length; i++) {
            html +=
                `<option>${teams[i].name}</option>`
        };
    }
    return html;
}

function createDropDownTeam() {
    let getEleverFromParentEntity = null;

    if (model.inputs.adminQmodelPage.modulCheckbox.modul1 == 'checked') {
        let dropDowns = '';
        getEleverFromParentEntity = model.entities.filter(p => p.parentId == 1);
        console.log(getEleverFromParentEntity);
        return dropDowns = `
            <select  id="selectTeam" class="large">   
                <option unselected selected>Velg Team</option>
                ${createTeamOptions(getEleverFromParentEntity)}
                </select>
            `;
    }

    if (model.inputs.adminQmodelPage.modulCheckbox.modul2 == 'checked') {
        getEleverFromParentEntity = model.entities.filter(p => p.parentId == 2);
        console.log(getEleverFromParentEntity);
        return dropDowns = `
            <select  id="selectTeam" class="large">   
                <option unselected selected>Velg Team</option>        
                ${createTeamOptions(getEleverFromParentEntity)}      
            </select>
            `;

    }

    if (model.inputs.adminQmodelPage.modulCheckbox.modul3 == 'checked') {
        getEleverFromParentEntity = model.entities.filter(p => p.parentId == 3);
        console.log(getEleverFromParentEntity);
        return dropDowns = `
            <select  id="selectTeam" class="large">
                <option unselected selected>Velg Team</option>
                ${createTeamOptions(getEleverFromParentEntity)}
            </select>
            `;
    } else return dropDowns = 'Velg en Modul';
}

function modulChecked(s) {
    if (s == 1) {
        if (model.inputs.adminQmodelPage.modulCheckbox.modul1 == "checked") {
            model.inputs.adminQmodelPage.modulCheckbox.modul1 = ""
        } else { model.inputs.adminQmodelPage.modulCheckbox.modul1 = "checked" }
    }

    if (s == 2) {
        if (model.inputs.adminQmodelPage.modulCheckbox.modul2 == "checked") {
            model.inputs.adminQmodelPage.modulCheckbox.modul2 = ""
        } else { model.inputs.adminQmodelPage.modulCheckbox.modul2 = "checked" }
    }

    if (s == 3) {
        if (model.inputs.adminQmodelPage.modulCheckbox.modul3 == "checked") {
            model.inputs.adminQmodelPage.modulCheckbox.modul3 = ""
        } else { model.inputs.adminQmodelPage.modulCheckbox.modul3 = "checked" }
    }
    updateView();
}

//function createDropDownElev() {
//    let isChecked = model.inputs.adminQmodelPage.modulCheckbox;
//    let M1Elev = '';

//    if ((isChecked.modul1 == "checked") || isChecked.modul2 == "checked" || isChecked.modul3 == "checked") {
//        return M1Elev = `
//            <select id="selectElev" class="large" onchange="(parentId = this.value)" style="margin: auto; margin-bottom: 2vh;">   
//                <option unselected selected>All teams</option>        
//                <option value="">Team 1</option>
//                <option value="2">Team 2</option>
//                <option value="3">Team 3</option>      
//            </select>
//            `;
//    }
//    else { return M1Elev; }
//}


function createElevOptions(teams) {
    let html = ``;
    let elever=[];

    console.log(teams[0].id)
    console.log(teams.length)

    for (var i = 0; i < teams.length; i++) {
        elever.push(...model.entities.filter(p => p.parentId == teams[i].id));

        console.log(elever)
    };

    if ((model.inputs.adminQmodelPage.modulCheckbox.modul1 == 'checked') ||
        (model.inputs.adminQmodelPage.modulCheckbox.modul2 == 'checked') ||
        (model.inputs.adminQmodelPage.modulCheckbox.modul3 == 'checked')) {

        for (var i = 0; i < elever.length; i++) {
            html +=
                `<option>${elever[i].name}</option>`;

        };
    }
    return html;
}

function createDropDownElever() {
    let getTeamsFromParentEntity = null;

    if (model.inputs.adminQmodelPage.modulCheckbox.modul1 == 'checked') {
        let dropDowns = '';
        getTeamsFromParentEntity = model.entities.filter(p => p.parentId == 1);
        //console.log(getEleverFromParentEntity);
        return dropDowns = `
                <select  id="selectTeam" class="large">   
                    <option unselected selected>Velg Elev</option>
                    ${createElevOptions(getTeamsFromParentEntity)}
                    </select>`;
    }

    if (model.inputs.adminQmodelPage.modulCheckbox.modul2 == 'checked') {
        getTeamsFromParentEntity = model.entities.filter(p => p.parentId == 2);
        //console.log(getEleverFromParentEntity);
        return dropDowns = `
                <select  id="selectTeam" class="large">   
                    <option unselected selected>Velg Elev</option>        
                    ${createElevOptions(getTeamsFromParentEntity)}      
                </select>`;
    }

    if (model.inputs.adminQmodelPage.modulCheckbox.modul3 == 'checked') {
        getTeamsFromParentEntity = model.entities.filter(p => p.parentId == 3);
        //console.log(getEleverFromParentEntity);
        return dropDowns = `
                <select  id="selectTeam" class="large">
                    <option unselected selected>Velg Elev</option>
                    ${createElevOptions(getTeamsFromParentEntity)}
                </select>`;
    } else return dropDowns = 'Velg en Modul';
}
