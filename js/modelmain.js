const model = {
    app: {
        currentpage: "mainsite",
    },
    
    mainPage: {
        inputs: {

        },

        tunings: [
            { name: 'E Standard', id: 1, tuning: true,},
            { name: 'Eb Standard', id: 2, },
            { name: 'D Standard', id: 3,},
        
        ],
        
  /*       chosenTuning: [
            {tuning: true, tuningid: 1,},
            {tuning: false, tuningid: 2,},
            {tuning: false, tuningid: 3,},
        ], */
    
    
    },

    scalesPage: {
        inputs:{
         scalename: '',
         scaletab: '',   

        },

        scales: [
            {scaleName: 'A', scaleTab: '1', id: 1,},
            {scaleName: 'B', scaleTab: '1', id: 2,},

        ],

    },


},      