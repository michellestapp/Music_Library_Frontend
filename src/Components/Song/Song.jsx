import React from 'react';
import './Song.css'
import axios from 'axios';



  

const Song = ({song, getAllSongs}) => {
   
    const run_time = Number((song.run_time/60).toFixed(2));
    

    async function deleteSong(){
        try{

          let response = await axios.delete(`http://127.0.0.1:5000/api/songs/${song.song_id}`)
          
        if(response.status === 204){
          await getAllSongs();
        }
      } catch (error){
        console.log(error.message);
      }
    }
    return (  
        <tr data-cy="song-data">
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
            <td>{run_time}</td>
            <td>
                <button type="submit" onClick={() => deleteSong(song.song_id)}>Delete</button>
            </td>

        </tr>
    );
}
 
export default Song;