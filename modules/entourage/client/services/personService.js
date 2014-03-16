"use strict";

module.exports = function () {
    return {
        getCaption: function (name) {
            return captions[name];
        },
        getFullName: function (name) {
            return names[name];
        },
        getRelationship: function (name) {
            return relationships[name];
        }
    };
};

var captions = {
    gabriel: "What rhymes with mellon?",
    jason: "All the girls wanna hug me... what rhymes with hug me.",
    joel: "All the bitches be up in my apartment",
    nicholas: "I used to date a fat crazy girl",
    adrienne: "Daddy...why are there mean people?",
    geraldine: "Nothing to say about me.",
    rianne: "This flying carpet is awesome",
    sue: "hmmp...wheres my white belt."
};
var names = {
    gabriel: "GABRIEL POSSIN",
    jason: "JASON PERKINS",
    joel: "JOEL BASS",
    nicholas: "NICHOLAS IRVING",
    adrienne: "ADRIENNE DEIPARINE",
    geraldine: "GERALDINE MAE CUEVA",
    rianne: "RIANNE DEIPARINE",
    sue: "SUEJEAN CHOI"
};
var relationships = {
    gabriel: "FRIEND FROM IL",
    jason: "FRIEND FROM IL",
    joel: "FRIEND FROM NYC",
    nicholas: "FRIEND FROM NYC",
    adrienne: "SISTER",
    geraldine: "CHILDHOOD FRIEND",
    rianne: "SISTER",
    sue: "CHILDHOOD FRIEND"
};