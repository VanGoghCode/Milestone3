import React from "react";
import "../TrackRequest/trackRequest.css";
import Header from "../../Components/Header/header";

const assets = [
    {
        employeeid: "4564856",
        requestid: "REQ-1731795470843",
    },
    {
        employeeid: "629515",
        requestid: "REQ-1731795470843",
    },
    {
        employeeid: "4564856",
        requestid: "REQ-1731795470843",
    },
    {
        employeeid: "629515",
        requestid: "REQ-1731795470843",
    }
]

const FulfillRequest = () => {

    return (
        <>
            <Header />
            <div className="asset-inventory-main">
                <div className="search-container-top">
                    <h2>Pending Request</h2>
                </div>

                <div className="search-container-bottom">
                    <div className="bottom-left">
                        <table className="search-results-table">
                            <thead>
                                <tr>
                                    <th>Emp ID</th>
                                    <th>Req ID</th>
                                    <th>Assign</th>
                                </tr>
                            </thead>
                            <tbody>

                                {assets.map((asset) => (
                                    <tr key={asset.employeeid}>
                                        <td>{asset.employeeid}</td>
                                        <td>{asset.requestid}</td>
                                        <td>
                                            <button className="assign-button">Assign</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FulfillRequest;
