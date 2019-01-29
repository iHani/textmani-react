import React from 'react';

const Header = ({ tabs, activeTab, setActiveTab }) => (
  <div className="bg-light">
    <div className="container">
      <div className="py-2 text-center">
        <p className="h3">Textmani</p>
        <span>Online text manipulator, language detector, dummy text generator, and more.</span>
      </div>
      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <li key={i} className="nav-item">
            <span
              className={`nav-link ${activeTab === tab ? "active": ""}`}
              onClick={({ target }) => setActiveTab(target.innerText)}
              >{tab}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Header;
