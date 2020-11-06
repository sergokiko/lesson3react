import './App.css';
import React from "react";
import FindById from "./components/FindById";
import FindByName from "./components/find-by-name";

function App() {
    return (
        <div>
            <h1>User finder</h1>
            <div className="container">
                <FindById/>
                <FindByName/>
            </div>
        </div>

    );
}

export default App;
