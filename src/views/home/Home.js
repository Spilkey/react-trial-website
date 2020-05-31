import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {ContentBubble,ContentFlipBox} from '../../components/ContentBubble';
import './home.css' 
function Home() {
    
    return (
        <div>
            <ContentFlipBox title="Samuel Pilkey" desc="4th Year Computer Science, Currently working as a Systems/Full stack developer and am excited for what the future has to offer"/>
            <div class="main-content main-content-lg">
                <div id="image-main"></div>
            </div>
        </div>
        
    );
  }
  
  export default Home;