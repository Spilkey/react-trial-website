import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentBubble from '../../components/ContentBubble';

function About() {
    return (
        <div class="main-content main-content-lg">
             <div id="image-main"></div>
            <ContentBubble title="About Me" angle="30" colorOption="4" col="5" row="2" colSpan="5" rowSpan="2"></ContentBubble>
        </div>      
    );
}
  
export default About;