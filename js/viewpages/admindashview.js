function updateViewAdminDash() {
    document.getElementById('app').innerHTML = `
        <div id="adminDashPage">
            <div id="weekTheme">Hei</div>
            <div id="modules">
                <div class="moduler" id="modul1" onclick="showHide('modul1collapse')">
                    <div class="modulHeader">Modul 1</div>
                    <div id="modul1collapse" class="innerModulGrid">
                        <div id="team1m1"></div>
                        <div id="team2m1"></div>
                        <div id="team3m1"></div>
                        <div id="team4m1"></div>
                        <div id="team5m1"></div>
                    </div>
                </div>
                <div class="moduler" id="modul2" onclick="showHide('modul2collapse')">
                    <div class="modulHeader">Modul 2</div>
                        <div id="modul2collapse" class="innerModulGrid">
                        <div id="team1m2"></div>
                        <div id="team2m2"></div>
                        <div id="team3m2"></div>
                        <div id="team4m2"></div>
                        <div id="team5m2"></div>
                    </div>
                </div>
                <div class="moduler" id="modul3" onclick="showHide('modul3collapse')">
                    <div class="modulHeader">Modul 3</div>
                        <div id="modul3collapse" class="innerModulGrid">
                        <div id="team1m3"></div>
                        <div id="team2m3"></div>
                        <div id="team3m3"></div>
                        <div id="team4m3"></div>
                        <div id="team5m3"></div>
                    </div>
                </div>
                <div class="moduler" id="GetIt" onclick="showHide('GetItcollapse')">
                    <div class="modulHeader">Get IT</div>
                        <div id="GetItcollapse" class="innerModulGrid">
                        <div id="team1m1"></div>
                        <div id="team2m1"></div>
                        <div id="team3m1"></div>
                        <div id="team4m1"></div>
                        <div id="team5m1"></div>
                    </div>
                </div>
                <div class="moduler" id="Teachers" onclick="showHide('Teacherscollapse')">
                    <div class="modulHeader">Teachers</div>
                        <div id="Teacherscollapse" class="innerModulGrid">
                        <div id="team1m1"></div>
                        <div id="team2m1"></div>
                        <div id="team3m1"></div>
                        <div id="team4m1"></div>
                        <div id="team5m1"></div>
                    </div>
                </div>
                <div class="moduler" id="Notes">
                    <input type="textarea" placeholder="notes"></input>
                </div>
            </div>
        </div>
    `;
}
