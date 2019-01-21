import React from 'react';

const Header = ({ tabs, activeTab, handleClickTab }) => (
  <div className="bg-light">
    <div className="container">
      <div className="py-2 text-center">
        <h2>TextMani</h2>
        <p>Word counter, fix capitalization, replace words, scramble text, generate dummy text and such.</p>
      </div>
      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <li key={i} className="nav-item">
            <span
              className={`nav-link ${activeTab === tab ? "active": ""}`}
              onClick={({ target }) => handleClickTab(target.innerText)}
              >{tab}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Header;
