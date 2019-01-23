import React from 'react';

export default function Scrambler(props) {

  return (
    <div className="container section">
      <div className="row">
        <div className="col-3 text-right">
          Scramble text
        </div>
        <div className="col">
          <div className="btn-group" role="group" aria-label="Scramble text">
            <button type="button" className="btn btn-danger">Scramble letters</button>
            <button type="button" className="btn btn-danger">Scramble words</button>
            <button type="button" className="btn btn-danger">Scramble sentences</button>
          </div>
        </div>
      </div>
    </div>
  );
}
