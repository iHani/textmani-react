import React from 'react';
import { countMatches } from '../../utils/functions';

export default function Replacer({manipulatorTab, setManipulatorTab, handleOnChange}) {
  const {text, matchString, caseSensetive, regexEnabled} = manipulatorTab;

  function handleMatchStringOnChange() {
    const matchingArgs = {
      text,
      matchString,
      caseSensetive,
      regexEnabled
    };
    const { error, found } = countMatches(matchingArgs);
    if (error) {
      setManipulatorTab({ ...manipulatorTab, statusMessage: error });
    } else {
      setManipulatorTab({ ...manipulatorTab, statusMessage: `Found ${found} matches` });
    }
  }

  return (
    <div className="container section">
      <div className="row">
        <div className="col-2 text-right">
          Count matches for
        </div>
        <div className="col-4">
          <input
            id="matchString"
            value={matchString}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            aria-describedby="count words"
            />
        </div>
        <div className="col">
          <div className="btn-group" role="group" aria-label="Remove something">
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleMatchStringOnChange}
              >count
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
