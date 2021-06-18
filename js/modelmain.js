const model = {
    app: {
        currentPage: 'adminQ',
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
                modul1: false,
                modul2: true,
                modul3: false,
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
        { name: 'Modul 1', id: 1, parentId: null },
        { name: 'Modul 2', id: 2, parentId: null },
        { name: 'Modul 3', id: 3, parentId: null },
        { name: 'GET IT', id: 4, parentId: null },
        { name: 'Lærere', id: 5, parentId: null },

        { name: 'Team 1', id: 1001, parentId: 1 },
        { name: 'Team 2', id: 1002, parentId: 1 },
        { name: 'Team 3', id: 1003, parentId: 1 },
        { name: 'Team 4', id: 1004, parentId: 1 },

        { name: 'Team 1', id: 1005, parentId: 2 },
        { name: 'Team 2', id: 1006, parentId: 2 },
        { name: 'Team 3', id: 1007, parentId: 2 },
        { name: 'Team 4', id: 1008, parentId: 2 },

        { name: 'Team 1', id: 1009, parentId: 3 },
        { name: 'Team 2', id: 1010, parentId: 3 },
        { name: 'Team 3', id: 1011, parentId: 3 },
        { name: 'Team 4', id: 1012, parentId: 3 },

        { name: 'Linn', id: 2001, parentId: 5, username: 'Linn', password: 'hemmelig', isAdmin: true, },
        { name: 'Terje', id: 2002, parentId: 5, username: 'Terje', password: 'hemmelig', isAdmin: true, },
        { name: 'Joakim', id: 2003, parentId: 5, username: 'Joakim', password: 'hemmelig', isAdmin: true, },
        { name: 'Therese', id: 2004, parentId: 5, username: 'Therese', password: 'hemmelig', isAdmin: true, },
        { name: 'a', id: 2005, parentId: 5, username: 'a', password: 'a', isAdmin: true, },

        { name: 'Alexander', id: 3001, parentId: 1001, username: 'Alexander', password: 'hemmelig' },
        { name: 'Emil', id: 3002, parentId: 1001, username: 'Emil', password: 'hemmelig' },
        { name: 'Lina', id: 3003, parentId: 1001, username: 'Lina', password: 'hemmelig' },
        { name: 'Marius', id: 3004, parentId: 1001, username: 'Marius', password: 'hemmelig' },
        { name: 'e', id: 3005, parentId: 1001, username: 'e', password: 'e' },

    ],
    questions: [
        { text: 'Bra dag?', id: 1 },
        { text: 'What\'s up modul 2?', id: 2, entityId: 2 }, // course: 1
        { text: 'What\'s up modul Team 3 i modul 2?', id: 1, entityId: 3 }, // team: 1
        { text: 'What\'s up Lina?', id: 1, entityId: 6, date: '2021-05-10' }, // student: 1
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