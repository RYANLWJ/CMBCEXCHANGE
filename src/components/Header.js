import React from 'react';
import axios from 'axios';
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    render() {
       return  <div className="mobile-header">
            <a href="http://m.cmbchina.com" className="icons icons-1 logo"></a>
            <div className="return-link">
                <a className="icons icons-3"></a>
            </div> <div className="home-link">
                <a href="http://m.cmbchina.com/Default.aspx" className="icons icons-2">
                </a>
            </div>
        </div>
    }
}