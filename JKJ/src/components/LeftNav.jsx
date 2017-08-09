import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
//Profile Pic 
//Username
//Logo

class LeftNav extends Component {
    constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Drawer 
          docked={true}
          width={250}
          zDepth={1}
        >
        <div id="logo">LOGO</div>
        <div id="profile-pic">PIC</div>
        <div id="name">NAME </div>
        <div id="menu-item">
          <MenuItem>HOME</MenuItem>
          <MenuItem>DOCUMENTS</MenuItem>
          <MenuItem>CONTACTS</MenuItem>
          <MenuItem>SETTINGS</MenuItem>
        </div>
        </Drawer>
      </div>
    );
  }
}

export default LeftNav;
