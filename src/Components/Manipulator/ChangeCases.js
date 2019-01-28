import React from 'react';

export default function ChangeCases(props) {

  function handleChangeCaseTo(type) {
    const {manipulatorTab, setManipulatorTab} = props;
    const {text} = manipulatorTab;
    let updated;
    switch (type) {
      case 'lower':
      updated = text.toLowerCase();
      setManipulatorTab({ ...manipulatorTab, text: updated });
      break;
      case 'upper':
      updated = text.toUpperCase();
      setManipulatorTab({ ...manipulatorTab, text: updated });
      break;
      default:
    }
  }

  return (
    <div className="container section">
      <div className="row">
        <div className="col-2 text-right">
          Change case
        </div>
        <div className="col">
          <div className="btn-group" role="group" aria-label="Change case">
            <button type="button" className="btn btn-primary" onClick={() => handleChangeCaseTo('lower')}>lowercase</button>
            <button type="button" className="btn btn-primary" onClick={() => handleChangeCaseTo('upper')}>UPPERCASE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
