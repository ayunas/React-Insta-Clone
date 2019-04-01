import React from 'react';
import person from './person.jpg';
import heart from './heart.png';
import logo from './instagram-logo.png';
import text from './instagram-text-logo.png';
import diamond from './circle-diamond.png';

class SearchBar extends React.Component {

    render() {

        return (
            
            <header> 
                <img src={logo}/>
                <img src={text}/>
                <div>search</div>
                <img src={diamond}/>
                <img src={heart}/>
                <img src={person}/>
            </header>
        )
    }
}


export default SearchBar;
