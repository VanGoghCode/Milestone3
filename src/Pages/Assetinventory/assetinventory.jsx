import React, { useState } from "react";
import "../TrackRequest/trackRequest.css";
import Xps from "../../Assets/xps.avif";
import M1 from "../../Assets/m1.png";
import Header from "../../Components/Header/header";

// Mock data: Asset details
const assets = [
    {
        id: "123456",
        item: "Dell XPS 13",
        location: "Building A, Room 101",
        stockroomManager: "John Doe",
        securityControlOption: "RFID Lock",
        quantity: 10,
        image: Xps,
    },
    {
        id: "789012",
        item: "Macbook Pro M1",
        location: "Building B, Room 202",
        stockroomManager: "Jane Smith",
        securityControlOption: "Biometric Lock",
        quantity: 5,
        image: M1,
    },
    {
        id: "345678",
        item: "Lenovo ThinkPad X1 Carbon",
        location: "Building C, Room 303",
        stockroomManager: "Robert Johnson",
        securityControlOption: "Keypad Lock",
        quantity: 8,
        image: null, // No image available
    },
    {
        id: "901234",
        item: "HP Spectre x360",
        location: "Building D, Room 404",
        stockroomManager: "Emily Davis",
        securityControlOption: "Camera Surveillance",
        quantity: 4,
        image: null, // No image available
    },
    {
        id: "567890",
        item: "Asus ROG Strix G15",
        location: "Building E, Room 505",
        stockroomManager: "Michael Wilson",
        securityControlOption: "RFID Lock",
        quantity: 12,
        image: null, // No image available
    },
];


const AssetInventory = () => {
    const [searchId, setSearchId] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();

        // Filter assets by ID
        const filteredResults = assets.filter((asset) => asset.id === searchId);
        setResults(filteredResults);
    };

    return (
        <>
        <Header />
        <div className="asset-inventory-main">
            <div className="search-container-top">
                <h2>Asset Inventory</h2>
                <form className="search-form" onSubmit={handleSearch}>
                    <div className="search-form-search">
                        <label htmlFor="search-id">Search Asset by ID:</label>
                        <input
                            type="text"
                            id="search-id"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                            placeholder="Enter Asset ID"
                        />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>

            <div className="search-container-bottom">
                <div className="bottom-left">
                    <table className="search-results-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Model</th>
                                <th>Stockroom Manager</th>
                                <th>Security Control Option</th>
                                <th>Location</th>
                                <th>Availability</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.length > 0 ? (
                                results.map((asset) => (
                                    <tr key={asset.id}>
                                        <td>{asset.id}</td>
                                        <td>{asset.item}</td>
                                        <td>{asset.stockroomManager}</td>
                                        <td>{asset.securityControlOption}</td>
                                        <td>{asset.location}</td>
                                        <td>{asset.quantity}</td>
                                        <td>
                                            {asset.image ? (
                                                <img src={asset.image} alt={asset.model} style={{ width: "50px" }} />
                                            ) : (
                                                "No image"
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                assets.map((asset) => (
                                    <tr key={asset.id}>
                                        <td>{asset.id}</td>
                                        <td>{asset.item}</td>
                                        <td>{asset.stockroomManager}</td>
                                        <td>{asset.securityControlOption}</td>
                                        <td>{asset.location}</td>
                                        <td>{asset.quantity}</td>
                                        <td>
                                            {asset.image ? (
                                                <img src={asset.image} alt={asset.model} style={{ width: "50px" }} />
                                            ) : (
                                                "No image"
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
};

export default AssetInventory;
