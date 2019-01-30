import React from 'react';

export default function StatusMessage(props) {
  const {langDetectorTab, setLangDetectorTab, textareaRef} = props;
  const {statusMessage} = langDetectorTab;

  function clearText() {
    setLangDetectorTab({ ...langDetectorTab, text: '', statusMessage: "Cleared"});
    textareaRef.current.focus();
  }

  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-8 text-center dotted">
          {statusMessage}
        </div>
        <div className="col-2 text-right">
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
