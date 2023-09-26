import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero'
import getDataFromApi from './api/api';
import { useEffect, useState } from 'react';
import Section from './Components/Section/Section';

const topAlbumsPath = "albums/top";
const newAlbumsPath = "albums/new";
const songsPath = "songs";
const genresPath = "genres";



function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [allSongs, setAllSongs] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [genreKey, setGenreKey] = useState("All");
  const [filteredSongs, setFilteredSongs] = useState({});

  const handleSelect = (event, key, index) => {
    event.preventDefault();
    setGenreKey(key);
  }

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

  const filterSongsByGenre = (allSongs, allGenres) => {
    allGenres?.forEach(genre => {
      let currKey = genre.key;
      const newArray = allSongs.filter(song => song.genre.key === currKey);
      setFilteredSongs(prev => ({ ...prev, [currKey]: newArray }))
    });
  }

  console.log("Filtered songs ================>", filteredSongs);

  useEffect(() => {
    generateData(topAlbumsPath, setTopAlbums);
    generateData(newAlbumsPath, setNewAlbums);
    generateData(songsPath, setAllSongs);
    generateData(genresPath, setAllGenres);
  }, []);


  useEffect(() => {
    filterSongsByGenre(allSongs, allGenres);
  }, [allGenres]);

  return (
    <div className="App">

      <NavBar />

      <Hero />

      <Section title={"Top Albums"} data={topAlbums} toggle={true} />
      <Section title={"New Albums"} data={newAlbums} toggle={true} />
      <div className="line"></div>

      <Section title={"Songs"} data={genreKey == "All" ? allSongs : (filteredSongs[genreKey])} toggle={false} listOfGenre={allGenres} handleSelect={handleSelect} key={genreKey} />

    </div>
  );
}



export { App };
