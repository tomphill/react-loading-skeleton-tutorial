import React from "react";
import "./App.css";
import { Skeleton } from "./Skeleton";
function App() {
    return (
        <div className="App">
            <Skeleton circle />
            <Skeleton />
        </div>
    );
}

export default App;
