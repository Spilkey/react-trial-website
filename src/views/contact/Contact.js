import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentBubble from '../../components/ContentBubble';
function Contact() {
    return (
        <div class="main-content main-content-lg">
            <div id="image-main"></div>
            <ContentBubble title="Contact" angle="30" colorOption="4" col="3" row="1" colSpan="4" rowSpan="2"></ContentBubble>

        </div>  
    );
  }
  
  export default Contact;