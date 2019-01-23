
export function countWords(text = '') {
  if (text.trim()) {
    let ar = 0, en = 0;
    if (text.match(/\S/g)) {
      //Arabic words
      let arRegex = /[\u0600-\u06FF]+/g
      if (arRegex.test(text)) { ar = text.match(arRegex).length }
      //English words
      let enRegex = /\w+/g
      if (enRegex.test(text)) { en = text.match(enRegex).length }
      return ar + en
    } else { return 0 }
  }  else { return 0 }
}

export function countChars(text) {
  return text ? text.length : 0;
}


export function countMatches(text, string, caseSensetive){
  // /\d{4}/
    const flags = !caseSensetive ? "ig" : "g"
  try {
    const reg = new RegExp(string, flags);
    const found = text.match(reg)
    return found ? found.length : 0
  } catch (e) {
    console.log("Error: invalid regular expression", string);
  }
}
