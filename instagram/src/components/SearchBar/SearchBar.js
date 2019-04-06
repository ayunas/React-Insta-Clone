import React from 'react';
import './SearchBar.css';
import person from './person.jpg';
import heart from './heart.png';
import logo from './instagram-logo.png';
import text from './instagram-text-logo.png';
import diamond from './circle-diamond.png';
import styled from 'styled-components';

const Heady = styled.header`
display: flex;
justify-content: space-between;
`;

const Inputy = styled.input`
width: 400px;
color: green;
text-align: center;
`;

const Imgy = styled.image`
    width: 40px;
    margin: 0 20px;
    
`;


class SearchBar extends React.Component {

    render() {
        return (

            <Heady> 
                <div>
                    <img className='search-img'src={logo}/>
                    <img className='text'src={text}/>
                </div>

                <form onSubmit={this.props.search}>
                <Inputy id='search-bar' placeholder='search'></Inputy>
                </form>
                
                <div>
                    <img className='search-img'src={diamond}/>
                    <img className='search-img'src={heart}/>
                    <img className='search-img'src={person}/>
                </div>
            </Heady>
        )
    }
}


export default SearchBar;
