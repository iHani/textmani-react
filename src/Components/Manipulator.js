import React, { useState, useEffect } from 'react';

export default function Manipulator(props) {
  const [text, setText] = useState();
  const [statusMessage, setStatusMessage] = useState('Type or paste text above to manipulate');
  const updateText = ({ target }) => {
    setText(target.value);
    setStatusMessage('Ready');
  }
  const clearText = () => setText('');
  const textarea = React.createRef();
  // console.log(textarea)

  useEffect(() => {
    textarea.current.focus();
    // if (!text.trim()) {
    //   setStatusMessage('Type or paste text above to manipulate');
    // }
  });

  return (
    <div>
      <div className="form-group">
        <textarea
          value={text}
          onChange={updateText}
          ref={textarea}
          className="form-control"
          rows="5"
          placeholder="..."
          autoFocus>
        </textarea>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-3">
            <div className="row">
              <div className="col-sm-6">
                <h6>
                  words: 8652
                </h6>
              </div>
              <div className="col-sm-6">
                <h6>
                  Chars: 12860
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 text-center dotted">
            {statusMessage}
          </div>

          <div className="col-3 text-right">
            <div className="btn-group" role="group" aria-label="Clear | Copy">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={clearText}
                >Clear
              </button>
              <button type="button" className="btn btn-secondary">Copy</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

// export default Manipulator;
