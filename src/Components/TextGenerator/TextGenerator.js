import React, { useRef } from 'react';
import { generateLipsum } from '../../utils/functions';
import StatusMessage from './StatusMessage';
import Options from './Options';
import TypeAndTimes from './TypeAndTimes';

export default function(props) {
  const {generatorTab, setGeneratorTab} = props;
  const {text, selectedType, selectedTimes, startWithLoremIpsum} = generatorTab;
  const textareaRef = useRef();

  // onChange event handler for all input(s)
  function handleOnChange({ target }) {
    const {value, id} = target;
    setGeneratorTab({ ...generatorTab, [id]: value, statusMessage: "Ready" });
  }

  function handleGenerateText(selectedType, selectedTimes) {
    let lipsumText = generateLipsum(selectedType, selectedTimes);

    if (startWithLoremIpsum) {
      if (lipsumText.substring(0,12).toLowerCase() !== "lorem ipsum ") {
        lipsumText = "Lorem ipsum " + lipsumText;
      }
    } else {
      if (lipsumText.substring(0,12).toLowerCase() === "lorem ipsum ") {
        lipsumText = lipsumText.slice(12);
      }
    }
    setGeneratorTab({ ...generatorTab, text: lipsumText, statusMessage: `${selectedTimes} ${selectedType} generated` });
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
          spellCheck="false"
          placeholder="Lorem ipsum text will be generated here"
          ></textarea>
      </div>

      <StatusMessage textareaRef={textareaRef} {...props} />

      <Options generatorTab={generatorTab} setGeneratorTab={setGeneratorTab}/>

      <TypeAndTimes generatorTab={generatorTab} setGeneratorTab={setGeneratorTab} handleOnChange={handleOnChange} />

      <div className="text-center mt-4">
        <div className="btn-group" role="group" aria-label="Change case">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => handleGenerateText(selectedType, selectedTimes)}
            autoFocus
            > Generate text
          </button>
        </div>
      </div>
    </div>
  );
}
