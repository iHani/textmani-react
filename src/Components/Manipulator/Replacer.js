import React from 'react';
import { replaceSomething } from '../../utils/functions';

export default function Replacer({manipulatorTab, setManipulatorTab, handleOnChange}) {
  let {text, replaceThis, replacseWith, caseSensetive, regexEnabled} = manipulatorTab;

  function handleReplaceSomething(text, replaceThis, replacseWith) {
    if (!text) {
      setManipulatorTab({ ...manipulatorTab, statusMessage: "No text to replace" });
    } else {
      const replacingArgs = {
        text,
        replaceThis,
        replacseWith,
        caseSensetive,
        regexEnabled
      };
      const {error, replacedText, found} = replaceSomething(replacingArgs);
      if (error) {
        setManipulatorTab({ ...manipulatorTab, statusMessage: error });
      } else {
        setManipulatorTab({ ...manipulatorTab, text: replacedText, statusMessage: `Replaced ${found} times` });
      }
    }
  }

  return (
    <div className="container section">
      <div className="row">
        <div className="col-2 text-right">
          Replace
        </div>
        <div className="col-4 pb-1">
          <input
            id="replaceThis"
            value={replaceThis}
            onChange={handleOnChange}
            className="form-control"
            type="text"
            aria-describedby="replace text"
            />
        </div>
      </div>
      <div className="row">
        <div className="col-2 text-right">
          with
        </div>
        <div className="col-4">
          <input id="replacseWith" value={replacseWith} type="text" className="form-control" aria-describedby="replace with" onChange={handleOnChange}/>
        </div>
        <div className="col-1 text-right">
          <div className="text-left" aria-label="Replace">
            <button
              onClick={() => handleReplaceSomething(text, replaceThis, replacseWith)}
              type="button"
              className="btn btn-warning"
              >Replace</button>
          </div>
        </div>
      </div>
    </div>
  );
}
