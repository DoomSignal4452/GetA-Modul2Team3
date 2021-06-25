const model = {
    app: {
        currentPage: 'admindash',
        currentLogInn: '',
    },
    inputs: {
        loggInPage: {
            UserName: '',
            Passord: '',
        },

        adminReadPage: {
            Comments: '',
        },
        adminQmodelPage: {
            lagSpm: '',
            datoForQ: '', //skal addes
            modulCheckbox: {
                modul1: '',
                modul2: '',
                modul3: '',
            },
            SpecificTeam: {
                CheckBox: false,
                TeamName: '',
            },
            SpecificElev: {
                CheckBox: false,
                ElevName: '',
            },
            SlideBarOrNot: false, //skal addes
        },
        otherPage: {
        }
    },
    /*
        courses: [
            {},
        ],
        teams: [
            {},
        ],
        students: [
            {},
        ],
    */
    entities: [
        // Main modules
        { name: 'Modul 1', id: 1, parentId: null },
        { name: 'Modul 2', id: 2, parentId: null },
        { name: 'Modul 3', id: 3, parentId: null },
        { name: 'GET IT', id: 4, parentId: null },
        { name: 'Lærere', id: 5, parentId: null },


        // Modul1
        { name: 'Team 1', id: 1001, parentId: 1 },
        { name: 'Team 2', id: 1002, parentId: 1 },
        { name: 'Team 3', id: 1003, parentId: 1 },
        { name: 'Team 4', id: 1004, parentId: 1 },
        

        // Modul2
        { name: 'Team 1', id: 1005, parentId: 2 },
        { name: 'Team 2', id: 1006, parentId: 2 },
        { name: 'Team 3', id: 1007, parentId: 2 },
        { name: 'Team 4', id: 1008, parentId: 2 },
        { name: 'Team 5', id: 1013, parentId: 2 },

        // Modul3
        { name: 'Team 1', id: 1009, parentId: 3 },
        { name: 'Team 2', id: 1010, parentId: 3 },
        { name: 'Team 3', id: 1011, parentId: 3 },
        { name: 'Team 4', id: 1012, parentId: 3 },


        // Teachers 
        { name: 'Linn', id: 2001, parentId: 5, username: 'Linn', password: 'hemmelig', isAdmin: true, },
        { name: 'Terje', id: 2002, parentId: 5, username: 'Terje', password: 'hemmelig', isAdmin: true, },
        { name: 'Joakim', id: 2003, parentId: 5, username: 'Joakim', password: 'hemmelig', isAdmin: true, },
        { name: 'Therese', id: 2004, parentId: 5, username: 'Therese', password: 'hemmelig', isAdmin: true, },
        { name: 'a', id: 2005, parentId: 5, username: 'a', password: 'a', isAdmin: true, },

        // Students
        { name: 'Alexander', id: 3001, parentId: 1001, username: 'Alexander', password: 'hemmelig' },
        { name: 'Emil', id: 3002, parentId: 1001, username: 'Emil', password: 'hemmelig' },
        { name: 'Lina', id: 3003, parentId: 1001, username: 'Lina', password: 'hemmelig' },
        { name: 'Marius', id: 3004, parentId: 1001, username: 'Marius', password: 'hemmelig' },
        { name: 'e', id: 3005, parentId: 1001, username: 'e', password: 'e' },

        { name: 'ElevT2M1', id: 3006, parentId: 1002, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT3M1', id: 3007, parentId: 1003, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT4M1', id: 3008, parentId: 1004, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT1M2', id: 3009, parentId: 1005, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT2M2', id: 3010, parentId: 1006, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT3M2', id: 3011, parentId: 1007, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT4M2', id: 3012, parentId: 1008, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT1M3', id: 3013, parentId: 1009, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT2M3', id: 3014, parentId: 1010, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT3M3', id: 3015, parentId: 1011, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT4M3', id: 3016, parentId: 1012, username: 'Marius', password: 'hemmelig' },

        { name: 'ElevT5M2', id: 3017, parentId: 1013, username: 'Marius', password: 'hemmelig' },

    ],
    questions: [
        { text: 'Bra dag?', slider: false, id: 1, parentId: 3002, date: '21.06.2021', },
        { text: 'Bra dag?', slider: false, id: 2, parentId: 1001, date: '', },
        { text: 'Bra dag?', slider: false, id: 3, parentId: 3, date: '', },


    ],
    answers: [
        { Elev: 'Alexander', test: 'Jo, takk -bra.', id: 1, questionId: 1, entityId: 6, teachersComment: 'Godt å høre!' },
        { Elev: 'Alexander', test: 'Jo, takk -bra.', id: 2, questionId: 2, entityId: 6, teachersComment: 'Godt å høre!' },
        { Elev: 'Alexander', test: 'Jo, takk -bra.', id: 3, questionId: 3, entityId: 6, teachersComment: 'Godt å høre!' },

        { Elev: 'Emil', test: 'Jo, takk -bra.', id: 4, questionId: 1, entityId: 6, teachersComment: 'Godt å høre!' },
        { Elev: 'Emil', test: 'Jo, takk -bra.', id: 5, questionId: 2, entityId: 6, teachersComment: 'Godt å høre!' },
        { Elev: 'Emil', test: 'Jo, takk -bra.', id: 6, questionId: 3, entityId: 6, teachersComment: 'Godt å høre!' },

        { Elev: 'Lina', test: 'Jo, takk -bra.', id: 7, questionId: 1, entityId: 6, teachersComment: 'Godt å høre!' },
        { Elev: 'Lina', test: 'Jo, takk -bra.', id: 8, questionId: 2, entityId: 6, teachersComment: 'Godt å høre!' },
        { Elev: 'Lina', test: 'Jo, takk -bra.', id: 9, questionId: 3, entityId: 6, teachersComment: 'Godt å høre!' },

        { Elev: 'Marius', test: 'Jo, takk -bra.', id: 10, questionId: 1, entityId: 6, teachersComment: 'Godt å høre!' },
        { Elev: 'Marius', test: 'Jo, takk -bra.', id: 11, questionId: 2, entityId: 6, teachersComment: 'Godt å høre!' },
        { Elev: 'Marius', test: 'Jo, takk -bra.', id: 12, questionId: 3, entityId: 6, teachersComment: 'Godt å høre!' },
    ],
};

//let questions = getQuestions(6, '2021-04-30');
function getQuestions(id, date) {
    const ids = getAllIdsForOneEntity(id);
    return model.questions.filter(q => !q.entityId || ids.includes(q.entityId));
}

function getAllIdsForOneEntity(id) {
    const ids = [];
    let entity = entityFromId(id);
    while (entity) {
        ids.push(entity.id);
        entity = entityFromId(entity.parentId);
    }
    return ids;
}

function entityFromId(id) {
    return model.entities.find(p => p.id == id);
    /*
    for (let e of model.entities) {
        if (e.id == id) return e;
    }
    return null;
    */
}

function isChildOf(childId, parentId) {
    let entity = entityFromId(childId);
    if (entity.parentId == parentId) return true;
    while (entity) {
        entity = entityFromId(entity.parentId);
        if (entity && entity.parentId == parentId) return true;
    }
    return false;
}

function getChildren(entity){
    return model.entities.filter(e => e.parentId === entity.id);
}

function getTopLevelEntities() {
    return model.entities.filter(e => e.parentId === null);
}