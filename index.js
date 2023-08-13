function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Dre"))

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
(introductionWithLanguage("Aki","Ember.js"))

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
(introductionWithLanguageOptional("Aki","Ember.js"))

