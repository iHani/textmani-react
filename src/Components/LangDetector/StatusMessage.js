import React from 'react';

export default function StatusMessage(props) {
  const {langDetectorTab, setLangDetectorTab, textareaRef} = props;
  const {statusMessage} = langDetectorTab;

  function clearText() {
    setLangDetectorTab({ ...langDetectorTab, text: '', statusMessage: "Cleared"});
    textareaRef.current.focus();
  }

  const Bars = () => (
    <div className="pt-2">

      <div className="row pb-2">
        <div className="col-3 text-right">Language</div>
        <div className="col">
          confidence
        </div>
      </div>


      <div className="row">
        <div className="col-3 text-right"><strong>English</strong></div>
        <div className="col">
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">%100</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3 text-right"><strong>Arabish</strong></div>
        <div className="col">
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">%75</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3 text-right"><strong>Banglabish</strong></div>
        <div className="col">
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">%60</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3 text-right"><strong>Irish</strong></div>
        <div className="col">
          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">%15</div>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <div className="container mb-2">
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-8 text-center dotted">
          {/*<Bars />*/} 
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
