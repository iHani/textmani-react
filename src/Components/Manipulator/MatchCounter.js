import React, { useRef } from 'react';
import { countMatches } from '../../utils/functions';

export default function Replacer({manipulatorTab, setManipulatorTab, handleOnChange}) {
  const {text, matchString, caseSensetive, regexEnabled} = manipulatorTab;

  function handleMatchStringOnChange(e) {
    const { value, id } = e.target;
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
        <div className="col-3 text-right">
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
          {/*text.trim() && matchString.trim() &&
            <div className={`alert alert-${matches ? 'success' : 'danger'} m-0 p-2`} role="alert">
            {matches ?
            <span>Found <strong>{matches}</strong> matches</span>
            : <span>No matches found</span>
            }
            </div>*/}
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
