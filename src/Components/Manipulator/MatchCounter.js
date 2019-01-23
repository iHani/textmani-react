import React, { useEffect, useRef } from 'react';
import { countMatches } from '../../utils/functions';

export default function Replacer({manipulatorTab, setManipulatorTab, handleOnChange}) {
  const {text, matchString, caseSensetive, statusMessage} = manipulatorTab;
  const matches = countMatches(text, matchString, caseSensetive);
  const caseSensetiveRef = useRef();

  // useEffect(() => {
  //   console.log(caseSensetiveRef.current.id);
  // }, [caseSensetiveRef]);

  function handleThisOnChange({ target }) {
    const { value, id } = target;
    setManipulatorTab({ ...manipulatorTab, [id]: value });
  }

  function toggleCheckbox({ target }) {
    const found = countMatches(text, matchString, caseSensetive);
    const status = found ? `found ${found} matches` : `No matches.`;
    setManipulatorTab({ ...manipulatorTab, [target.id]: !caseSensetive});
  }

  return (
    <div className="container section">
      <div className="row">
        <div className="col-3 text-right">
          Count matches for
        </div>
        <div className="col-4">
          <input
            id="matchString"
            value={matchString}
            onChange={handleThisOnChange}
            type="text"
            className="form-control"
            aria-describedby="count words"
            />
          <small className="form-text text-muted">
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
        <div className="col text-left">
          {text.trim() && matchString.trim() &&
            <div className={`alert alert-${matches ? 'success' : 'danger'} m-0 p-2`} role="alert">
              {matches ?
                <span>Found <strong>{matches}</strong> matches</span>
                : <span>No matches found</span>
            }
          </div>}
        </div>
      </div>
    </div>
  );
}
