import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero'
import getDataFromApi from './api/api';
import { useEffect, useState } from 'react';
import Section from './Components/Section/Section';
import AccordionComp from './Components/Accordian/AccordianComp';
import Faq from './Components/FAQ/Faq';

const topAlbumsPath = "albums/top";
const newAlbumsPath = "albums/new";
const songsPath = "songs";
const genresPath = "genres";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [allGenres, setAllGenres] = useState([]);

  const generateData = async (path, stateUpdater) => {
    try {
      const data = await getDataFromApi(path);

      // as genre is giving us obj not array 
      if (path === "genres") {
        stateUpdater(data.data.data);
      } else {
        stateUpdater(data.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    generateData(topAlbumsPath, setTopAlbums);
    generateData(newAlbumsPath, setNewAlbums);
    generateData(songsPath, setAllSongs);
    generateData(genresPath, setAllGenres);
  }, []);

  return (
    <div className="App">

      <NavBar />

      <Hero />

      <Section title={"Top Albums"} data={topAlbums} toggle={true} />
      <Section title={"New Albums"} data={newAlbums} toggle={true} />
      <div className="line"></div>

      <Section title={"Songs"} data={allSongs } toggle={false} listOfGenre={allGenres}  />
      {/* handleSelect={handleSelect} key={genreKey} */}

      <Faq/>
    </div>
  );
}
export { App };