import React from 'react';
import './SearchBar.css';
import person from './person.jpg';
import heart from './heart.png';
import logo from './instagram-logo.png';
import text from './instagram-text-logo.png';
import diamond from './circle-diamond.png';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // comments : this.props.data.map()
        }
    }

    // search = (e) => {
    //     e.preventDefault();
    //     // console.dir(e.target.children[0].value);
    //     console.log('searching...');
    //     const user = this.props.data.filter(post => post.username === e.target.children[0].value);
    //     const id = user[0].id;
    // }

    render() {
        return (

            <header> 
                <div>
                    <img className='search-img'src={logo}/>
                    <img className='text'src={text}/>
                </div>
                <form onSubmit={this.props.search}>
                <input id='search-bar' placeholder='search'></input>
                </form>
                
                
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
