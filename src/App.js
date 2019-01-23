import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Manipulator from './Components/Manipulator/Manipulator';
import Generator from './Components/Generator';
import MyDocs from './Components/MyDocs';

const allTabs = ["Manipulate text", "Lorem ipsum Generator", "Language detector", "My Docs"];

export default function App() {
  const [tabs] = useState(allTabs);
  const [activeTab, setActiveTab] = useState("Manipulate text");
  const [manipulatorTab, setManipulatorTab] = useState({
    text: 'eqw e ewq4545we wq 7740 wq 54 qw 54778 ssd.',
    replaceThis: '',
    replacseWith: '',
    removeThis: '',
    matchString: '',
    regexEnabled: false,
    statusMessage: 'Ready'
  });

  function getComponent(tab) {
    switch (tab) {
      case "Manipulate text":
      return (
        <Manipulator
          manipulatorTab={manipulatorTab}
          setManipulatorTab={setManipulatorTab}
          />
      )
      case "Lorem ipsum Generator": return <Generator />
      case "My Docs": return <MyDocs />
      case "Language detector": return console.log('Language detector tab clicked');
      default:
    }
    setManipulatorTab({ ...manipulatorTab, statusMessage: "54a21s0sa" });
  }


  return (
    <div>
      <Header tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className="container">
        <div className="py-2">
          {getComponent(activeTab)}
        </div>
      </div>
      <div className="text-center my-5">
        <hr />
        Textmani 2019
        <a href="https://github.com/ihani/textmani-react">
          <span> <i className="fab fa-github"></i></span>
        </a>
      </div>
    </div>
  );
}
