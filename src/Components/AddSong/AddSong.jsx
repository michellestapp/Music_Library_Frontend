import React, { useState } from 'react';

const AddSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [runtime, setRuntime] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
          title: title,
          artist: artist,
          album: album,
          releaseDate: releaseDate,
          genre: genre,
          runtime: runtime
        };
        console.log(newSong);
        props.addSong(newSong);
      }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>Add New Song</div>
            <div>Title</div>
            <input type="text" value={title} onChange={(event => setTitle(event.target.value))}/>
            <div>Artist</div>
            <input type="text" value={artist} onChange={(event => setArtist(event.target.value))}/>
            <div>Album</div>
            <input type="text" value={album} onChange={(event => setAlbum(event.target.value))}/>
            <div>Release Date</div>
            <input type="date" value={releaseDate} onChange={(event => setReleaseDate(event.target.value))}/>
            <div>Genre</div>
            <input type="text" value={genre} onChange={(event => setGenre(event.target.value))}/>
            <div>Run Time </div>
            <input type="integer" value={runtime} onChange={(event => setRuntime(event.target.value))}/>
            <button type="submit">Add Song</button>
        </form>
     );
}
 
export default AddSong;