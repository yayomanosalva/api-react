import React, {Component} from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg';

class Header extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/Home" activeClassName="active">Home</Link></li>
                                <li><Link to="/Api" activeClassName="active">Api</Link></li>
                                <li><Link to="/Contact" activeClassName="active">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Header