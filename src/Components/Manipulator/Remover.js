import React from 'react';
import { removeSomething } from '../../utils/functions';

export default function Remover({manipulatorTab, setManipulatorTab, handleOnChange}) {
  const {text, removeThis, caseSensetive, regexEnabled} = manipulatorTab;
  const madd = /ـ/;
  const tashkeel = /[ًٌٍَُِّ‘’ْ]/;

  function handleRemoveSomething(string) {
    const removeArgs = {
      text,
      string,
      caseSensetive,
      regexEnabled
    }
    const { error, replacedText, found } = removeSomething(removeArgs);
    if (error) {
      setManipulatorTab({ ...manipulatorTab, statusMessage: error })
    } else {
      setManipulatorTab({ ...manipulatorTab, text: replacedText, statusMessage: `Removed ${found} times` });
    }
  }

  return (
    <div className="container section">
      <div className="row">
        <div className="col-3 text-right">
          Remove
        </div>
        <div className="col-4 pb-1">
          <input
            id="removeThis"
            value={removeThis}
            onChange={handleOnChange}
            type="text"
            className="form-control"
            aria-describedby="remove text"
            />
        </div>
        <div className="col">
          <div className="btn-group" role="group" aria-label="Remove something">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => handleRemoveSomething(removeThis)}
              >remove
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => handleRemoveSomething(madd)}
              >حذف المــد
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => handleRemoveSomething(tashkeel)}
              >حذف التشكيل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
