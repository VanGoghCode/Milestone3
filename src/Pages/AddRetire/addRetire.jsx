import React from "react";
import "../TrackRequest/trackRequest.css";
import Header from "../../Components/Header/header";

function AddRetire() {
    return (
        <>
            <Header />
            <div className="search-container-top">
                <h2>Asset Entry</h2>
                <form className="search-form">
                    <div className="search-form-search">
                        <div>
                            <label htmlFor="serial-number">Serial Number</label>
                            <input
                                type="text"
                                id="serial-number"
                                name="serial-number"
                                placeholder="Enter Serial Number"
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
                        <div>
                            <label htmlFor="model">Model</label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                placeholder="Enter Model"
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <button type="submit">Add Asset</button>
                    </div>
                </form>
            </div>

            <div className="search-container-top" style={{ marginTop: "30px" }}>
                <h2>Retire Asset</h2>
                <form className="search-form">
                    <div className="search-form-search">
                        <div>
                            <label htmlFor="retire-serial-number">Serial Number</label>
                            <input
                                type="text"
                                id="retire-serial-number"
                                name="retire-serial-number"
                                placeholder="Enter Serial Number"
                            />
                        </div>
                    </div>
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <button type="submit">Delete Asset</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddRetire;
