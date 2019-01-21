import React, { useState, useEffect } from 'react';

export default function MyComponent() {
  const [text, setText] = useState();
  const updateText = (e) => setText(e.target.value);
  const clearText = () => setText('');
  const textarea = React.createRef();

  useEffect(() => textarea.current.focus());

  return (
    <div>
      <textarea
        value={text}
        onChange={updateText}
        ref={textarea}
        autoFocus>
      </textarea>
      <button
        type="button"
        onClick={clearText}
        >Clear
      </button>
    </div>
  );
}
