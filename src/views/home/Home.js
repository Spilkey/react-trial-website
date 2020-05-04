import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentBubble from '../../components/ContentBubble';
import './home.css' 
function Home() {
    
    return (
        <div class="main-content main-content-sm">
            <ContentBubble content="Hello, I am content" hasImage="true"/>
            <ContentBubble/>
        </div>
        
    );
  }
  
  export default Home;