import React from 'react';
import FullResume from './Resume';
import Cv from './cv';
// import { useMediaQuery } from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define the breakpoint for small screens

  return (
    <div className="App">
       <Cv/>
     {/*  {isSmallScreen ?  <Cv/>: <Cv />} Render based on screen size <FullResume />*/}
    </div>
  );
}

export default App;
