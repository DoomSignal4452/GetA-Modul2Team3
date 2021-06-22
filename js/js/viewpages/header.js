let HeaderPage='adminQ';

function ViewAdminHeader() {
    document.getElementById('header').innerHTML = `
    <div class=headerWrap>

        <div class=headerTop>${HeaderPage}</div>

        <div class=headerBot>

            <div class="navBar">
                <div class="hoverRed" onclick="(HeaderPage='admindash');updateViewAdminDash()"><a class="aHeader" href="#">Home</a></div>

                <div onclick="(model.app.currentPage = 'admindash');(HeaderPage='admindash'); updateView()" class="hoverRed"><a class="aHeader" href="#">admindash</a></div>

                <div onclick="(model.app.currentPage = 'adminLogg');(HeaderPage='adminLogg'); updateView()" class="hoverRed"><a class="aHeader" href="#">adminLogg</a></div>

                <div onclick="(model.app.currentPage = 'adminQ');(HeaderPage='adminQ'); updateView()" class="hoverRed"><a class="aHeader" href="#">adminQ</a></div>

                <div onclick="(model.app.currentPage = 'elevDash');(HeaderPage='elevDash'); updateView()" class="hoverRed"><a class="aHeader" href="#">elevDash</a></div>

                <div class="hoverRed floatRight" onclick="LoggUt()"><a class="aHeader" href="#">Logg Ut</a></div>

            </div>

        </div>

    </div>
    `;
}




function ViewElevHeader() {
    document.getElementById('header').innerHTML = `
    <div class=headerWrap>

        <div class=headerTop>${HeaderPage}</div>

        <div class=headerBot>

            <div class="navBar">
                <div onclick="(HeaderPage='elevDash'); updateViewElevDash(); ViewElevHeader()" class="hoverRed"><a class="aHeader" href="#">Home</a></div>

                <div onclick="(model.app.currentPage = 'elevDash');(HeaderPage='elevDash'); updateView()" class="hoverRed"><a class="aHeader" href="#">elevDash</a></div>

                <div onclick="(model.app.currentPage = 'ElevLogg');(HeaderPage='ElevLogg'); updateView()" class="hoverRed"><a class="aHeader" href="#">ElevLogg</a></div>

                <div onclick="(model.app.currentPage = 'admindash');(HeaderPage='admindash'); updateView()" class="hoverRed"><a class="aHeader" href="#">admindash</a></div>

                <div onclick="(model.app.currentPage = 'elevDash');(HeaderPage='elevDash'); updateView()" class="hoverRed"><a class="aHeader" href="#">item4</a></div>

                <div class="hoverRed floatRight" onclick="LoggUt()"><a  class="aHeader" href="#">Logg Ut</a></div>

            </div>

        </div>

    </div>
    `;
}

function ViewNoHeader() {
    document.getElementById('header').innerHTML = ``;
}
