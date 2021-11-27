import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./component/UI/Navbar/navbar";
import PageRouter from "./component/PageRouter";


function App() {

  return (
      <BrowserRouter>
          <Navbar/>
          <PageRouter/>
      </BrowserRouter>
  );
}

export default App;
