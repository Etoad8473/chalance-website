import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const BasicRouting = ()=>{
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>

        <hr/>

        <Route exact path = "/" component = {Home} />
        <Route path = "/about" component = {About} />
    </Router>
};

const Home = () => {
    return(
        <div>
            <h1>
                home page
            </h1>
        </div>
    )
};

const About = () => {
    return(
        <div>
            <h1>
                about page
            </h1>
        </div>
    )
};

export default BasicRouting;