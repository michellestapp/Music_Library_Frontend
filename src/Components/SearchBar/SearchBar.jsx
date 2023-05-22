import React from 'react';
import './SearchBar.css'

const SearchBar = ({searchInput, setSearchInput}) => {

    

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }


    return (  
       
        <div>
            <form className='search-bar'>
            <span className='search-template'>Search</span>
            <input type='text' onChange = {handleChange} value={searchInput}/>
            <button className='filter'   type='submit'>Clear Filter</button>
            </form>
        </div>
    );
}
 
export default SearchBar;