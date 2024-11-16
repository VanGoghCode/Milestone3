import React, { useState } from 'react';
import './searchAssets.css';
import Header from '../../Components/Header/header';
import Xps from '../../Assets/xps.avif';

function SearchAssets() {
    const [selectedAsset, setSelectedAsset] = useState(null);

    const assets = [
        { id: '123456', location: 'Building A, Room 101', available: true, model: 'Dell XPS 13', image: Xps },
        { id: '789012', location: 'Building B, Room 202', available: false, model: 'Macbook Pro M1' },
        { id: '345678', location: 'Building C, Room 303', available: true, model: 'Lenovo ThinkPad X1 Carbon' },
        { id: '901234', location: 'Building D, Room 404', available: false, model: 'HP Spectre x360' },
        { id: '567890', location: 'Building E, Room 505', available: true, model: 'Asus ROG Strix G15' },
    ];

    const handleRowClick = (asset) => {
        setSelectedAsset(asset);
    };

    return (
        <>
            <Header />
            <div className='search-assets-main'>
                <div className="search-container-top">
                    <h2>Serialized Asset Tracking</h2>
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
                    <div className='bottom-left'>
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
                                {assets.map((asset) => (
                                    <tr key={asset.id} onClick={() => handleRowClick(asset)}>
                                        <td>{asset.id}</td>
                                        <td>{asset.model}</td>
                                        <td>{asset.location}</td>
                                        <td>
                                            {asset.available === true ? (
                                                <>
                                                    <button className="track-button">Track</button>
                                                    <button className="request-button">Request</button>
                                                </>
                                            ) : (
                                                <button className="unavailable-button">Unavailable</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='bottom-right'>
                        {selectedAsset ? (
                            <div className="asset-details">
                                <div>
                                    <h2>Asset Details</h2>
                                    <p><strong>Asset ID:</strong> {selectedAsset.id}</p>
                                    <p><strong>Name:</strong> {selectedAsset.model}</p>
                                    <p><strong>Location:</strong> {selectedAsset.location}</p>
                                    <p>
                                        <strong>Status:</strong>{" "}
                                        {selectedAsset.available === true ? "Available" : "Unavailable"}
                                    </p>
                                    {selectedAsset.available === true ? (
                                        <div>
                                            <button className="track-button">Track</button>
                                            <button className="request-button">Request</button>
                                        </div>
                                    ) : (
                                        <button className="unavailable-button">Unavailable</button>
                                    )}
                                </div>
                                <div className="asset-image">
                                    <img src={selectedAsset?.image} alt="Asset" />
                                </div>
                            </div>
                        ) : (
                            <h2>Select an asset to view details</h2>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchAssets;
