/**
* Counts words in Arabis and English in the provided string.
* @function
* @param {string} text - The text we want to count its words.
* @return {number} The total number of Arabic and English words in text.
*/
export function countWords(text = '') {
  if (text.trim()) {
    let ar = 0, en = 0;
    if (text.match(/\S/g)) {
      //Arabic words
      let arRegex = /[\u0600-\u06FF]+/g;
      if (arRegex.test(text)) { ar = text.match(arRegex).length }
      //English words
      let enRegex = /\w+/g;
      if (enRegex.test(text)) { en = text.match(enRegex).length }
      return ar + en
    } else { return 0 }
  }  else { return 0 }
}

/**
* Counts characters in the provided string.
* @function
* @param {string} text - The text we want to count its words.
* @return {number} The total number of characters in text.
*/
export function countChars(text) {
  return text ? text.length : 0;
}

/**
* Counts number of matches of a string in another string, with or without Case sensetivity/Regular expressions.
* @function
* @param {object} args - The options object.
* @param {string} text - The text we want to perform matching against.
* @param {string} matchString - The string we want to count occurence for in text.
* @param {boolean} caseSensetive
* @param {boolean} regexEnabled
* @return {object} ({error, found}) - Error message or number of matches.
*/
export function countMatches(args){
  let {
    text = '',
    matchString = '',
    caseSensetive = false,
    regexEnabled = false
  } = args;

  if (text.trim()) {
    if (regexEnabled) {
      const flags = caseSensetive ? "g" : "ig"
      let reg = null;
      let found = 0;

      try {
        reg = new RegExp(matchString, flags);
        if (text.match(reg, flags)) {
          found = text.match(reg, flags).length;
          return ({ found });
        }
        return ({ found });
      } catch (e) {
        return ({ error: "Invalid Regex expression." });
      }
    } else {
      if (!caseSensetive) {
        text = text.toLowerCase();
        matchString = matchString.toLowerCase();
      }
      // count matches when regex is disabled by "split"ing it and count number of occurences
      const found = text.split(matchString).length - 1;
      return ({ found });
    }
  } else {
    return ({ error: "No text to count matches against." });
  }
}

/**
* Remove a string from anther string.
* @function
* @param {object} args - The options object.
* @param {string} text - The text we want to perform matching against.
* @param {string} string - The string we want to count occurence for in text.
* @param {boolean} caseSensetive
* @param {boolean} regexEnabled
* @return {object} ({error, replacedText, found}) - Error message or the replaced text with total number of removes.
*/
export function removeSomething(args){
  let {
    text = '',
    string = '',
    caseSensetive = false,
    regexEnabled = false
  } = args;


  if (text.trim()) {

    if (string === "madd" || string === "tashkeel") {
      const madd = /ـ/, tashkeel = /[ًٌٍَُِّ‘’ْ]/;
      const type = string === "madd" ? madd : tashkeel;
      const replacedText = text.split(type).join("");
      const found = text.split(type).length - 1
      return ({ replacedText, found });
    }

    if (regexEnabled) {
      const flags = caseSensetive ? "g" : "ig"
      let reg = null;
      let found = 0;

      try {
        reg = new RegExp(string, flags);
        const regMatch = text.match(reg, flags);
        if (regMatch) {
          const replacedText = text.split(reg).join("");
          const found = regMatch.length;
          return ({ replacedText, found })
        }
        return ({ found });
      } catch (e) {
        return ({ error: "Invalid Regex expression." });
      }
    } else {
      if (!caseSensetive) {
        text = text.toLowerCase();
        string = string.toLowerCase();
      }
      // count matches when regex is disabled by "split"ing it and count number of occurences
      const replacedText = text.split(string).join("");
      const found = text.split(string).length - 1;
      return ({ replacedText, found })
    }
  } else {
    return ({ error: "No text to count matches against." });
  }
}
