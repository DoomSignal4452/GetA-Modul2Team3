
function LoggInn() {

    let UserIndex = CheckLogin();
    console.log('index of user2 ' + UserIndex)

    let CheckPass = CheckPassword(UserIndex);
    console.log(CheckPass)

    if (model.entities[UserIndex].isAdmin===true && CheckPass === true) {
        model.app.currentPage='admindash';
    }
    else if (CheckPass=== true) {
        model.app.currentPage='elevDash';
    }
    updateView();
}

//<input class="logInput" id="userName" placeholder="Username" onchange="writeName(this.value)"></input>
//<input class="logInput" id="password" placeholder="Password" onchange="writePassword(this.value)"></input>

function writeName(isname) {
    model.inputs.loggInPage.UserName = isname;
}

function writePassword(pass) {
    model.inputs.loggInPage.Passord = pass;
}

function CheckLogin() {

    let index = model.entities.findIndex( element => {
        if (element.name === model.inputs.loggInPage.UserName) {
          return true;
        }
    });

    console.log('index of user ' + index)

    if (index<0) {return false} 
    else {return index}

}

function CheckPassword(index) {
    console.log('password index '+index)
    if (index===false) {return}

    if (model.inputs.loggInPage.Passord === model.entities[index].password) {return true}
    else {return false;}
}

