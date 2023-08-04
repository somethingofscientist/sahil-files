import logo from './logo.svg';
import Cars from './components/cars/Cars';
import DropDown from './components/dropdown/DropDown';
import Header from './components/header/Header';
import Flip from './components/flip/Flip';
import Navbar from './components/sideNavbar/Navbar';
import { useState } from 'react';
import Modal from './components/modal/Modal';
import InterviewScheduleBoard from './components/interview/InterviewScheduleBoard';
import AccordianItem from './components/Accordian/FAQ';
import Homepage from './apple/homepage/Homepage';

function App() {
  const [selected, setSelected] = useState("Lang");

  return (
    <div>
      <Homepage />
      {/* <AccordianItem /> */}
      {/* <InterviewScheduleBoard /> */}
      {/* <Modal/> */}
      {/* <Cars /> */}
      {/* <DropDown selected={selected} setSelected={setSelected} /> */}
      {/* <Header /> */}
      {/* <Flip/> */}
      {/* <Navbar /> */}
      {/* <h1
        style={{
          color: "#ff8a8a",
          textAlign: "center"
        }}>
        Jai Shree Ram
      </h1> */}
    </div>
  );
}

export default App;
