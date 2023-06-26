import logo from './logo.svg';
import './App.css';
import Cars from './components/cars/Cars';
import DropDown from './components/dropdown/DropDown';
import { useState } from 'react';
import Header from './components/header/Header';
import Flip from './components/flip/Flip';

function App() {
  const [selected, setSelected] = useState("Lang");

  return (
    <>
      {/* <Cars /> */}
      {/* <DropDown selected={selected} setSelected={setSelected} /> */}.
      {/* <Header /> */}
      <Flip/>
    </>
  );
}

export default App;
