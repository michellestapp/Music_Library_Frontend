import React from 'react';


const NavBar = (props) => {

    // const[search, setSearch] = useState('');

    return (  
        <nav>
            <div>
                <div>Music</div>
                <img src='/Elements/music-icon.jpg'/>
                <div>Library</div>
            </div>
            <div>
                <input type='text'></input>
            </div>
        </nav>
    );
}
 
export default NavBar;