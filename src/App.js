import React, { Component } from 'react';
import Side from './components/side';
import Items from './components/mainItems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainWrapper">
          <nav className="nav">
              <div className="inner">
                  <div className="navItems">
                      <div>Hackers News</div>
                  </div>
              </div>
          </nav>
            <div className="inner">
                <div className="bodyContainer">
                    <Side />
                    <div className="main">
                        <div className="mainWrapper">
                            <div className="main-title">
                                <h3> Latest News </h3>
                            </div>
                            <div className="main-card-wrapper">
                                <Items />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="inner">
                    <div>
                        <h2>This is the footer</h2>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}

export default App;
