import logo from './logo.svg';
import Cars from './components/cars/Cars';
import DropDown from './components/dropdown/DropDown';
import { useState } from 'react';
import Header from './components/header/Header';
import Flip from './components/flip/Flip';
import Slider from './components/slider/Slider';
import Navbar from './components/sideNavbar/Navbar';

function App() {
  const [selected, setSelected] = useState("Lang");

  return (
    <>
      {/* <Cars /> */}
      {/* <DropDown selected={selected} setSelected={setSelected} /> */}
      {/* <Header /> */}
      {/* <Flip/> */}
      {/* <Slider /> */}
      <Navbar />
    </>
  );
}

export default App;
