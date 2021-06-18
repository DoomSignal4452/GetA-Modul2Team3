

function ViewAdminHeader() {
    document.getElementById('header').innerHTML = `
    <div class=headerWrap>

        <div class=headerTop>I is Header</div>

        <div class=headerBot>

            <div class="navBar">
                <div class="hoverRed"><a class="aHeader" href="index.html">Home</a></div>

                <div class="hoverRed"><a class="aHeader" href="#">item1</a></div>

                <div class="hoverRed"><a class="aHeader" href="#">item2</a></div>

                <div class="hoverRed"><a class="aHeader" href="#">item3</a></div>

                <div class="hoverRed"><a class="aHeader" href="#">item4</a></div>

                <div class="hoverRed floatRight" onclick="LoggUt()"><a class="aHeader" href="#">Logg Ut</a></div>

            </div>

        </div>

    </div>
    `;
}


function ViewElevHeader() {
    document.getElementById('header').innerHTML = `
    <div class=headerWrap>

        <div class=headerTop>I is Header</div>

        <div class=headerBot>

            <div class="navBar">
                <div class="hoverRed"><a class="aHeader" href="index.html">Home</a></div>

                <div class="hoverRed"><a class="aHeader" href="#">item1</a></div>

                <div class="hoverRed"><a class="aHeader" href="#">item2</a></div>

                <div class="hoverRed"><a class="aHeader" href="#">item3</a></div>

                <div class="hoverRed"><a class="aHeader" href="#">item4</a></div>

                <div class="hoverRed floatRight" onclick="LoggUt()"><a  class="aHeader" href="#">Logg Ut</a></div>

            </div>

        </div>

    </div>
    `;
}

function ViewNoHeader() {
    document.getElementById('header').innerHTML = ``;
}
