import React from 'react';

export default function Remover({manipulatorTab, setManipulatorTab, handleOnChange}) {
  const {text, removeThis} = manipulatorTab;

  function removeSomething(){
    if (!text) {
      setManipulatorTab({ ...manipulatorTab, statusMessage: "No text to replace" });
    } else {
      if (!removeThis) {
        setManipulatorTab({ ...manipulatorTab, statusMessage: "What would you like to remove?" });
      } else {
        const replaced = text.split(removeThis).join('');
        let found = text.split(removeThis).length - 1;
        setManipulatorTab({ ...manipulatorTab, text: replaced, statusMessage: `Removed ${found} times` });
      }
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
            <button type="button" className="btn btn-warning" onClick={removeSomething}>remove</button>
            <button type="button" className="btn btn-warning">حذف المـد</button>
            <button type="button" className="btn btn-warning">حذف التشكيل</button>
          </div>
        </div>
      </div>
    </div>
  );
}
