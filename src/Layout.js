import React, { Component } from 'react';

export class Container extends Component {
    render() {
        var klass = "container";
        if ("class" in this.props) {
            klass = "container " + this.props["class"];
        }
        return (
            <div id="App" className={klass}>
                {this.props.children}
            </div>
        );
    }
}

export class Header extends Component {
    render() {
        var klass = "header";
        if ("class" in this.props) {
            klass = "header " + this.props["class"];
        }
        return (
            <div id="Header" className={klass}>
                {this.props.children}
            </div>
        );
    }
}