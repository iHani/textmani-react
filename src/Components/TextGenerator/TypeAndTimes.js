import React from 'react';

export default function TypeAndTimes({generatorTab, setGeneratorTab}) {
  const {selectedType, selectedTimes} = generatorTab;
  const availableTypes = ["Words", "Sentences", "Paragraphs"];
  const availableTimes = [1, 3, 5, 10, 20, 50, 100, 250, 500];

  function handleClick(e) {
    let { value, id } = e.target;
    value = id === "selectedTimes" ? Number(value) : value;
    setGeneratorTab({ ...generatorTab, [id]: value, statusMessage: "Ready" });
  }

  return (
    <div>
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
