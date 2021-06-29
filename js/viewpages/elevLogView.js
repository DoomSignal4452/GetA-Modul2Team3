function updateViewElevLogg() {
    let html = `
        <div id="elevLogView">
            <div id="logWeekThemeElev">
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

            <div id="WriteLog">
                <div id="logInputs">
                    <div class="slidecontainer">
                        <input type="range" min="1" max="10" value="5" class="slider inlineSlider" id="myRange" style="border: 1px solid darkgrey" oninput="getValueFromSlider(this.value)">
                        <div class="inlineSlider sliderUpdateDiv" style="border: 2px solid black; border-radius: 25%;">
                            <div class="sliderUpdateDivText" id="sliderUpdateDivText">5</div>
                        </div>

                        ${getQuestionsFromArray()}

                    </div>
                </div>
            </div>
        </div>

        <div id="chatNotes">
            <textarea oninput="elevnotes(this.value)" id="elevNotes" name="w3review" rows="4" cols="50" style="text-align: left">Skriv notater her.</textarea>
            <div id="elevChat">
                <div id="chatBox"></div>
                <div>
                    <input  id="chatInput" type="text">
                    <button>Clear</button>
                    <button>Send</button>
                </div>
            </div>
        </div>`;
    document.getElementById('app').innerHTML = html;
}