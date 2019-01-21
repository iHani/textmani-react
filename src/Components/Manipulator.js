import React, { useState, useEffect } from 'react';

export default function Manipulator(props) {
  const {text, handleChangeText} = props;
  const [statusMessage, setStatusMessage] = useState('Type or paste text above to manipulate');
  const [words, setWords] = useState(0);
  const [chars, setChars] = useState(0);
  const textarea = React.createRef();

  useEffect(() => {
    textarea.current.focus();
  });

  function clearText() {
    handleChangeText('');
    setWords(0);
    setChars(0);
  }

  function countWords(text){
    if (text.trim()) {
      let ar = 0, en = 0;
      if (text.match(/\S/g)) {
        //Arabic words
        let pta = /[\u0600-\u06FF]+/g
        if (pta.test(text)) { ar = text.match(pta).length }
        //English words
        let pte = /\w+/g
        if (pte.test(text)) { en = text.match(pte).length }
        return ar + en
      } else { return 0 }
    }  else { return 0 }
  }

  function countChars(text){
    return text.length;
  }

  const handleOnChange = (e) => {
    const text = e.target.value;
    handleChangeText(text);
    setWords(countWords(text));
    setChars(countChars(text));
  }

  return (
    <div>
      <div className="form-group">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          ref={textarea}
          rows="5"
          placeholder="..."
          autoFocus>
        </textarea>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-3">
            <div className="row">
              <div className="col-sm-6">
                <h6>
                  words: {words}
                </h6>
              </div>
              <div className="col-sm-6">
                <h6>
                  chars: {chars}
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 text-center dotted">
            {statusMessage}
          </div>

          <div className="col-3 text-right">
            <div className="btn-group" role="group" aria-label="Clear | Copy">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={clearText}
                >Clear
              </button>
              <button type="button" className="btn btn-secondary">Copy</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
