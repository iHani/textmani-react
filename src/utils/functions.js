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
      const flags = caseSensetive ? "g" : "ig";
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
        return ({ error: "Invalid RegExp expression." });
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

    if (!string.trim()) {
      return ({ error: "What would you like to remove?" });
    }

    if (string === "madd" || string === "tashkeel") {
      const madd = /ـ/, tashkeel = /[ًٌٍَُِّ‘’ْ]/;
      const type = string === "madd" ? madd : tashkeel;
      const replacedText = text.split(type).join("");
      const found = text.split(type).length - 1;
      return ({ replacedText, found });
    }

    if (string === "trim lines") {
      const lines = text.split(/\n/);
      let trimmedLines = [];
      for (var i = 0; i < lines.length; i++) {
        trimmedLines.push(lines[i].trim());
      }
      const found = text.split(/\n/).length - 1;
      const replacedText = trimmedLines.toString().split(",").join("\n");
      return ({ replacedText, found });
    }

    if (regexEnabled) {
      const flags = caseSensetive ? "g" : "ig";
      let reg = null;
      let found = 0;

      try {
        reg = new RegExp(string, flags);
        const regMatch = text.match(reg, flags);
        if (regMatch) {
          const replacedText = text.split(reg).join("");
          const found = regMatch.length;
          return ({ replacedText, found });
        }
        return ({ found });
      } catch (e) {
        return ({ error: "Invalid RegExp expression." });
      }
    } else {
      if (!caseSensetive) {
        text = text.toLowerCase();
        string = string.toLowerCase();
      }
      // count matches when regex is disabled by "split"ing it and count number of occurences
      const replacedText = text.split(string).join("");
      const found = text.split(string).length - 1;
      return ({ replacedText, found });
    }
  } else {
    return ({ error: "No text provided" });
  }
}


/**
* Replace string with another string.
* @function
* @param {object} args - The options object.
* @param {string} text - The text we want to perform matching against.
* @param {string} replaceThis - The string we want to count occurence for in text.
* @param {string} replacseWith - The string we want to count occurence for in text.
* @param {boolean} caseSensetive
* @param {boolean} regexEnabled
* @return {object} ({error, replacedText, found}) - Error message or number of matches, or replaced text with number of replaces
*/
export function replaceSomething(args){
  let {
    text = '',
    replaceThis = '',
    replacseWith = '',
    caseSensetive = false,
    regexEnabled = false
  } = args;
console.log(text);
  if (text.trim()) {
    if (regexEnabled) {
      const flags = caseSensetive ? "g" : "ig";
      let reg = null;

      try {
        reg = new RegExp(replaceThis, flags);
        if (text.match(reg, flags)) {
          const replacedText = text.split(reg).join(replacseWith);
          const found = text.split(replaceThis).length - 1;
          return ({ replacedText, found });
        }
        return ({ found: 0 });
      } catch (e) {
        return ({ error: "Invalid RegExp expression." });
      }
    } else {
      if (!caseSensetive) {
        text = text.toLowerCase();
        replaceThis = replaceThis.toLowerCase();
        replacseWith = replacseWith.toLowerCase();
      }
      const replacedText = text.split(replaceThis).join(replacseWith);
      const found = text.split(replaceThis).length - 1;
      return ({ replacedText, found });
    }
  } else {
    return ({ error: "No text to replace at." });
  }
}


/**
* Generate dummy text (lorem ipsum).
* @function
* @param {string} type - Either words, sentences, or paragraphs.
* @param {number} times - The number of "type" we want to generate.
* @return {string} The dummy text.
*/
export function generateLipsum(type, times) {
  const grandList = "sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipiscing velit sed quia non numquam do eius modi tempora incididunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint obcaecati cupiditate non-provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non-recusandae itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat";

  const grandWords = grandList.split(" ");
  const grandWordsLength = grandWords.length;

  // Generate random n words from grandList
  function genWords(n, capitalizeFirst = true) {
    let words = [], word;
    for (let i = 0; i < n; i++) {
      word = grandWords[randomBetween(0, grandWordsLength)];
      words.push(word);
    }
    words[0] = capitalizeFirst ? Capitalize(words[0]) : words[0];
    return words.join(" ");
  }

  // Generate random n sentences from grandList
  function genSentences(n) {
    const min = randomBetween(3, 6); // range of words in small sentences
    const max = randomBetween(6, 15); // range of words in long sentences
    let sentences = [], sentence, capitalizeFirst;
    for (let i = 0; i < n; i++) {
      capitalizeFirst = (i === 0); // flag capitalization for the first sentence.
      sentence = genWords(randomBetween(min, max), capitalizeFirst);
      sentences.push(sentence);
    }
    return sentences.join(", ") + ".";
  }

  // Generate random n sentences from grandList
  function genParagraphs(n) {
    const min = randomBetween(5, 8); // range of words in small paragraph
    const max = randomBetween(8, 15); // range of words in long paragraph
    let paragraphs = [], paragraph;
    for (let i = 0; i < n; i++) {
      paragraph = genSentences(randomBetween(min, max));
      paragraphs.push(paragraph);
    }
    return paragraphs.join("\n\n");
  }

  switch (type) {
    case "Words": return genWords(times);
    case "Sentences": return genSentences(times);
    case "Paragraphs": return genParagraphs(times);
    default:
    return
  }
}


/**
* Get a random number between two numbers.
* @function
* @param {number} min - Minimum number.
* @param {number} max - Maximum number.
* @return {number} Random number between min and max.
*/
export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}


/**
* Capitalize first letter of the string.
* @function
* @param {string} type - The text we want to capitalize.
* @return {string} The Capitalized text.
*/
export function Capitalize(string) {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
}


/**
* Check if localStorage is supported.
* @function
* @param {string} type - The text we want to capitalize.
* @return {string} The Capitalized text.
*/
export function localStorageAvailable() {
    try {
        var storage = window["localStorage"],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}


// Get default state values
export function getDefaultState() {
  const state = {
    localStorageIsAvailable: true,
    allTabs: ["Manipulate text", "Language detector", "Lorem ipsum Generator"],
    activeTab: "Manipulate text",
    manipulatorTab: {
      text: "",
      replaceThis: "",
      replacseWith: "",
      removeThis: "",
      matchString: "",
      caseSensetive: false,
      regexEnabled: false,
      statusMessage: "Ready"
    },
    langDetectorTab: {
      text: "",
      statusMessage: "Ready"
    },
    generatorTab: {
      selectedType: "Words",
      selectedTimes: 10,
      startWithLoremIpsum: false,
      statusMessage: "Ready"
    },
  }
  localStorage.setItem("textmani_state", JSON.stringify(state));
  return state;
}

export function getState() {
  if (localStorageAvailable()) {
    const state = localStorage.getItem("textmani_state");
    return state ? JSON.parse(state) : getDefaultState();
  }
};
