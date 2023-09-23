import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero'
import fetchTopAlbums from './api/api';
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import Section from './Components/Section/Section';

const topAlbumsPath = "albums/top";


function App() {
  const [topAlbums, setTopAlbums]  = useState([]);
  
  const generateData = async (path, stateUpdater) =>{
    try{
      const data = await fetchTopAlbums(path);
      console.log("data at " + path + ": " , data.data);
      stateUpdater(data.data); 
    }catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{
    generateData(topAlbumsPath, setTopAlbums);
  }, []);
  
  return (
    <div className="App">

      <NavBar/>

      <Hero/>

      <Section title={"Top Albums"} data={topAlbums} />

    </div>
  );
}

export default App;