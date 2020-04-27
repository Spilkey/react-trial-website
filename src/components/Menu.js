import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/projects/product-1.html">Projects</a></li>
                <li><a href="/contact.html">Contact</a></li>
                <li><a href="/contact.html">About</a></li>
            </ul>
        );
    }
}