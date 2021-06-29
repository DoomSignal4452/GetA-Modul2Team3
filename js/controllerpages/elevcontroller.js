
function LoggUt() {
    model.app.currentPage = "login";
    updateView();
}

function skrivElevNotes() {
    elevNotes.innerHTML = elevNotes.value;
}

// function getQuestionsFromArray() 
//     {
//         let html = ``;
//             for (let i = 0; i < model.questions.length; i++) {
//               let option = model.questions[i].text;
//               let ansOption = model.answers[i].answer;

//               html += `
//                     <div id="Questions">
//                         <div id="Qheader">${option}</div>`;
//                  html += `<textarea id="Qcomment" placeholder="Admin comments her"></textarea>`;
            

//               html += getAnswersFromArray(i);

//                 html += '</div>';
//             }
//     return html;
//     }






function getAnswerFromArray(i) {
    let html = ``;  
    let ansOption = model.answers[i].answer;       
    
    html += `<div id="Qreply">${ansOption}</div>`;        
        
        return html;

    }



function getValueFromSlider(value) {
    let sliderValue = value;
    document.getElementById('sliderUpdateDivText').innerHTML = sliderValue;
}



//  let newA = {
//    text: "Hvordan har uken din gått?",
//    slider: false,
//    id: 4,
//    parentId: 3002,
//    date: "24.06.2021",
//  };

//  model.questions.unshift(newQuestion);



function getQuestionsFromArray() {
    let html = ``;
    for(let i = 0; i < model.questions.length; i++){
        let option = model.questions[i].text;
        html += `
        <div id="Questions">
            <div id="Qheader">${option}</div>
            <textarea id="Qreply${i}" class="questReply" onchange="addReply(this.value)">${model.inputs.ElevLogPage.ElevLog}</textarea>
        </div>
    `;
}
return html;
}

function addReply(val) {
for (i = 0; i < model.answers.length; i++) {
    model.inputs.ElevLogPage.ElevLog = val;

model.answers.unshift({
    answer: model.inputs.ElevLogPage.ElevLog,

    
}),
   alert("reply added successfully");
    updateViewElevLogg();
    return model.inputs.ElevLogPage.ElevLog = '';
}} 
 

/* function addReply(val) {
        model.inputs.ElevLogPage.ElevLog = val;
    
    model.answers.unshift({
        answer: model.inputs.ElevLogPage.ElevLog,
    
        
    }),
       alert("reply added successfully");
        updateViewElevLogg();
        return model.inputs.ElevLogPage.ElevLog = '';
    }  */

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

 

