import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSong from './Components/AddSong/AddSong';
import './App.css'




function App() {

  const [songs,setSongs] = useState([]);
  const [runtime, setRuntime] = useState([]);
  const [searchInput, setSearchInput]= useState('')
  

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:5000/api/songs')
    setSongs(response.data.songs);
    setRuntime(response.data.total_run_time);
    }

  async function addSong(newSong){
    try{
      let response = await axios.post('http://127.0.0.1:5000/api/songs',newSong)
    if(response.status === 201){
      await getAllSongs();
    }
  } catch (error){
    console.log(error.message);
  }
  }

  async function deleteSong(songId){
    try{
      let response = await axios.delete(`http://127.0.0.1:5000/api/songs/${songId}`)
      console.log(songId)
    if(response.status === 204){
      await getAllSongs();
    }
  } catch (error){
    console.log(error.message);
  }

  }
 


  return (
    <div >
      <nav>
        <NavBar searchInput = {searchInput} setSearchInput={setSearchInput}/>
      </nav>
      <div>
        <MusicTable  deleteSong = {deleteSong} parentSongs={songs} parentRuntime={runtime} searchInput = {searchInput}></MusicTable>
      </div>
      <div>
        <AddSong addSong = {addSong}/>
      </div>

    </div>
  );
  } 

export default App;
