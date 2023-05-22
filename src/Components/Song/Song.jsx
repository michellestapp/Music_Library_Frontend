import React from 'react';
import './Song.css'



const Song = ({song}) => {
   
    const run_time = Number((song.run_time/60).toFixed(2));

    
    return (  
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.release_date}</td>
            <td>{song.genre}</td>
            <td>{run_time}</td>

        </tr>
    );
}
 
export default Song;