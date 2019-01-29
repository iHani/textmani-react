import React, { useRef } from 'react';
import LanguageDetect from 'languagedetect';
import StatusMessage from './StatusMessage';

const lngDetector = new LanguageDetect();

export default function(props) {
  const {langDetectorTab, setLangDetectorTab} = props;
  const {text} = langDetectorTab;
  const textareaRef = useRef();

  // handle onChange event handler for all input(s)
  function handleOnChange({ target }) {
    const { value, id } = target;
    setLangDetectorTab({ ...langDetectorTab, [id]: value, statusMessage: "Ready" });
  }

  function handleDetectLang(text) {
    if (text.trim()) {
      // get top 2 confidence results from lngDetector
      const detect = lngDetector.detect(text, 4);
      // lngDetector.detect returns arrays of an array of two values [<language>, <confidence score>]
      const mostLikely = detect[0] ? Capitalize(detect[0][0]) : null;
      const lessLikely = detect[1] ? Capitalize(detect[1][0]) : null;
      const status = mostLikely ?
      (<span>Most Likely <strong>{mostLikely}</strong>
      {lessLikely && <span>, or <strong>{lessLikely}</strong></span>}
    </span>)
    : "Language undetectable!";
    setLangDetectorTab({ ...langDetectorTab, statusMessage: status });
  } else {
    setLangDetectorTab({ ...langDetectorTab, statusMessage: "No text to detect language" });
  }
}

return (
  <div>
    <div className="form-group">
      <textarea
        id="text"
        value={text}
        onChange={handleOnChange}
        className="form-control"
        ref={textareaRef}
        rows="4"
        placeholder="Type or paste text here to detect the language"
        autoFocus>
      </textarea>
    </div>

    <StatusMessage textareaRef={textareaRef} {...props} />

    <div className="text-center mt-4">
      <div className="btn-group" role="group" aria-label="Change case">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleDetectLang(text)}
          >Detect Language
        </button>
      </div>
    </div>
  </div>
);
}

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
