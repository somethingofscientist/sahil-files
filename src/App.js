import logo from './logo.svg';
import './App.css';
import Cars from './components/cars/Cars';
import DropDown from './components/dropdown/DropDown';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState("Choose ");

  return (
    <>
      {/* <Cars /> */}
      <DropDown selected={selected} setSelected={setSelected} />
    </>
  );
}

export default App;
