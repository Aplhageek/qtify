import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero'
import fetchTopAlbums from './api/api';
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import Section from './Components/Section/Section';


function App() {
  const [topAlbums, setTopAlbums]  = useState([]);
  
  const generateData = async () =>{
    try{
      const data = await fetchTopAlbums();
      // console.log(data);
      setTopAlbums(data.data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    generateData();
  }, []);
  
  return (
    <div className="App">

      <NavBar/>
      
      <Hero/>

      <div>           
      <Section title={"Top Albums"} data={topAlbums} />
      </div>
    </div>
  );
}

export default App;