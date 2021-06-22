function updateViewLogin(){
    document.getElementById('app').innerHTML = `
    <div id="LoginPage">
        <img id="logo" src="/images/Transp_logo.png" alt="Get academy logo">
        <input class="logInput" id="userName" placeholder="Username" onchange="writeName(this.value)"></input>
        <input class="logInput" id="password" placeholder="Password" onchange="writePassword(this.value)"></input>
        <div class="buttons">
            <button id="clear">Clear</button>
            <button id="Loginn" onclick="LoggInn()">Log In</button>
        </div>
    </div>

    `;
}

function showCalender() {
    let calendarHtml = `
    <div id="calendar">
        <iframe src="https://calendar.google.com/calendar/embed?src=c_vub744u0vr2gssuonqm3tkik2g%40group.calendar.google.com&ctz=Europe%2FOslo" 
                        style="border: 0" 
                        width="400" 
                        height="300" 
                        frameborder="0" 
                        scrolling="no"><
        </iframe>
    </div>`;
}