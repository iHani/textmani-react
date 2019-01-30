import React from 'react';

export default function Options({generatorTab, setGeneratorTab}) {
  let {text = "", startWithLoremIpsum} = generatorTab;

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
                    // ref={startWithLoremIpsumRef}
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
  );
}
