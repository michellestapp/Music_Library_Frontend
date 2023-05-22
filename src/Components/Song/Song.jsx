import React from 'react';



const Song = (props) => {
   
    const run_time = Number((props.run_time/60).toFixed(2));
    console.log(props.run_time)
    
    return (  
        <tr>
            <td>{props.song.title}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.album}</td>
            <td>{props.song.release_date}</td>
            <td>{props.song.genre}</td>
            <td>{run_time}</td>

        </tr>
    );
}
 
export default Song;