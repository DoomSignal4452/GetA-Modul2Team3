function updateViewMain(){
    document.getElementById('content').innerHTML = `
    <div id="LoginPage">
        <img src="./images/how-to-play-bass-guitar-notes.jpg" alt="Jadda">
        <input class="logInput" id="userName" placeholder="Username"></input>
        <input class="logInput" id="password" placeholder="Password"></input>
        <div class="buttons">
            <button id="clear">Clear</button>
            <button id="Loginn">Log In</button>
        </div>
    </div>

    `;
}