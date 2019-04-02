import React from 'react';
import './SearchBar.css';
import person from './person.jpg';
import heart from './heart.png';
import logo from './instagram-logo.png';
import text from './instagram-text-logo.png';
import diamond from './circle-diamond.png';

class SearchBar extends React.Component {

    render() {

        return (

            <header> 
                <div>
                    <img className='search-img'src={logo}/>
                    <img className='text'src={text}/>
                </div>
                
                <input id='search-bar' placeholder='search'></input>
                
                <div>
                    <img className='search-img'src={diamond}/>
                    <img className='search-img'src={heart}/>
                    <img className='search-img'src={person}/>
                </div>
            </header>
        )
    }
}


export default SearchBar;
