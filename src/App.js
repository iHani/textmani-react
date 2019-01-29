import React, { useState } from 'react';
import Header from './Components/Header';
import Manipulator from './Components/Manipulator/Manipulator';
import TextGenerator from './Components/TextGenerator/TextGenerator';
import LangDetector from './Components/LangDetector/LangDetector';
import MyDocs from './Components/MyDocs';

const allTabs = ["Manipulate text", "Language detector", "Lorem ipsum Generator", "My Docs"];

export default function App() {
  const [tabs] = useState(allTabs);
  const [activeTab, setActiveTab] = useState("Lorem ipsum Generator");
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
    text: "",
    statusMessage: "Ready"
  });

  const [generatorTab, setGeneratorTab] = useState({
    text: "",
    selectedType: "words",
    selectedTimes: 10,
    startWithLoremIpsum: false,
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
      case "Lorem ipsum Generator": return (
        <TextGenerator
          generatorTab={generatorTab}
          setGeneratorTab={setGeneratorTab}
          />
      )
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
