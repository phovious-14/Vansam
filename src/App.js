import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Tree from "./pages/Tree/Tree";
import {
  Route,
  Routes
} from 'react-router-dom';
import Protected from "./context/Protected";
import InputForm from "./pages/InputForm/InputForm";

const App = () => { 

  return (
    <>
      {/* <Tree /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vansa" element={
          <Protected>
            <Tree />
          </Protected>
        } />
        <Route exact path="/add-person" element={
          <Protected>
            <InputForm />
          </Protected>
        } />
      </Routes>  
    </>
  );
};

export default App;
