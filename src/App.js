import React from 'react';
import FullResume from './Resume';
import Cv from './cv';
import { useMediaQuery } from '@mui/material';

function App() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Define the breakpoint for small screens

  return (
    <div className="App">
      {isSmallScreen ? <FullResume /> : <Cv />} {/* Render based on screen size */}
    </div>
  );
}

export default App;
