function updateViewLogin(){
    document.getElementById('app').innerHTML = `
    <div id="LoginPage">
        <img id="logo" src="..//Modul2team3/images/Transp_logo.png" alt="Get academy logo">
        <input class="logInput" id="userName" placeholder="Username"></input>
        <input class="logInput" id="password" placeholder="Password"></input>
        <div class="buttons">
            <button id="clear">Clear</button>
            <button id="Loginn">Log In</button>
        </div>
    </div>

    `;
}