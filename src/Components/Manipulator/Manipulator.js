import React, { useRef } from 'react';
import CountersStatusClearCopy from './CountersStatusClearCopy';
import Options from './Options';
import Replacer from './Replacer';
import Remover from './Remover';
import MatchCounter from './MatchCounter';
import ChangeCases from './ChangeCases';
// import Scrambler from './Scrambler';

export default function(props) {
  const {manipulatorTab, setManipulatorTab} = props;
  const {text} = manipulatorTab;
  const textareaRef = useRef();

  // onChange event handler for all input(s)
  function handleOnChange({ target }) {
    const { value, id } = target;
    setManipulatorTab({ ...manipulatorTab, [id]: value, statusMessage: "Ready" });
  }

  return (
    <div>
      <div className="form-group">
        <textarea
          id="text"
          value={text}
          onChange={handleOnChange}
          className="form-control"
          ref={textareaRef}
          rows="4"
          placeholder="Type or paste text here to manipulate"
          autoFocus>
        </textarea>
      </div>
      <CountersStatusClearCopy textareaRef={textareaRef} {...props} />
      <Options {...props} />
      <Replacer handleOnChange={handleOnChange} {...props} />
      <hr />
      <Remover handleOnChange={handleOnChange} {...props} />
      <hr />
      <MatchCounter handleOnChange={handleOnChange} {...props} />
      <hr />
      <ChangeCases {...props} />
      {/*
      <hr />
      <Scrambler {...props} />
      */}
    </div>
  );
}
