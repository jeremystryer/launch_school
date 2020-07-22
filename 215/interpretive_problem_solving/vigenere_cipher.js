// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.
//
// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:
//
// plaintext: Pineapples don't go on pizzas!
// keyword: meat
//
// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal
//
// result: Bmnxmtpeqw dhz'x gh ar pbldal!
// Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.
//
// Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').
//
// For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

////////////////

// RULES
// input: 2 strings: text and keyword for shift
// output: text transformed according to keyword shift

// keyword for shift: value of each letter is index ('a' is 0, 'b' is 1, 'c' is 2, etc)
// keyword for shift is iterated through, so if input text is 5 letters and keyword for shift is 'meat', then tranformation will be based on 'meatm'
// only alphabetic letters are transformed. Punctuation, numbers, etc are preserved and returned as is.
// case of keyword is not sensitive
// length of returned string is same as input string (one for one conversion)
// preserve capitalization of input text

// STRATEGY
// keyword convert to number sequence --> 'meat' => [12, 4, 0, 19]
// iterate through this number sequence
// check if character in input text is letter
// applying each number to a corresponding letter in text --> add 12 to index of 'P', add 4 to index of 'i', etc
// index of 'P' is 15 --> 15 + 12 = 27 --> index of alphabet only goes up to 25, so add 2 to beginning of alphabet and gives 'b'

// convert keyword to an array of indices
// iterate through keyword and inner iteration through text
// if index of letter in text + index from keyword > 25, then continue counting from beginning of alphabet
// capitalization from input string: keep track of whether uppercase or lowercase

// ALGORITHM
// create a string containing alphabet 'abcdefghijklmnopqrstuvwxyz'
// convert keyword to array of indices based on alphabet string
//  let cipher = [...keyword].map(letter => alphabet.indexOf(letter.toLowerCase()))
// continually loop through shift array
// convert text string to array and map through array
// if char is not a letter (regex to check), then just return char
// else keep track of whether uppercase or lowercase using a var
// find index of lowercase version of letter from alphabet string
// add current iterating number in shift array to this index
// if resulting sum is greater than 25, then subtract 25 and just use remainder --> result % 25 gives index of new letter from alphabet
// retrieve letter based on index from alphabet string
// return this letter (either uppercase or lowercase depending on variable which is tracking)
// return array and join on empty string

function vigenereCipher(text, keyword) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let cipher = [...keyword].map(letter => alphabet.indexOf(letter.toLowerCase()));
  let cipherIndex = 0;
  let transformedText = '';

  for (let index = 0; index < text.length; index += 1) {
    let character = text[index];
    let characterValueInAlphabet = alphabet.indexOf(character.toLowerCase());

    if (cipherIndex > cipher.length - 1) {
      cipherIndex = 0;
    }

    if (characterValueInAlphabet === -1) {
      transformedText += character;
      continue;
    } else {

      let newCharacterValueInAlphabet = (cipher[cipherIndex] + characterValueInAlphabet) % 26;
      let newLetter = alphabet[newCharacterValueInAlphabet];
      isUpperCase(character) ? transformedText += newLetter.toUpperCase() : transformedText += newLetter;
    }

    cipherIndex += 1;
  }

  return transformedText;
}

function isUpperCase(char) {
  return /[A-Z]/.test(char);
}


console.log(vigenereCipher("Pineapples don't go on pizzas!", "meat") === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereCipher("Pineapples don't go on pizzas!", "MEAT") === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereCipher("Pineapples don't go on pizzas!", "mEaT") === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereCipher("Pineapples don't go on pizzas!", "A") === "Pineapples don't go on pizzas!");
console.log(vigenereCipher("Pineapples don't go on pizzas!", "Aa") === "Pineapples don't go on pizzas!");
console.log(vigenereCipher("Pineapples don't go on pizzas!", "cAb") === "Riogaqrlfu dpp't hq oo riabat!");
console.log(vigenereCipher("Dog", "Rabbit") === "Uoh");
