import React, { Component } from 'react';

const TopBar = () => {
    return (
        <div id="top-bar">
            <div id="search-bar">
                <input type="text" id="search" placeholder="Search for a document or a contact" />
            </div>
        </div>
    )
}

export default TopBar;