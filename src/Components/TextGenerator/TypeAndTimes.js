import React, { useRef } from 'react';

export default function TypeAndTimes({generatorTab, setGeneratorTab}) {
  let {text, selectedType, selectedTimes, startWithLoremIpsum} = generatorTab;
  const availableTypes = ["words", "sentenctes", "paragraphes"];
  const availableTimes = [1, 3, 5, 10, 20, 50, 100, 250, 500];
  const startWithLoremIpsumRef = useRef();

  function handleClick(e) {
    let { value, id } = e.target;
    value = id === "selectedTimes" ? Number(value) : value;
    setGeneratorTab({ ...generatorTab, [id]: value, statusMessage: "Ready" });
  }

  function handleStartWithLoremIpsum(e, text) {
    const {id, defaultChecked} = e.target;
    if (defaultChecked) {
      if (text.substring(0,12).toLowerCase() === "lorem ipsum ") {
        text = text.slice(12);
      }
    } else {
      if (text.substring(0,12).toLowerCase() !== "lorem ipsum ") {
        text = "Lorem ipsum " + text;
      }
    }
    setGeneratorTab({
      ...generatorTab,
      [id]: !defaultChecked,
      text,
      statusMessage: "Ready"
    });
  }

  return (
    <div>
      <div className="container section">
        <div className="row">
          <div className="col-3 text-right">
            Options
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <small className="form-text">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="startWithLoremIpsum"
                      defaultChecked={startWithLoremIpsum}
                      onClick={(e) => handleStartWithLoremIpsum(e, text)}
                      ref={startWithLoremIpsumRef}
                      className="form-check-input"
                      />
                    <label className="form-check-label" htmlFor="startWithLoremIpsum">
                      Start with "Lorem ipsum "
                    </label>
                  </div>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="row">
          <div className="col-3 text-right">
            Type of text
          </div>
          <div className="col">
            <div className="btn-group" role="group" aria-label="Select type of text to generate">
              {availableTypes.map(type => (
                <button
                  id="selectedType"
                  key={type}
                  value={type}
                  type="button"
                  className={`btn btn-outline-success ${type === selectedType ? "active" : ""}`}
                  onClick={handleClick}
                  > {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="container section">
        <div className="row">
          <div className="col-3 text-right">
            How many times
          </div>
          <div className="col">
            <div className="btn-group" role="group" aria-label="Select how many times">
              {availableTimes.map(num => (
                <button
                  id="selectedTimes"
                  key={num}
                  value={num}
                  type="button"
                  className={`btn btn-outline-success ${num === Number(selectedTimes) ? "active" : ""}`}
                  onClick={handleClick}
                  > {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
