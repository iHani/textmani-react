import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Manipulator from './Components/Manipulator';
import Generator from './Components/Generator';
import MyDocs from './Components/MyDocs';

const allTabs = ["Manipulate text", "Lorem ipsum Generator", "Language detector", "My Docs"];

export default function App() {
  const [tabs] = useState(allTabs);
  const [activeTab, setActiveTab] = useState("Manipulate text");
  const [manipulatorText, setManipulatorText] = useState();
  const [stringCounts, setStringCounts] = useState({ words: 0, chars: 0 });


  function handleManipulatorText(text) {
    setManipulatorText(text);
    setStringCounts({ words: countWords(text), chars: countChars(text) });
  }


  function getComponent(tab) {
    switch (tab) {
      case "Manipulate text":
      return (
        <Manipulator
          text={manipulatorText}
          handleChangeText={handleManipulatorText}
          stringCounts={stringCounts}
          />
      )
      case "Lorem ipsum Generator": return <Generator />
      case "My Docs": return <MyDocs />
      default:
    }
  }

  function countWords(text = ''){
    if (text.trim()) {
      let ar = 0, en = 0;
      if (text.match(/\S/g)) {
        //Arabic words
        let pta = /[\u0600-\u06FF]+/g
        if (pta.test(text)) { ar = text.match(pta).length }
        //English words
        let pte = /\w+/g
        if (pte.test(text)) { en = text.match(pte).length }
        return ar + en
      } else { return 0 }
    }  else { return 0 }
  }


  function countChars(text){
    return text ? text.length : 0;
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

      <hr />

      <div className="text-center mt-4 mb-5">
          Textmani 2019
        <a href="https://github.com/ihani/textmani-react">
          <span> <i class="fab fa-github"></i></span>
        </a>
      </div>

    </div>
  );
}
