function updateViewAdminLogg() {
    let html = `
        <div id="adminLog">
            <div id="logWeekThemeElev">
                <h3>Week Theme </h3>             
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
                    <div id="studName">💀Emil</div>

                    <div class="inlineSlider sliderUpdateDiv" style="float:right;">
                        <div class="sliderUpdateDivText" id="sliderUpdateDivText">5</div>
                    </div> 
                    <br><br>

                    <div id="Questions">
                        <div id="Qheader">Hvordan har uken din gått?</div>
                        <textarea id="Qreply" placeholder="Elevsvar her"></textarea>
                        <textarea id="Qcomment" placeholder="Admin comments her"></textarea>
                    </div>

                    <div id="Questions">
                        <div id="Qheader">Hvordan fungerer teamet ditt?</div>
                        <textarea id="Qreply" placeholder="Elevsvar her"></textarea>
                        <textarea id="Qcomment" placeholder="Admin comments her"></textarea>
                    </div>

                    <div id="Questions">
                        <div id="Qheader">Hva kan du forbedre til neste uke?</div>
                        <textarea id="Qreply" placeholder="Elevsvar her"></textarea>
                        <textarea id="Qcomment" placeholder="Elevsvar her"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            <div id="chatNotes">
                <textarea oninput="elevnotes(this.value)" id="elevNotes" name="w3review" rows="4" cols="50" style="text-align: left">Skriv notater her.</textarea>
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
            </div>
        </div>
`;
document.getElementById('app').innerHTML = html;
}






