
function LoggUt() {
    model.app.currentPage = "login";
    updateView();
}

function skrivElevNotes() {
    elevNotes.innerHTML = elevNotes.value;
}






function getQuestionsFromArray() {
    let html = ``;
    for(let i = 0; i < model.questions.length; i++){
        let option = model.questions[i].text;
        html += `
    <div id="Questions">
        <div id="Qheader">${option}</div>
        <textarea id="Qreply"></textarea>
    </div>

    `;
}
return html;
}




/* function getQuestionsFromArray() {
    for(let i = 0; i < model.questions.length; i++){
        let html = ``;
        let option = model.questions[i].text;
        html += ` ${option}
    <div id="Questions">
        <div id="Qheader">${option}</div>
        <textarea id="Qreply"></textarea>
    </div>

    `;
  return html
}
}
 */



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

 

