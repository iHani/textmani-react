import React, { Component } from 'react';
import Header from './Components/Header';
import Manipulator from './Components/Manipulator';
import Generator from './Components/Generator';
import MyDocs from './Components/MyDocs';
// import MyComponent from './Components/MyDocs';

class App extends Component {
  state = {
    tabs: [ "Manipulate text", "Lorem ipsum Generator", "My Docs"],
    activeTab: "Manipulate text",
  }

  getComponent = (tab) => {
    switch (tab) {
      case "Manipulate text": return <Manipulator />
      case "Lorem ipsum Generator": return <Generator />
      case "My Docs": return <MyDocs />
      default:
    }
  }

  handleClickTab = (activeTab) => this.setState({ activeTab });

  render() {
    const { tabs, activeTab } = this.state;
    return (
      <div>
        <Header tabs={tabs} activeTab={activeTab} handleClickTab={this.handleClickTab}/>
        <div className="container">
          <div className="py-2">
            {this.getComponent(activeTab)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
