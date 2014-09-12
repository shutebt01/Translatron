
// Defines Tenses
var pastImperfectTense = "pastImperfect";
var presentTense = "present";

//Defines Pronouns
var i = "yo";
var you = "tu";
var it = "ello";

var conjugations = [];

function Conjugation(suffix, replacement, tense, pronoun) {
  this.suffix = suffix;
  this.replacement = replacement;
  this.tense = tense;
  this.pronoun = pronoun;
}

/**
* TODO Make work
*/
function conjugate(word, tense, pronoun) {
  //var wordLessSuffix = word.substring(0, word.lenth - 2);
  //var suffix = word.substring(word.lenth - 2, word.lenth)
  //return 
}
