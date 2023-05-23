import React from 'react';
import Song from '../Song/Song';
import './MusicTable.css'

let MusicTable = ({searchInput, parentRuntime, parentSongs, deleteSong}) => {


 let filteredSongs = parentSongs.filter(song => 
    song.title.toLowerCase().includes(searchInput.toLowerCase())|| 
    song.album.toLowerCase().includes(searchInput.toLowerCase())||
    song.artist.toLowerCase().includes(searchInput.toLowerCase())||
    song.release_date?.includes(searchInput)||
    song.genre?.toLowerCase().includes(searchInput.toLowerCase())
    )

 

    return ( 
        <div className='table-background'>
            <div>
                <table>
                    <thead>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Running Time</th>
                        <th>Delete Song</th>
                    </thead>
                    <tbody>
                    {filteredSongs
                    .map((song) =>{

                        return(
                        
                            <Song song = {song} deleteSong={deleteSong}/>
                        )
                    
                    })}
                    <tr className='run-time'>
                        <td>Total Run Time</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{parentRuntime}</td>
                         
                    </tr>
                    
                    </tbody>

                </table>
            </div>
           
        </div>
        )

}
 
export default MusicTable;