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
    text: `হিন্দুধর্মের বিভিন্ন সম্প্রদায়ের ধর্মীয় পাণ্ডুলিপি ও ঐতিহাসিক সাহিত্যের সংকলনকে হিন্দু ধর্মগ্রন্থ বলা হয়। কয়েকটি হিন্দু ধর্মগ্রন্থ একাধিক সম্প্রদায়ে স্বীকৃত। এগুলিকেই বৃহত্তর অর্থে হিন্দুশাস্ত্র বলা হয়ে থাকে।[১][২] বেদ ও উপনিষদ্‌ হিন্দুশাস্ত্রের অন্তর্গত। হিন্দুধর্মের বৈচিত্র্যপূর্ণ প্রকৃতির প্রেক্ষাপটে গবেষকরা ‘হিন্দুশাস্ত্রে’র সংজ্ঞা নির্ধারণের বিষয়ে দ্বিধাগ্রস্থ বোধ করেন।[২][৩] কেউ কেউ ভগবদ্গীতা ও আগম শাস্ত্রকে হিন্দুশাস্ত্রের অন্তর্ভুক্ত মনে করেন।[২][৩][৪] অন্যদিকে ডোমিনিক গুডাল ভাগবত পুরাণ ও যাজ্ঞবল্ক্য স্মৃতিকেও হিন্দুশাস্ত্রের অন্তর্ভুক্ত করেছেন।[২]
`,
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
