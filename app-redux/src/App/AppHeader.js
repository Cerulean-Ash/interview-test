import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";



class App extends Component {
    render() {
        return (
            <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Tic-Tac-Toe</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default App;