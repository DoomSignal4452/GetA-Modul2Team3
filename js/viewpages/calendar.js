
function getCalendar(){
    let makeCalendar = `
        <div class="container">
            <div class="calendar">
                <div class="front">
                    <div class="current-date">
                        <h1>Monday 28th</h1>
                        <h1>June 2021</h1> 
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
                                <span class="last-month">31</span>
                                <span>01</span>
                                <span>02</span>
                                <span>03</span>
                                <span>04</span>
                                <span>05</span>
                                <span>06</span>
                            </div>

                            <div class="second">
                                <span>07</span>
                                <span>08</span>
                                <span>09</span>
                                <span>10</span>
                                <span>11</span>
                                <span>12</span>
                                <span>13</span>
                            </div>

                            <div class="third">
                                <span>14</span>
                                <span>15</span>
                                <span>16</span>
                                <span>17</span>
                                <span>18</span>
                                <span>19</span>
                                <span>20</span>
                            </div>

                            <div class="fourth">
                                <span>21</span>
                                <span>22</span>
                                <span>23</span>
                                <span>24</span>
                                <span>25</span>
                                <span>26</span>
                                <span>27</span>
                            </div>

                            <div class="fifth">
                                <span class="active">28</span>
                                <span>29</span>
                                <span>30</span>
                                <span class="last-month">01</span>
                                <span  class="last-month event">02</span>
                                <span  class="last-month">03</span>
                                <span  class="last-month">04</span>                
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
        </div>`;
    return makeCalendar;
}
