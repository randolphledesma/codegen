import React, { Component } from 'react';

export class Container extends Component {
    render() {
        var klass = "container-fluid";
        if ("class" in this.props) {
            klass = "container-fluid " + this.props["class"];
        }
        return (
            <div id="App" className={klass}>
                {this.props.children}
            </div>
        );
    }
}

export class Row extends Component {
  render() {
    var klass = "row";
    if ("class" in this.props) {
      klass = "row " + this.props["class"];
    }
    return (
      <div className={klass}>
        {this.props.children}
      </div>
    );
  }
}

//grid default: col-xs-12
export class Col extends Component {
  render() {
    var klass = "col";
    if ("xs" in this.props) {
      klass = "col-" + this.props["xs"];
    }
    if ("sm" in this.props) {
      klass = klass + " col-sm-" + this.props["sm"];
    }
    if ("md" in this.props) {
      klass = klass + " col-md-" + this.props["md"];
    }
    if ("lg" in this.props) {
      klass = klass + " col-lg-" + this.props["lg"];
    }
    if ("xl" in this.props) {
      klass = klass + " col-xl-" + this.props["xl"];
    }
    if ("class" in this.props) {
      klass = klass + " " + this.props["class"];
    }

    return (
      <div className={klass}>
        {this.props.children}
      </div>
    );
  }
}