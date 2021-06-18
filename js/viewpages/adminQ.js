function updateViewAdminQ() {
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
        <div class="container">
        <div class="calendar">
        <div class="front">
            <div class="current-date">
            <h1>Friday 15th</h1>
            <h1>January 2016</h1> 
            </div>

            <div class="current-month">
            <ul class="week-days">
                <li>MON</li>
                <li>TUE</li>
                <li>WED</li>
                <li>THU</li>
                <li>FRI</li>
                <li>SAT</li>
                <li>SUN</li>
            </ul>

            <div class="weeks">
                <div class="first">
                <span class="last-month">28</span>
                <span class="last-month">29</span>
                <span class="last-month">30</span>
                <span class="last-month">31</span>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                </div>

                <div class="second">
                <span>04</span>
                <span>05</span>
                <span class="event">06</span>
                <span>07</span>
                <span>08</span>
                <span>09</span>
                <span>10</span>
                </div>

                <div class="third">
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span class="active">15</span>
                <span>16</span>
                <span>17</span>
                </div>

                <div class="fourth">
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                </div>

                <div class="fifth">
                <span>25</span>
                <span>26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
                </div>
            </div>
            </div>
        </div>

        <div class="back">
            <input placeholder="What's the event?">
            <div class="info">
            <div class="date">
                <p class="info-date">
                Date: <span>Jan 15th, 2016</span>
                </p>
                <p class="info-time">
                Time: <span>6:35 PM</span>
                </p>
            </div>
            <div class="address">
                <p>
                Address: <span>129 W 81st St, New York, NY</span>
                </p>
            </div>
            <div class="observations">
                <p>
                Observations: <span>Be there 15 minutes earlier</span>
                </p>
            </div>
            </div>

            <div class="actions">
            <button class="save">
                Save <i class="ion-checkmark"></i>
            </button>
            <button class="dismiss">
                Dismiss <i class="ion-android-close"></i>
            </button>
            </div>
        </div>

        </div>
    </div>

    </div> 
    </div>



    
    
    <div id="makeQuestions">
        <div id="addQuestion">     
            <div id="addQuestionText">
                <p class="newQ" style="float:left; margin-left: 0.2vw;">Legg til spørsmål</p> 
                <p> <button id="addQuestionButton"> +</button> 
                </p> 
            </div>
        </div>

         <div id="qToModules" class="large">
            <div>Modul1
                <input class="checkbox" type="checkbox" checked />
            </div>
     

            
            <div>Modul2
                <input class="checkbox" type="checkbox" checked />
            </div>
      

            <div>Modul3
                <input  class="checkbox" type="checkbox" />
            </div>

            <br>

         
            
          

            <select  class="large">   
                <option unselected selected>Specifi Team</option>        
                <option value="1">Team1</option>
                <option value="2">Team2</option>
                <option value="3">Team3</option>      
            
            </select>

            <br>

            <select class="large" style="margin: auto; margin-bottom: 2vh;">   
            <option unselected selected>Specific Elev</option>        
            <option value="1">Elev1</option>
            <option value="2">Elev2</option>
            <option value="3">Elev3</option>      
        
        </select>




          

            <div>Team</div>
            
            <div>Elev</div>

            <div>Tall Rangering</div>
            
         
         </div>
    </div>








    

`;
document.getElementById('app').innerHTML = html;
}

