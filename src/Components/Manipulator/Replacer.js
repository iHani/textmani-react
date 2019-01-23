import React from 'react';

export default function Replacer({manipulatorTab, setManipulatorTab, handleOnChange}) {
  const {text, replaceThis, replacseWith} = manipulatorTab;

  function replaceSomething(){
    if (!text) {
      setManipulatorTab({ ...manipulatorTab, statusMessage: "No text to replace" });
    } else {
      if (!replaceThis || !replacseWith) {
        setManipulatorTab({ ...manipulatorTab, statusMessage: "What would you like to replace?" });
      } else {
        const replaced = text.split(replaceThis).join(replacseWith)
        let found = text.split(replaceThis).length - 1
        setManipulatorTab({ ...manipulatorTab, text: replaced, statusMessage: `Replaced ${found} times` });
      }
    }
  }

  return (
    <div className="container section">
      <div className="row">
        <div className="col-3 text-right">
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
        <div className="col-3 text-right">
          with
        </div>
        <div className="col-4">
          <input id="replacseWith" value={replacseWith} type="text" className="form-control" aria-describedby="replace with" onChange={handleOnChange}/>
        </div>
        <div className="col-1 text-right">
          <div className="text-left" aria-label="Replace">
            <button
              onClick={replaceSomething}
              type="button"
              className="btn btn-warning"
              >Replace</button>
          </div>
        </div>
      </div>
    </div>
  );
}