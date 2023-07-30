import logo from './logo.svg';
import Cars from './components/cars/Cars';
import DropDown from './components/dropdown/DropDown';
import Header from './components/header/Header';
import Flip from './components/flip/Flip';
import Slider from './components/slider/Slider';
import Navbar from './components/sideNavbar/Navbar';
import { useState } from 'react';
import Modal from './components/modal/Modal';
import InterviewScheduleBoard from './components/interview/InterviewScheduleBoard';

function App() {
  const [selected, setSelected] = useState("Lang");

  return (
    <>
      {/* <InterviewScheduleBoard /> */}
      {/* <Modal/> */}
      {/* <Cars /> */}
      {/* <DropDown selected={selected} setSelected={setSelected} /> */}
      {/* <Header /> */}
      {/* <Flip/> */}
      {/* <Slider /> */}
      {/* <Navbar /> */}


      <h1
        style={{
          color:"#ff8a8a",
          textAlign: "center"
        }}>
        Sahil Bhai Zindabad
      </h1>
    </>
  );
}

export default App;
