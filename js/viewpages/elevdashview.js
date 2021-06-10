function updateViewElevDash() {
    let html = `
    <div id=elevDashPage>
        <div id="weekThemeElev"><h3>Week Theme</h3></div>
        <div id="logWeek">
            <div class="days" id="mandag"><h3>Mandag</h3></div>
            <div class="days" id="tirsdag"><h3>Tirsdag</h3></div>
            <div class="days" id="onsdag"><h3>Onsdag</h3></div>
            <div class="days" id="torsdag"><h3>Torsdag</h3></div>
            <div class="days" id="fredag"><h3>Fredag</h3></div>
        </div>
        <div id="chatNotes"></div>
    </div>
`;
document.getElementById('app').innerHTML = html;
}
