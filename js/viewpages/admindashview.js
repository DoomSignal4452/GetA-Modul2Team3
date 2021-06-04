function updateViewAdminDash() {
    document.getElementById('app').innerHTML = `
        <div id="adminDashPage">
            <div id="weekTheme">Hei</div>
            <div id="modules">
                <div class="moduler" id="modul1" onclick="showHide('modul1collapse')">
                    <div class="modulHeader"></div>
                    <div id="modul1collapse" class="innerModulGrid">
                        <div id="team1m1"></div>
                        <div id="team2m1"></div>
                        <div id="team3m1"></div>
                        <div id="team4m1"></div>
                        <div id="team5m1"></div>
                    </div>
                </div>
                <div class="moduler" id="modul2">
                    <div class="modulHeader"></div>
                </div>
                <div class="moduler" id="modul3">
                    <div class="modulHeader"></div>
                </div>
                <div class="moduler" id="GetIt">
                    <div class="modulHeader"></div>
                </div>
                <div class="moduler" id="Teachers">
                    <div class="modulHeader"></div>
                </div>
                <div class="moduler" id="Notes">
                    <input type="textarea" placeholder="notes"></input>
                </div>
            </div>
        </div>
    `;
}
