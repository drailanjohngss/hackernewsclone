import React, { Component } from 'react';
import text from '../common/text';

class Side extends Component {
    render() {
        return (
            <div className="side">
                <div className="sideWrapper">
                    <div className="side-title">
                        <h3>About HackerNews</h3>
                    </div>
                    <div className="side-body">
                        <div>{text.aboutHN}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Side;
