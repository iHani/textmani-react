import React from 'react';
import { countWords, countChars } from '../../utils/functions';

export default function StatusMessage(props) {
  const {generatorTab, setGeneratorTab, textareaRef} = props;
  const {text, statusMessage} = generatorTab;

  function clearText() {
    setGeneratorTab({ ...generatorTab, text: '', statusMessage: "Cleared"});
    textareaRef.current.focus();
  }

  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-sm-6">
              <h6>
                words: {countWords(text)}
              </h6>
            </div>
            <div className="col-sm-6">
              <h6>
                chars: {countChars(text)}
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 text-center dotted">
          {statusMessage}
        </div>
        <div className="col-3 text-right">
          <div className="btn-group" role="group" aria-label="Clear">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={clearText}
              >Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
