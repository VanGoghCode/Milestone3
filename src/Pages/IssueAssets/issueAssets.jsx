import React from "react";
import "../TrackRequest/trackRequest.css";
import Header from "../../Components/Header/header";

function IssueInventoryItems() {
    return (
        <>
            <Header />
            <div className="search-container-top">
                <h2>Issue Inventory Items</h2>
                <form className="search-form">
                    <div className="search-form-search">
                        <div>
                            <label htmlFor="employee-id">Employee ID</label>
                            <input
                                type="text"
                                id="employee-id"
                                name="employee-id"
                                placeholder="Enter Employee ID"
                            />
                        </div>
                        <div>
                            <label htmlFor="request-date">Date Of Request</label>
                            <input
                                type="date"
                                id="request-date"
                                name="request-date"
                            />
                        </div>
                        <div>
                            <label htmlFor="location">Stockroom Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Enter Stockroom Location"
                            />
                        </div>
                        <div>
                            <label htmlFor="asset-type">Asset Type</label>
                            <input
                                type="text"
                                id="asset-type"
                                name="asset-type"
                                placeholder="Enter Asset Type"
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <button type="submit">Allocate Asset</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default IssueInventoryItems;
