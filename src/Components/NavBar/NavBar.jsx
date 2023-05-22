import React from 'react';
import SearchBar from '../SearchBar/SearchBar';


const NavBar = (props) => {

    return (  
        <nav>
            <div>
                <div>Music</div>
                <img src='/Elements/music-icon.jpg' alt="music_logo"/>
                <div>Library</div>
                <div>
                <SearchBar searchInput = {props.searchInput} setSearchInput = {props.setSearchInput} />
                </div>
            </div>

        </nav>
    );
}
 
export default NavBar;