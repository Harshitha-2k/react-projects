import "./App.css";
import React from "react";
import News from "./compontents/News";
import Navabar from "./compontents/Navabar";

function App(){
     return(
        <div className="App">
            <Navabar/>
            <br/>
            <News />
            <br/>
        </div>
     )
     
}
export default App;
