import React, { Component } from 'react';
import TopBar from './components/TopBar.jsx';
import LeftNav from './components/LeftNav.jsx';
import Editor from './components/Editor.jsx';
import RightNav from './components/RightNav.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return(
      <div>
      <MuiThemeProvider>
        <LeftNav />
      </MuiThemeProvider>
      <MuiThemeProvider>
        <TopBar />
      </MuiThemeProvider>
      <MuiThemeProvider>
      <Editor />
      </MuiThemeProvider>
      <MuiThemeProvider>
      <RightNav />
      </MuiThemeProvider>
      </div>
    )
  }
}

export default App
