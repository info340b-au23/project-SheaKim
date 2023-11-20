import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header'

const SymptomSearchEngine = ({ logs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);

    // Simulating an asynchronous search operation
    setTimeout(() => {
      // Implement search logic using 'logs' data
      // For now, let's just filter logs based on the search term
      const filteredResults = logs.filter((log) =>
        log.symptoms.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setResults(filteredResults);
      setSearching(false);
    }, 1000); // Simulating a delay for a more interactive feel
  };

  return (
    <div className="SymptomSearchEngine">
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter symptoms to search"
        />
        <button onClick={handleSearch} disabled={searching}>
          {searching ? 'Searching...' : 'Search'}
        </button>
      </div>
      <div>
        {searching && <p>Searching for symptoms...</p>}
        {!searching && results.length > 0 && (
          <>
            <h2>Search Results</h2>
            <ul>
              {results.map((result, index) => (
                <li key={index}>
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
          <p>No matching symptoms found.</p>
        )}

        {/* Add linked sources from your draft */}
        <h2>Sickness Resources</h2>
        <p>Here are some helpful resources to guide you when you're not feeling well:</p>
        <ul>
          <li><a href="https://www.cdc.gov/" target="_blank">Centers for Disease Control and Prevention (CDC)</a> - Stay informed about health guidelines.</li>
          <li><a href="https://www.who.int/" target="_blank">World Health Organization (WHO)</a> - Global health information and updates.</li>
          <li><a href="https://www.webmd.com/" target="_blank">WebMD</a> - Reliable health information and tips.</li>
          {/* Add more sources as needed */}
        </ul>
        <p>Remember to consult with a healthcare professional for personalized advice.</p>
      </div>
    </div>
  );
};

export default SymptomSearchEngine;
