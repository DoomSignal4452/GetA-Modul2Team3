function updateViewElevDash() {
    let html = `
    <div id="elevDashPage">
        <div id="weekThemeElev">
            <h3>Week Theme</h3>
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

        <div id="logWeek">
            <div class="logdays" id="mandag">
                <h3>Mandag</h3>
                <div class="completedTag">🗸</div>
            </div>
            <div class="logdays" id="tirsdag">
                <h3>Tirsdag</h3>
                <div class="completedTag">🗸</div>
            </div>
            <div class="logdays" id="onsdag" onclick="updateViewElevLogg()">
                <h3>Onsdag</h3>
                <div class="completedTag"></div>
            </div>
            <div class="logdays" id="torsdag">
                <h3>Torsdag</h3>
                <div class="completedTag"></div>
            </div>
            <div class="logdays" id="fredag">
                <h3>Fredag</h3
                <div class="completedTag"></div>
            </div>
        </div>
        <div id="chatNotes">
            
            <textarea  id="elevNotes" name="w3review" rows="4" cols="50" placeholder="Some text" > Skriv notater her. </textarea>
            
            <div id="elevChat">
                <div id="chatBox"></div>
                <div>
                    <input id="chatInput" type="text">
                    <button>Clear</button>
                    <button>Send</button>
                </div>
                
            
            </div>

            
        </div>
    </div>
`;
document.getElementById('app').innerHTML = html;
}


