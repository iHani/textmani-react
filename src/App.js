import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Manipulator from './Components/Manipulator';
import Generator from './Components/Generator';
import MyDocs from './Components/MyDocs';

const allTabs = ["Manipulate text", "Lorem ipsum Generator", "My Docs"];

export default function App() {
  const [tabs] = useState(allTabs);
  const [activeTab, setActiveTab] = useState("Manipulate text");
  const [manipulatorText, setManipulatorText] = useState();
  const [generatorText, setGeneratorText] = useState();

  const getComponent = (tab) => {
    switch (tab) {
      case "Manipulate text": return <Manipulator text={manipulatorText} handleChangeText={setManipulatorText}/>
      case "Lorem ipsum Generator": return <Generator />
      case "My Docs": return <MyDocs />
      default:
    }
  }

  const handleClickTab = (activeTab) => setActiveTab(activeTab);

  return (
    <div>
      <Header tabs={tabs} activeTab={activeTab} handleClickTab={handleClickTab}/>
      <div className="container">
        <div className="py-2">
          {getComponent(activeTab)}
        </div>
      </div>
    </div>
  );
}
