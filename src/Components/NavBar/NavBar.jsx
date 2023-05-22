import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css'


const NavBar = ({searchInput, setSearchInput}) => {

    return (  
        <nav>
            <div className='nav-template'>
                <div className='logo-box'>
                    <h2 className='padding'>Music</h2>
                    <img className='logo'   src='/Elements/music-icon.jpg' alt="music_logo"/>
                    <h2 className='padding'>Library</h2>
                </div>
                <div className='logo-box'>
                <SearchBar searchInput = {searchInput} setSearchInput = {setSearchInput} />
                </div>
            </div>

        </nav>
    );
}
 
export default NavBar;