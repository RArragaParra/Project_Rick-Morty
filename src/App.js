import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';

function App() {
   
   const [characters, setCharacters] = React.useState([])

   const onSearch = () => {
   
   
   }

   return (
      <div className='App'>
         <Nav onSearch = {onSearch}/>
         <div>
         <Cards characters= {characters} />
         </div>
      </div>
   );
}

export default App;
