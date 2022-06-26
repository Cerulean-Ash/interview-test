import React, {Component} from "react";
import './footer.css';
import {connect} from "react-redux";

class ShowStore extends Component {

    render() {
        return (
            <pre className='footer'>
                State: {JSON.stringify(this.props, null, 2)}
            </pre>
        );
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
};


export default connect(
    mapStateToProps,
)(ShowStore);