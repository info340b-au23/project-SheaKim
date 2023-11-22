import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const SymptomSearchEngine = ({ logs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    // Update results whenever logs or searchTerm changes
    setSearching(true);

    const filteredResults = logs.filter((log) =>
      log.symptoms.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);
    setSearching(false);
  }, [logs, searchTerm]);

  return (
    <div className="app-container">
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter symptoms to search"
          className="search-input"
        />
        <button onClick={() => setSearching(true)} disabled={searching} className="search-button">
          {searching ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Add some spacing for better readability */}
      <div style={{ margin: '20px 0' }}></div>

      <div className="results-container">
        {searching && <p className="search-status">Searching for symptoms...</p>}
        {!searching && results.length > 0 && (
          <>
            <h2 className="results-heading">Search Results</h2>
            <ul className="results-list">
              {results.map((result, index) => (
                <li key={index} className="result-item">
                  <strong>Symptoms:</strong> {result.symptoms}
                  <br />
                  <strong>Description:</strong> {result.description}
                  <br />
                  <strong>Date:</strong> {result.date}
                </li>
              ))}
            </ul>
          </>
        )}
        {!searching && results.length === 0 && searchTerm && (
          <p className="no-results">No matching symptoms found.</p>
        )}

        <div className="resources-container">
          <h2 className="resources-heading">Sickness Resources</h2>
          <p>Here are some helpful resources to guide you when you're not feeling well:</p>
          <ul className="resources-list">
            <li><a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer">Centers for Disease Control and Prevention (CDC)</a> - Stay informed about health guidelines.</li>
            <li><a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">World Health Organization (WHO)</a> - Global health information and updates.</li>
            <li><a href="https://www.webmd.com/" target="_blank" rel="noopener noreferrer">WebMD</a> - Reliable health information and tips.</li>
            {/* Add more sources as needed */}
          </ul>
          <p>Remember to consult with a healthcare professional for personalized advice.</p>
        </div>
      </div>
    </div>
  );
};

export default SymptomSearchEngine;
