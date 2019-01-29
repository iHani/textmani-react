import React, { useRef } from 'react';
import { generateLipsum } from '../../utils/functions';
import StatusMessage from './StatusMessage';
import TypeAndTimes from './TypeAndTimes';

export default function(props) {
  const {generatorTab, setGeneratorTab} = props;
  const {text, selectedType, selectedTimes} = generatorTab;
  const textareaRef = useRef();

  // handle onChange event handler for all input(s)
  function handleOnChange({ target }) {
    const { value, id } = target;
    setGeneratorTab({ ...generatorTab, [id]: value, statusMessage: "Ready" });
  }

  function handleGenerateText() {
    const lipsumText = generateLipsum(selectedType, selectedTimes);
    setGeneratorTab({ ...generatorTab, text: lipsumText, statusMessage: "Text generated" });
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
          placeholder="Lorem ipsum text will be generated here"
          ></textarea>
      </div>

      <StatusMessage textareaRef={textareaRef} {...props} />

      <TypeAndTimes generatorTab={generatorTab} setGeneratorTab={setGeneratorTab} handleOnChange={handleOnChange} />

      <div className="text-center mt-4">
        <div className="btn-group" role="group" aria-label="Change case">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleGenerateText}
            autoFocus
            > Generate text
          </button>
        </div>
      </div>
    </div>
  );
}
