import React, { useState } from 'react';
import Header from './Components/Header';
import Manipulator from './Components/Manipulator/Manipulator';
import Generator from './Components/Generator';
import MyDocs from './Components/MyDocs';
import LangDetector from './Components/LangDetector/LangDetector';

const allTabs = ["Manipulate text", "Lorem ipsum Generator", "Language detector", "My Docs"];

export default function App() {
  const [tabs] = useState(allTabs);
  const [activeTab, setActiveTab] = useState("Language detector");
  const [manipulatorTab, setManipulatorTab] = useState({
    text: "",
    replaceThis: "",
    replacseWith: "",
    removeThis: "",
    matchString: "",
    caseSensetive: false,
    regexEnabled: false,
    statusMessage: "Ready"
  });

  const [langDetectorTab, setLangDetectorTab] = useState({
    text: "Words counter, fix capitalization, replace words, scramble text, generate lorem ipsum and such.",
    statusMessage: "Ready"
  });

  function getComponent(tab) {
    switch (tab) {
      case "Manipulate text": return (
        <Manipulator
          manipulatorTab={manipulatorTab}
          setManipulatorTab={setManipulatorTab}
          />
      )
      case "Lorem ipsum Generator": return <Generator />
      case "My Docs": return <MyDocs />
      case "Language detector": return (
        <LangDetector
          langDetectorTab={langDetectorTab}
          setLangDetectorTab={setLangDetectorTab}
          />
      )
      default:
    }
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
        Textmani 2016 - {new Date().getFullYear()}
        <a href="https://github.com/ihani/textmani-react">
          <span> <i className="fab fa-github"></i></span>
        </a>
      </div>
    </div>
  );
}
