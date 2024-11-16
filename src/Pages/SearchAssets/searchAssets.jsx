import React, { useState } from 'react';
import './searchAssets.css';
import Header from '../../Components/Header/header';
import Xps from '../../Assets/xps.avif';
import M1 from '../../Assets/m1.png';

function SearchAssets() {
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [requestId, setRequestId] = useState(null);
    const [searchId, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');
    const assets = [
        { id: '123456', location: 'Building A, Room 101', available: true, model: 'Dell XPS 13', image: Xps },
        { id: '789012', location: 'Building B, Room 202', available: false, model: 'Macbook Pro M1', image: M1 },
        { id: '345678', location: 'Building C, Room 303', available: true, model: 'Lenovo ThinkPad X1 Carbon' },
        { id: '901234', location: 'Building D, Room 404', available: false, model: 'HP Spectre x360' },
        { id: '567890', location: 'Building E, Room 505', available: true, model: 'Asus ROG Strix G15' },
    ];
    const [filteredAssets, setFilteredAssets] = useState(assets);


    const handleRowClick = (asset) => {
        setSelectedAsset(asset);
        setRequestId(null);
    };

    const handleRequestClick = () => {
        const generatedRequestId = `REQ-${Date.now()}`;
        setRequestId(generatedRequestId);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(requestId);
        alert("Request ID copied to clipboard!");
    };

    const handleSearch = () => {
        const idQuery = searchId.trim().toLowerCase();
        const nameQuery = searchName.trim().toLowerCase();

        const searchResult = assets.filter((asset) => {
            const idMatches = idQuery === '' || asset.id.toLowerCase().includes(idQuery);
            const nameMatches = nameQuery === '' || asset.model.toLowerCase().includes(nameQuery);
            return idMatches && nameMatches;
        });

        setFilteredAssets(searchResult.length > 0 ? searchResult : []);
    };

    return (
        <>
            <Header />
            <div className='search-assets-main'>
                <div className="search-container-top">
                    <h2>Serialized Asset Tracking</h2>
                    <form className="search-form">
                        <label htmlFor="search-asset-id">Search Asset ID:</label>
                        <input
                            type="text"
                            id="search-asset-id"
                            name="search-asset-id"
                            placeholder="Enter Asset ID"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                        />

                        <label htmlFor="search-asset-name">Search Asset Name:</label>
                        <input
                            type="text"
                            id="search-asset-name"
                            name="search-asset-name"
                            placeholder="Enter Asset Name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />

                        <button type="button" onClick={handleSearch}>Search</button>
                    </form>
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
                                {filteredAssets.length > 0 ? (
                                    filteredAssets.map((asset) => (
                                        <tr
                                            key={asset.id}
                                            className={selectedAsset?.id === asset.id ? 'selected-row' : ''}
                                            onClick={() => handleRowClick(asset)}
                                        >
                                            <td>{asset.id}</td>
                                            <td>{asset.model}</td>
                                            <td>{asset.location}</td>
                                            <td>
                                                {asset.available ? (
                                                    <>
                                                        <button className="track-button">Track</button>
                                                        <button className="request-button" onClick={handleRequestClick}>
                                                            Request
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button className="unavailable-button">Unavailable</button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center' }}>
                                            No asset available with the searched ID or Name
                                        </td>
                                    </tr>
                                )}
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
                                        <strong>Status:</strong> {selectedAsset.available ? "Available" : "Unavailable"}
                                    </p>
                                    {selectedAsset.available && (
                                        <>
                                            <button className="track-button">Track</button>
                                            <button className="request-button" onClick={handleRequestClick}>
                                                Request
                                            </button>
                                        </>
                                    )}
                                    {requestId && (
                                        <div className="request-id-section">
                                            <p><strong>Request ID:</strong> <div>{requestId}</div></p>
                                            <button className="copy-button" onClick={copyToClipboard}>
                                                Copy
                                            </button>
                                        </div>
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
