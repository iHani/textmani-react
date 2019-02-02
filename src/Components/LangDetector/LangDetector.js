import React, { useRef } from 'react';
import LanguageDetect from 'languagedetect';
import { Capitalize } from '../../utils/functions';
import StatusMessage from './StatusMessage';

const lngDetector = new LanguageDetect();

export default function(props) {
  const {langDetectorTab, setLangDetectorTab} = props;
  const {text} = langDetectorTab;
  const textareaRef = useRef();

  // onChange event handler for all input(s)
  function handleOnChange({ target }) {
    const { value, id } = target;
    setLangDetectorTab({ ...langDetectorTab, [id]: value, statusMessage: "Ready" });
  }

  function handleDetectLang() {
    if (text.trim()) {
      // get top 4 confidence results from lngDetector
      const detected = lngDetector.detect(text, 4);
      const status = detected.lenght ? `Language undetectable`
      : `Top guesses: ${detected.map(lang => Capitalize(lang[0])).join(", ")}`; //wtf is wrong with this ternary!
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
            onClick={() => handleDetectLang()}
            >Detect Language
          </button>
        </div>
      </div>
    </div>
  );
}
