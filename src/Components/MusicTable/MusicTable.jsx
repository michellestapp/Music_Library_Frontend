import React from 'react';
import Song from '../Song/Song';

let MusicTable = (props) => {
 console.log(props.searchInput)

 let filteredSongs = props.parentSongs.filter(song => 
    song.title.toLowerCase().includes(props.searchInput.toLowerCase())|| 
    song.album.toLowerCase().includes(props.searchInput.toLowerCase())||
    song.artist.toLowerCase().includes(props.searchInput.toLowerCase())||
    song.release_date?.includes(props.searchInput)||
    song.genre?.toLowerCase().includes(props.searchInput.toLowerCase())
    )

 

    return ( 
        <div>
            <div>
                <table>
                    <thead>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Running Time</th>
                    </thead>
                    <tbody>
                    {filteredSongs
                    .map((song) =>{

                        return(
                        
                            <Song song = {song}
                                />
                        )
                    
                    })}
                    <tr>
                        <td>Total Run Time</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{props.parentRuntime}</td>
                         
                    </tr>
                    
                    </tbody>

                </table>
            </div>
           
        </div>
        )

}
 
export default MusicTable;