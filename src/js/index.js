//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let seconds = 0;
setInterval(() =>{
    ReactDOM.createRoot(document.getElementById('app')).render(<Home seconds = {seconds}/>);
    seconds++;
},1000);

