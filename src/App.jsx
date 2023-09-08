import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSong from './Components/AddSong/AddSong';
import './App.css'




function App() {

  const [songs,setSongs] = useState([]);
  const [totalRunTimeFormatted, setTotalRunTimeFormatted] = useState('');
  const [searchInput, setSearchInput]= useState('')
  

  useEffect(() => {
    console.log('useEffect fired');
    getAllSongs();
  }, [])

  async function getAllSongs(){
    console.log('getAllSongs called');
    let response = await axios.get('http://127.0.0.1:5000/api/songs')
    setSongs(response.data.songs);
    setTotalRunTimeFormatted(response.data.total_run_time_formatted);
    console.log(totalRunTimeFormatted)
    }

  async function addSong(newSong){
    try{
      let response = await axios.post('http://127.0.0.1:5000/api/songs',newSong)
    if(response.status === 201){
      await getAllSongs();
    }
  } catch (error){
    console.error('Error adding song:', error);
  }
  }


  return (
    <div >
        <NavBar searchInput = {searchInput} setSearchInput={setSearchInput}/>
        <MusicTable  getAllSongs={getAllSongs}   parentSongs={songs} parentRuntime={totalRunTimeFormatted} searchInput = {searchInput}/>    
        <AddSong addSong = {addSong}/>
    </div>
  );
  } 

export default App;
