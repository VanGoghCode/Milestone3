import React from 'react';
import './searchAssets.css';
import Header from '../../Components/Header/header';

function SearchAssets() {
    return (
        <>
            <Header />
            <div className='search-assets-main'>
                <div className="search-container-top">
                    <h2>Seriealized Asset Tracking</h2>
                    <form className="search-form">
                        <label htmlFor="asset-id">Asset ID:</label>
                        <input type="text" id="asset-id" name="asset-id" placeholder="Enter Asset ID" />

                        <label htmlFor="asset-name">Asset Name:</label>
                        <input type="text" id="asset-name" name="asset-name" placeholder="Enter Asset Name" />

                        <label htmlFor="location">Location:</label>
                        <input type="text" id="location" name="location" placeholder="Enter Location" />
                    </form>
                    <div className='button'>
                    <button type="submit">Search</button>
                    </div>
                </div>
                <div className="search-container-bottom">
                    <table className="search-results-table">
                        <thead>
                            <tr>
                                <th>Asset ID</th>
                                <th>Asset Name</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>123456</td>
                                <td>Laptop</td>
                                <td>Building A, Room 101</td>
                                <td>
                                    <button className="track-button">Track</button>
                                    <button className="request-button">Request</button>
                                </td>
                            </tr>
                            <tr>
                                <td>789012</td>
                                <td>Smartphone</td>
                                <td>Building B, Room 202</td>
                                <td>
                                    <button className="track-button">Track</button>
                                    <button className="request-button">Request</button>
                                </td>
                            </tr>
                            <tr>
                                <td>345678</td>
                                <td>Tablet</td>
                                <td>Building C, Room 303</td>
                                <td>
                                    <button className="track-button">Track</button>
                                    <button className="request-button">Request</button>
                                </td>
                            </tr>
                            <tr>
                                <td>901234</td>
                                <td>Desktop</td>
                                <td>Building D, Room 404</td>
                                <td>
                                    <button className="track-button">Track</button>
                                    <button className="request-button">Request</button>
                                </td>
                            </tr>
                            <tr>
                                <td>567890</td>
                                <td>Printer</td>
                                <td>Building E, Room 505</td>
                                <td>
                                    <button className="track-button">Track</button>
                                    <button className="request-button">Request</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div></>
    );
}

export default SearchAssets;
