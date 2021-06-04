function updateViewAdminDash() {
    document.getElementById('app').innerHTML = `
        <div id="adminDashPage">
                <div id="weekTheme">Hei</div>
                <div id="modules">
                    <div id="modul1">
                        <div class="modulHeader"></div>
                        <div class="innerModulGrid">
                            <div id="team1m1"></div>
                            <div id="team2m1"></div>
                            <div id="team3m1"></div>
                            <div id="team4m1"></div>
                            <div id="team5m1"></div>
                        </div>
                    </div>
                    <div id="modul2">
                        <div class="modulHeader"></div>
                    </div>
                    <div id="modul3">
                        <div class="modulHeader"></div>
                    </div>
                    <div id="GetIt">
                        <div class="modulHeader"></div>
                    </div>
                    <div id="Teachers">
                        <div class="modulHeader"></div>
                    </div>
                    <div id="Notes">
                        <input type="textarea" placeholder="notes"></input>
                    </div>
                </div>
        </div>
    `;
}
0