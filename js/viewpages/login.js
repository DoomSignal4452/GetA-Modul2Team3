function updateViewLogin(){
    document.getElementById('app').innerHTML = `
    <div id="LoginPage">
        <img id="logo" src="images/get-academy.png" alt="Get academy logo">
        <input class="logInput" id="userName" placeholder="Username" onchange="writeName(this.value)"></input>
        <input class="logInput" id="password" placeholder="Password" onchange="writePassword(this.value)"></input>
        <div class="buttons">
            <button id="clear">Clear</button>
            <button id="Loginn" onclick="LoggInn()">Log In</button>
        </div>
    </div>

    `;
}
