import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from './components/Account';
import {Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <h1 className=" text- center text-3xl font bold">
        Firebase Auth & Context
        </h1>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/account' element={<Account
          />}/>
        </Routes>
    </div>
  
  );
}

export default App;
