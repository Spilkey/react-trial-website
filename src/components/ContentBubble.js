import React, { Component } from 'react';

export default class ContentBubble extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        if(this.props.hasImage){
                        
        }
        return (
            <div class="content-bubble">
                
                {this.props.content}
            </div>
        );
    }
}