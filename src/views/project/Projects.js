import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentBubble from '../../components/ContentBubble';
function Projects() {
    return (
        <div class="main-content main-content-lg">
            <ContentBubble title="Project" angle="30" colorOption="4" col="2" row="auto" colSpan="5" rowSpan="2"></ContentBubble>
            <ContentBubble title="Project" angle="30" colorOption="1" col="7" row="2" colSpan="5" rowSpan="3"></ContentBubble>
            <ContentBubble title="Project" angle="30" colorOption="2" col="2" row="auto" colSpan="5" rowSpan="3"></ContentBubble>
            <ContentBubble title="Project" angle="30" colorOption="3" col="7" row="auto" colSpan="5" rowSpan="3"></ContentBubble>
            <ContentBubble title="Project" angle="30" colorOption="4" col="2" row="auto" colSpan="5" rowSpan="3"></ContentBubble>
        </div>  
       
    );
  }
  
  export default Projects;