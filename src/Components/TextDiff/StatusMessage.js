import React from 'react';

export default function StatusMessage(props) {
  const {textDiffTab, setTextDiffTab} = props;
  const {statusMessage} = textDiffTab;

  function clearText() {
    setTextDiffTab({ ...textDiffTab, text1: '', text2: '', text1diff: '', text2diff: '', statusMessage: "Cleared"});
  }

  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-3">
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
