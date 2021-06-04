const model = {
    app: {
        currentPage: 'admindash',
    },
    inputs: {
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

        { name: 'Team 1', id: 12, parentId: 1 },
        { name: 'Team 2', id: 13, parentId: 1 },
        { name: 'Team 3', id: 14, parentId: 1 },
        { name: 'Team 4', id: 15, parentId: 1 },

        { name: 'Team 1', id: 4, parentId: 2 },
        { name: 'Team 2', id: 5, parentId: 2 },
        { name: 'Team 3', id: 6, parentId: 2 },
        { name: 'Team 4', id: 7, parentId: 2 },

        { name: 'Alexander', id: 8, parentId: 4, username: 'Alexander', password: 'hemmelig' },
        { name: 'Emil', id: 9, parentId: 4, username: 'Emil', password: 'hemmelig' },
        { name: 'Lina', id: 10, parentId: 4, username: 'Lina', password: 'hemmelig' },
        { name: 'Marius', id: 11, parentId: 4, username: 'Marius', password: 'hemmelig' },


    ],
    questions: [
        { text: 'Bra dag?', id: 1 },
        { text: 'What\'s up modul 2?', id: 2, entityId: 2 }, // course: 1
        { text: 'What\'s up modul Team 3 i modul 2?', id: 1, entityId: 3 }, // team: 1
        { text: 'What\'s up Lina?', id: 1, entityId: 6, date: '2021-05-10' }, // student: 1
    ],
    answers: [
        { test: 'Jo, takk -bra.', id: 1, questionId: 1, entityId: 6, teachersComment: 'Godt å høre!' },
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

function getChildren()
function getTopLevelEntities() {
    return model.entities.filter(e => e.parentId === null);
}