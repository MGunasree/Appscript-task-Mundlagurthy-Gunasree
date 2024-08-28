import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Data from './components/Data';
import SortOptions from './components/SortOptions';
import FilterMenu from './components/FilterMenu';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header /><br height="30%"></br>
      <Sidebar />
      <Data />
      <SortOptions />
      <FilterMenu />
    



      <Footer />
    </div>
   
  );
}

export default App;
