// import './App.css'

import {useEffect} from "react";
import axios from "axios";

function App() {
    useEffect(() => {
        axios.get("http://localhost:8085/api/categories")
            .then(resp=>{
                console.log("resp = ", resp);
            });
    },[]);

  return (
    <>
      <h1>Привіт команда!</h1>
    </>
  )
}

export default App
