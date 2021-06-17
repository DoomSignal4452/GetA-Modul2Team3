
function LoggUt() {
    model.app.currentPage = "login";
    updateView();
}

function skrivElevNotes() {
    elevNotes.innerHTML = elevNotes.value;
}






function getValueFromSlider(){      
        let sliderValue = document.getElementById('myRange').value;
        document.getElementById('sliderUpdateDivText').innerHTML = sliderValue;    


    

}







/* var output = document.getElementById("demo"); */
/* output.innerHTML = slider.value;} */ // Display the default slider value

/* // Update the current slider value (each time you drag the slider handle)
/* slider.oninput = function() {
  output.innerHTML = this.value; */
 

//   <input 
//         id="sliderID"
//         type="range" 
//         min="1" 
//         max="10" 
//         value="1" 
//         oninput="getValues(this.value)"
//     />

    // <div id = "output"></div>

 

