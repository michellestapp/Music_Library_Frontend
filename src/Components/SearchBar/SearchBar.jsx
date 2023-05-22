import React from 'react';

const SearchBar = (props) => {

    

    const handleChange = (e) => {
        e.preventDefault();
        props.setSearchInput(e.target.value);
    }


    return (  
       
        <div>
            <form>
            <label>Search</label>
            <input type='text' onChange = {handleChange} value={props.searchInput}/>
            <button type='submit'>Clear Filter</button>
            </form>
        </div>
    );
}
 
export default SearchBar;