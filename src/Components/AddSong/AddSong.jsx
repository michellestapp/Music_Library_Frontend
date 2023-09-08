import React, { useState } from 'react';
import './AddSong.css'

const AddSong = ({addSong}) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');
    const [runtime, setRuntime] = useState('');
    const [songFile, setSongFile] = useState(null);

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
          title: title,
          artist: artist,
          album: album,
          release_date: releaseDate,
          genre: genre,
          run_time: runtime,
          song_file: songFile,
        };
        addSong(newSong);
        setTitle('');
        setArtist('');
        setAlbum('');
        setReleaseDate('');
        setGenre('');
        setRuntime('');
        setSongFile(null);
      }

      
    return ( 
        <div className='table-background'>
        <form onSubmit={handleSubmit}>
            <div className='add-song-layout'>
                <span className='new-song-label'>Add New Song</span>
                <div className='label-field'>
                    <label className='label-padding'>Title</label>
                    <input data-cy="title-input" className='input-format' type="text" value={title} onChange={(event => setTitle(event.target.value))}/>
                </div>
                <div className='label-field'>
                    <label className='label-padding'>Artist</label>
                    <input data-cy="artist-input" className='input-format' type="text" value={artist} onChange={(event => setArtist(event.target.value))}/>
                </div>
                <div className='label-field'>
                    <label className='label-padding'>Album</label>
                    <input data-cy="album-input" className='input-format' type="text" value={album} onChange={(event => setAlbum(event.target.value))}/>
                </div>
                <div className='label-field'>
                    <label className='label-padding'>Release Date</label>
                    <input data-cy="release_date-input" className='input-format' type="date" value={releaseDate} onChange={(event => setReleaseDate(event.target.value))}/>
                </div>
                <div className='label-field'>
                    <label className='label-padding'>Genre</label>
                    <input data-cy="genre-input" className='input-format' type="text" value={genre} onChange={(event => setGenre(event.target.value))}/>
                </div>
                <div className='label-field'>
                    
                    <label className='label-padding'>Run Time </label>
                    <input data-cy="runtime-input" className='input-format' type="number" value={runtime} onChange={(event => setRuntime(event.target.value))}/>
                </div>
                <button data-cy = "add-song-button" type="submit">Add Song</button>
            </div>
        </form>
        </div>
     );
}
 
export default AddSong;