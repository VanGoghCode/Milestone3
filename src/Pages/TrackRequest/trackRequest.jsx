import React, { useState } from 'react';
import './trackRequest.css';
import Header from '../../Components/Header/header';

function TrackRequest() {
    const [searchId, setSearchId] = useState('');
    const requests = [
        { id: 'REQ-001', requestBy: 'John Doe', requestDate: '2024-11-10', fulfillmentDate: '2024-11-15' },
        { id: 'REQ-002', requestBy: 'Jane Smith', requestDate: '2024-11-11', fulfillmentDate: '2024-11-16' },
        { id: 'REQ-003', requestBy: 'Alice Johnson', requestDate: '2024-11-12', fulfillmentDate: 'Pending' },
        { id: 'REQ-004', requestBy: 'Bob Brown', requestDate: '2024-11-13', fulfillmentDate: '2024-11-18' },
        { id: 'REQ-005', requestBy: 'Charlie Davis', requestDate: '2024-11-14', fulfillmentDate: 'Pending' },
    ];
    const [filteredRequests, setFilteredRequests] = useState(requests);


    const handleSearch = () => {
        const idQuery = searchId.trim().toLowerCase();

        const searchResult = requests.filter((request) => {
            const idMatches = idQuery === '' || request.id.toLowerCase().includes(idQuery);
            return idMatches;
        });

        setFilteredRequests(searchResult.length > 0 ? searchResult : []);
    };

    return (
        <>
            <Header />
            <div className='asset-inventory-main'>
                <div className="search-container-top">
                    <h2>Track Requests</h2>
                    <form className="search-form">
                        <div className='search-form-search'>
                            <label htmlFor="search-request-id">Search Request by ID:</label>
                            <input
                                type="text"
                                id="search-request-id"
                                name="search-request-id"
                                placeholder="Enter Request ID"
                                value={searchId}
                                onChange={(e) => setSearchId(e.target.value)}
                            />
                        </div>
                        <button style={{ minWidth: '20%'}}  type="button" onClick={handleSearch}>Search</button>
                    </form>
                </div>
                <div className="search-container-bottom">
                    <div className='bottom-left'>
                        <table className="search-results-table">
                            <thead>
                                <tr>
                                    <th>Request ID</th>
                                    <th>Request By</th>
                                    <th>Date of Request Raised</th>
                                    <th>Fulfillment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredRequests.length > 0 ? (
                                    filteredRequests.map((request) => (
                                        <tr key={request.id}>
                                            <td>{request.id}</td>
                                            <td>{request.requestBy}</td>
                                            <td>{request.requestDate}</td>
                                            <td>{request.fulfillmentDate}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center' }}>
                                            No requests found with the searched criteria
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrackRequest;
