import React, { useState, useEffect, useRef } from 'react';

export default function Manipulator(props) {
  const {text = '', handleChangeText, stringCounts, countMatchesString, setCountMatchesString} = props;
  const [statusMessage, setStatusMessage] = useState('Ready');
  // const textarea = React.createRef();
  const textarea = useRef();

  useEffect(() => {
    if (!text.trim()) {
      handleChangeText('');
      setStatusMessage('Ready');

    }
  }, [text]);

  function clearText() {
    handleChangeText('');
    textarea.current.focus();
  }

  function handleOnChange(e) {
    const text = e.target.value;
    handleChangeText(text);
    setStatusMessage('Ready');
  }

  function handleMatchingCounter(text) {
    // console.log(handleMatchingCounter)
    const found = 55;
    setStatusMessage(`Found ${found} matches.`);

  }

  return (
    <div>
      <div className="container mb-2">
        <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="col-sm-6">
                <h6>
                  words: {stringCounts.words}
                </h6>
              </div>
              <div className="col-sm-6">
                <h6>
                  chars: {stringCounts.chars}
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
                value={countMatchesString}
                >Clear
              </button>
              <button type="button" className="btn btn-secondary">Copy</button>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          ref={textarea}
          rows="4"
          placeholder="Type or paste text here to manipulate"
          autoFocus>
        </textarea>
      </div>

      <div className="container section">
        <div className="row">
          <div className="col-3 text-right">
            Change case
          </div>
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">lowercase</button>
              <button type="button" className="btn btn-primary">UPPERCASE</button>
              <button type="button" className="btn btn-primary">Capitalized Case</button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container section">
        <div className="row">
          <div className="col-3 text-right">
            Replace
          </div>
          <div className="col-4 pb-1">
            <input type="text" className="form-control" aria-describedby="replace text"
              onChange={e => handleMatchingCounter(e.target.value)} />
          </div>
        </div>
        <div className="row">
          <div className="col-3 text-right">
            with
          </div>
          <div className="col-4">
            <input type="text" className="form-control" aria-describedby="replace with"
              onChange={e => handleMatchingCounter(e.target.value)} />
          </div>
          <div className="col-1 text-right">
            <div className="text-left" aria-label="Replace">
              <button type="button" className="btn btn-warning">Replace</button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container section">
        <div className="row">
          <div className="col-3 text-right">
            Remove
          </div>
          <div className="col-4 pb-1">
            <input type="text" className="form-control" aria-describedby="replace text"
              onChange={e => handleMatchingCounter(e.target.value)} />
          </div>
          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-warning">remove</button>
              <button type="button" className="btn btn-warning">ازالة المـد</button>
              <button type="button" className="btn btn-warning">إزالة التشكيل</button>
            </div>
          </div>

        </div>

      </div>

      <hr />

      <div className="container section">
        <div className="row">
          <div className="col-3 text-right">
            Count matches for
          </div>
          <div className="col-4">
            <input type="text" className="form-control" aria-describedby="count words"
              onChange={e => handleMatchingCounter(e.target.value)} />
          </div>
          <div className="col text-left">
            <div class="alert alert-success m-0 p-2" role="alert">
              Found 54 matches
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container section">
        <div className="row">
          <div className="col-3 text-right">
            Scramble text
          </div>

          <div className="col">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-danger">Scramble letters</button>
              <button type="button" className="btn btn-danger">Scramble words</button>
              <button type="button" className="btn btn-danger">Scramble sentences</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
