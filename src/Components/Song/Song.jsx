import React from 'react';
import './Song.css'



const Song = ({song,deleteSong}) => {
   
    const run_time = Number((song.run_time/60).toFixed(2));
    console.log(song.song_id);

    
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