// Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.
//
// Build a madlibs program that takes a text template as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.
//
// The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text template. Choose the right way to structure your template and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining.
//
// Examples:
//
// Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the madlibs function that puts them in.


// RULES
// input: a template (which might be a sstring)
// output: same data structure as input, with certains words replaced by madlibs function
// madlibs function contains lists of adjectives, nouns, verbs, adverbs

// ALGORITHM
// create 2 templates, each a string
  // TEMPLATE 1
    //  The "adjective" brown "noun" "noisily"
    // "verb" the "adjectivey" yellow
    // "noun", who "adverb" "verb" his
    // "noun" and looks around.
  // TEMPLATE 2
    // The "noun" "verb" the "noun"'s "noun".
// These templates live outside of the function
// create 4 arrays named adjectives, nouns, verbs, adverbs
//  each array contains series of words that are either adjectives, nouns, etc respectively
// template string is passed into function
// split string into array of words
// map through array
//  if word is adjective, replace with random adjective from adjectives array
//  if word, is adverb, etc.
//  use regex to match, since word could include punctuation or be part of another word
// join returned array into string and return it

let template1 = "The <adjective> brown <noun> noisily <verb> the <adjective> yellow <noun>, who <adverb> <verb> his <noun> and looks around."
let template2 =  "The <noun> <verb> the <noun>'s <noun>."

function madlibs(template) {
  const ADJECTIVES = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  const NOUNS = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  const VERBS = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  const ADVERBS = ['easily', 'lazily', 'noisily', 'excitedly'];

  while (template.match(/<\w+>/)) {
    template = template.replace(/\<adjective>/i, selectRandom(ADJECTIVES));
    template = template.replace(/\<noun>/i, selectRandom(NOUNS));
    template = template.replace(/\<verb>/i, selectRandom(VERBS));
    template = template.replace(/\<adverb>/i, selectRandom(ADVERBS));
  }

  return template;
}

function selectRandom(words) {
  return words[Math.floor(Math.random() * words.length)];
}

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
