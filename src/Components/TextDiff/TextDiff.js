import React from 'react';
import Diff from 'text-diff';
import ReactHtmlParser from 'react-html-parser';
import StatusMessage from './StatusMessage';

const diff = new Diff();

export default function(props) {
  const {textDiffTab, setTextDiffTab} = props;
  let {text1, text2, text1diff, text2diff} = textDiffTab;

  // onChange event handler for all input(s)
  function handleOnChange({ target }) {
    const {value, id} = target;
    setTextDiffTab({ ...textDiffTab, [id]: value, statusMessage: "Ready" });
  }

  function handleTextDiff(text1, text2) {
    if (text1.trim() && text2.trim()) {
      const text1Diff = diff.main(text1, text2);
      const text2Diff = diff.main(text2, text1);
      text1diff = diff.prettyHtml(text1Diff);
      text2diff = diff.prettyHtml(text2Diff);
      const foundDiffs = diff.levenshtein(text1Diff);
      const status = foundDiffs ? `Found ${foundDiffs} diffs` : "Texts are identical";

      setTextDiffTab({
        ...textDiffTab,
        text1diff,
        text2diff,
        statusMessage: status });
      } else {
        setTextDiffTab({
          ...textDiffTab,
          statusMessage: "Fill out Text 1 and Text 2 to check for diffs" });
        }
      }

      return (
        <div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <textarea
                  id="text1"
                  value={text1}
                  onChange={handleOnChange}
                  className="form-control"
                  rows="4"
                  spellCheck="false"
                  placeholder="Text 1">
                </textarea>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <textarea
                  id="text2"
                  value={text2}
                  onChange={handleOnChange}
                  className="form-control"
                  rows="4"
                  spellCheck="false"
                  placeholder="Text 2">
                </textarea>
              </div>
            </div>
          </div>

          <StatusMessage {...props} />

          {text1diff.trim() && text2diff.trim() &&
            <div className="row">
              <div className="col-sm-6">
                <div className="txtdiff">
                  {ReactHtmlParser(text1diff)}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="txtdiff">
                  {ReactHtmlParser(text2diff)}
                </div>
              </div>
            </div>
          }

          <div className="text-center mt-4">
            <div className="btn-group" role="group" aria-label="Change case">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleTextDiff(text1, text2)}
                >Detect Diff
              </button>
            </div>
          </div>
        </div>
      );
    }
