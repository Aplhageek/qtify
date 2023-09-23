import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero'
import fetchTopAlbums from './api/api';
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import Section from './Components/Section/Section';

const topAlbumsPath = "albums/top";
const newAlbumsPath = "albums/new";


function App() {
  const [topAlbums, setTopAlbums]  = useState([]);
  const [newAlbums, setNewAlbums]  = useState([]);

  
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
    generateData(newAlbumsPath, setNewAlbums);
  }, []);
  
  return (
    <div className="App">

      <NavBar/>

      <Hero/>

      <Section title={"Top Albums"} data={topAlbums} />
      <Section title={"New Albums"} data={newAlbums} />
      <div className="line"></div>

    </div>
  );
}

export default App;