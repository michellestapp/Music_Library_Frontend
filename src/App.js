import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import axios from 'axios';


function App() {

  const [songs,setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, [songs])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:5000/api/songs')
      console.log(response.data.songs);
    setSongs(response.data.songs);
    }
  

  return (
    <div >
      <nav>
        <NavBar/>

      </nav>
      <div>
        {songs.map((song)=><p>{song.title}</p>)}
      </div>

    </div>
  );
  } 

export default App;
