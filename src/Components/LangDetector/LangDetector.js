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

  function handleDetectLang({ target }) {
    const { value, id } = target;
    // get top 2 confidence from lngDetector results
    const detect = lngDetector.detect(text, 2);
    // lngDetector.detect returns arrays of an array of two values [<language>, <confidence score>]
    const mostLikely = Capitalize(detect[0][0]);
    const lessLikely = Capitalize(detect[1][0]);
    const status = <span>Most likely <strong>{mostLikely}</strong> - Less likely <strong>{lessLikely}</strong></span>;

    setLangDetectorTab({ ...langDetectorTab, [id]: value, statusMessage: status });
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
        <button type="button" className="btn btn-primary" onClick={handleDetectLang}>Detect Language</button>
      </div>
    </div>
  </div>
  );
}

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
