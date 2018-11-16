import 'reset-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import { Row, Col } from "./Grid";
import {Container, Header} from "./Layout";

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg fixed-top navbar navbar-dark bg-primary">
            <a className="navbar-brand mr-auto mr-lg-0" href="#/">API</a>
            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#/">Dashboard <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/">Notifications</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/">Profile</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#/">Switch account</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                    <a className="dropdown-item" href="#/">Action</a>
                    <a className="dropdown-item" href="#/">Another action</a>
                    <a className="dropdown-item" href="#/">Something else here</a>
                </div>
                </li>
            </ul>
            </div>
        </nav>

        <div className="nav-scroller bg-white shadow-sm">
            <nav className="nav nav-underline">
            <a className="nav-link active" href="#/">Dashboard</a>
            <a className="nav-link" href="#/">
                Friends
                <span className="badge badge-pill bg-light align-text-bottom">27</span>
            </a>
            <a className="nav-link" href="#/">Explore</a>
            <a className="nav-link" href="#/">Suggestions</a>
            <a className="nav-link" href="#/">Link</a>
            <a className="nav-link" href="#/">Link</a>
            <a className="nav-link" href="#/">Link</a>
            <a className="nav-link" href="#/">Link</a>
            <a className="nav-link" href="#/">Link</a>
            </nav>
        </div>

        <main role="main" className="container-fluid">
            <Row class="my-3 p-3 bg-white">
                <Col class="p-4 rounded shadow-sm" xs="12" sm="6">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Options</h6>
                </Col>
                <Col xs="12" sm="6">
                    <Row>
                        <Col xs="12">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label class="btn btn-secondary active">
                                        <input type="radio" name="options" value="Swift" autocomplete="off" checked /> Swift
                                        </label>
                                        <label class="btn btn-secondary">
                                        <input type="radio" name="options" value="PHP" autocomplete="off" /> PHP
                                        </label>
                                        <label class="btn btn-secondary">
                                        <input type="radio" name="options" value="Python" autocomplete="off" /> Python
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <code>code here</code>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </main>
        </React.Fragment>
    );
  }
}

export default App;
