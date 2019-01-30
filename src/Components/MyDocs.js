import React from 'react';

const data = [
  {title: "Clear poems", timestamp: Date.now() },
  {title: "Mat note", timestamp: Date.now() },
  {title: "lorem data", timestamp: Date.now() },
]


function handleDeleteDoc(e) {
  console.log(e.target);
}

const MyDocs = () => (
  <div>
    <h2>My Docs</h2>
    {data.map(doc => {
      return (
        <div key={doc.title} className="alert alert-secondary alert-dismissible fade show doc" role="alert">
          <strong>{doc.title}</strong> <span className="small">{doc.timestamp}</span>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={handleDeleteDoc}>
            <span><i className="fa fa-xs fa-trash"></i></span>
          </button>
        </div>
      )
    })}


  </div>
);

export default MyDocs;
