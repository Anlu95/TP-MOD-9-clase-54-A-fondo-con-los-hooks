import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import SearchMovies from './SearchMovies'; 
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
        </div>

        <div id="content">
          <SearchMovies />
        </div>
    </React.Fragment>
  );
}

export default App;
