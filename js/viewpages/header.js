
function ViewAdminHeader() {
    document.getElementById('header').innerHTML = `
    <div class="headerWrap noselect">

        <div class=headerTop>
            <img class="headerLogo" src="images/get-academy.png" alt="Get academy logo">
            <p class="currentPage">Current Page: ${model.app.currentPage}</p>
        </div>

        <div class=headerBot>

            <div class="navBar">
                <div onclick="(HeaderPage='admindash');updateViewAdminDash()"><p class="aHeader">Home</p></div>

                <div onclick="(model.app.currentPage = 'admindash');(HeaderPage='admindash'); updateView()"><p class="aHeader">admindash</p></div>

                <div onclick="(model.app.currentPage = 'adminLogg');(HeaderPage='adminLogg'); updateView()"><p class="aHeader">adminLogg</p></div>

                <div onclick="(model.app.currentPage = 'adminQ');(HeaderPage='adminQ'); updateView()"><p class="aHeader">adminQ</p></div>

                <div onclick="(model.app.currentPage = 'elevDash');(HeaderPage='elevDash'); updateView()"><p class="aHeader">elevDash</p></div>

                <div class="floatRight" onclick="LoggUt()"><p class="aHeader">Logg Ut</p></div>

            </div>

        </div>

    </div>
    `;
}

function ViewElevHeader() {
    document.getElementById('header').innerHTML = `
    <div class="headerWrap noselect">

        <div class=headerTop>
            <img class="headerLogo" src="images/get-academy.png" alt="Get academy logo">
            <p class="currentPage">Current Page: ${model.app.currentPage}</p>
        </div>

        <div class=headerBot>

            <div class="navBar">
                <div onclick="(HeaderPage='elevDash'); updateViewElevDash(); ViewElevHeader()"><p class="aHeader">Home</p></div>

                <div onclick="(model.app.currentPage = 'elevDash');(HeaderPage='elevDash'); updateView()"><p class="aHeader">elevDash</p></div>

                <div onclick="(model.app.currentPage = 'ElevLogg');(HeaderPage='ElevLogg'); updateView()"><p class="aHeader">ElevLogg</p></div>

                <div onclick="(model.app.currentPage = 'admindash');(HeaderPage='admindash'); updateView()"><p class="aHeader">admindash</p></div>

                <div onclick="(model.app.currentPage = 'elevDash');(HeaderPage='elevDash'); updateView()"><p class="aHeader">item4</p></div>

                <div class="floatRight" onclick="LoggUt()"><p  class="aHeader">Logg Ut</p></div>

            </div>

        </div>

    </div></div>
    `;
}

function ViewNoHeader() {
    document.getElementById('header').innerHTML = ``;
}
