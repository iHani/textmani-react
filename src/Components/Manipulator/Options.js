import React, { useRef } from 'react';

export default function Options({manipulatorTab, setManipulatorTab}) {
  const {caseSensetive, regexEnabled} = manipulatorTab;
  const caseSensetiveRef = useRef();
  const regexEnabledRef = useRef();

  function toggleCheckbox({ target }) {
    const {id, defaultChecked} = target;
    const stat = defaultChecked ? "Disabled" : "Enabled";
    const option = id === "caseSensetive" ? "Case Sensetive " : id === "regexEnabled" ? "Regular Expression " : "";
    const status = option + stat;
    setManipulatorTab({ ...manipulatorTab, [id]: !defaultChecked, statusMessage: status });
  }
  
  return (
    <div className="container section">
      <div className="row">
        <div className="col-2 text-right">
          Options
        </div>
        <div className="col">
          <div className="row">
            <div className="col-3">
              <small className="form-text">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="caseSensetive"
                    defaultChecked={caseSensetive}
                    onClick={toggleCheckbox}
                    ref={caseSensetiveRef}
                    className="form-check-input"
                    />
                  <label className="form-check-label" htmlFor="caseSensetive">
                    Case sensetive
                  </label>
                </div>
              </small>
            </div>
            <div className="col-3">
              <small className="form-text">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="regexEnabled"
                    defaultChecked={regexEnabled}
                    onClick={toggleCheckbox}
                    ref={regexEnabledRef}
                    className="form-check-input"
                    />
                  <label className="form-check-label" htmlFor="regexEnabled">
                    Enable RegEx
                  </label>
                </div>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
