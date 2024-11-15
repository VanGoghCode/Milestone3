import React from 'react';
import './searchAssets.css';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import Header from '../../Components/Header/header';

function SearchAssets() {
    return (
        <>
            <Header />
            <div className='search-assets-main'>
                <div className="search-container">
                    <h2>Search Assets</h2>
                    <form className="search-form">
                        <label htmlFor="asset-id">Asset ID:</label>
                        <input type="text" id="asset-id" name="asset-id" placeholder="Enter Asset ID" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div></>
    );
}

export default SearchAssets;
