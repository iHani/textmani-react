import React, { useState, useEffect } from 'react';
import { getState } from './utils/functions';
import Header from './Components/Header';
import Manipulator from './Components/Manipulator/Manipulator';
import TextGenerator from './Components/TextGenerator/TextGenerator';
import LangDetector from './Components/LangDetector/LangDetector';
import MyDocs from './Components/MyDocs';

export default function App() {
  const state = getState(); // get from localStorage, or return initial default state
  const {localStorageIsAvailable, allTabs} = state;
  const [tabs] = useState(allTabs);
  const [activeTab, setActiveTab] = useState(state.activeTab);
  const [manipulatorTab, setManipulatorTab] = useState(state.manipulatorTab);
  const [langDetectorTab, setLangDetectorTab] = useState(state.langDetectorTab);
  const [generatorTab, setGeneratorTab] = useState(state.generatorTab);

  useEffect(() => {
    if (localStorageIsAvailable) {
      const newState = {
        localStorageIsAvailable,
        allTabs,
        activeTab,
        manipulatorTab,
        langDetectorTab,
        generatorTab
      }
      localStorage.setItem("textmani_state", JSON.stringify(newState))
    }
  })

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
        <div className="pt-2 pb-3">
          {getComponent(activeTab)}
        </div>
        <hr />
      </div>
      <div className="text-center my-5">
        <span className="small">
          Textmani 2016 - {new Date().getFullYear()}
        </span>
        <a href="https://github.com/ihani/textmani-react">
          <span> <i className="fab fa-github"></i></span>
        </a>
      </div>
    </div>
  );
}
