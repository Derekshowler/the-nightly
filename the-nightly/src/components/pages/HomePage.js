import React from "react";
import {Link} from "react-router-dom";


const HomePage = () => (
    <div>
        <h1>Welcome to The-Nightly</h1>
        <Link to = "/login">Login</Link>
    </div>
);

export default HomePage;