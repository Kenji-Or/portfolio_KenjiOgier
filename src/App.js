import React from 'react';
import AppRoutes from './routes/Route';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar /> 
        <AppRoutes />
    </div>
  );
}

export default App;