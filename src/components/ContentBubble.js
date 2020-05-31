import React, { Component } from 'react';
import '../css/flip-div.css' 

export default class ContentBubble extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        var colorAngle = this.props.angle;
        var colorOption = this.props.colorOption - 1;
        var colNum = this.props.col;
        var rowNum = this.props.row;
        var colSpan = this.props.colSpan;
        var rowSpan = this.props.rowSpan;
        var colorlkp = [
            {
                "color-1": "var(--color-contrast)", 
                "color-2": "var(--color-contrast)",
            },
            {
                "color-1": "var(--color-contrast)", 
                "color-2": "var(--color-bright)",
            },           
            {
                "color-1": "var(--color-bright)",
                "color-2": "var(--color-bright)" ,
            },
            {
                "color-1": "var(--color-bright)" ,
                "color-2": "var(--color-contrast)",
            },   
        ]

        var divStyle={
            background:"-webkit-linear-gradient("+colorAngle+"deg,"+colorlkp[colorOption]["color-1"]+" 50%,"+colorlkp[colorOption]["color-2"]+" 50%)",
            color: colorlkp[colorOption]["color"],
            gridRow: rowNum+" /span "+rowSpan,
            gridColumn: colNum+"/span "+colSpan,
        }
        return (

            <div class="content-bubble" style={divStyle}>
                { this.props.title && 
                    <h3>{this.props.title}</h3>
                }
                <p>
                    {this.props.content}
                </p>
            </div>
        );
    }
}
export class ContentFlipBox extends Component{
    constructor(props){
        super(props);
    }

    render() {
        function showFlipClass(e) {
            document.getElementsByClassName("panel")[0].classList.add('flip');
        }
        function hideFlipClass(e){
            document.getElementsByClassName("panel")[0].classList.remove('flip');

        }
        return(

            <div class="hover panel"                 
            onMouseEnter={showFlipClass}
            onMouseLeave={hideFlipClass}>
                <div class="front">
                    <div class="box1">
                    <h3>{this.props.title}</h3>
                    </div>
                </div>
                <div class="back">
                    <div class="box2">
                    <h5>{this.props.desc}</h5>
                    </div>
                </div>
            </div>
        )
    }
}