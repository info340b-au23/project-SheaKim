import React, { useState } from 'react';
import SymptomSearchEngine from './SymptomSearchEngine';
import Footer from './Footer';
import Header from './Header';
import data from './searchResults.json';
import './Search.css';



function App() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (input) => {
    setSearchInput(input);
  };

  return (
    <div>
      <main className="main">
        <h1>Symptom Search</h1>
        
        {/* Add the input field for the search bar */}
        <input
          type="text"
          placeholder="Search symptoms..."
          value={searchInput}
          onChange={(e) => handleSearchInputChange(e.target.value)}
          className="search"
        />

        {/* Use the SymptomSearchEngine component */}
        <SymptomSearchEngine input={searchInput} data={data} />

      </main>

      {/* Resources section */}
      <div className="resources-container">
        <h2 className="resources-heading">Sickness Resources</h2>
        <p>Here are some helpful resources to guide you when you're not feeling well:</p>
        <ul className="resources-list">
          <li>
            <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer">
              Centers for Disease Control and Prevention (CDC)
            </a>{' '}
            - Stay informed about health guidelines.
          </li>
          <li>
            <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer">
              World Health Organization (WHO)
            </a>{' '}
            - Global health information and updates.
          </li>
          <li>
            <a href="https://www.webmd.com/" target="_blank" rel="noopener noreferrer">
              WebMD
            </a>{' '}
            - Reliable health information and tips.
          </li>
          {/* Add more sources as needed */}
        </ul>
        <p>Remember to consult with a healthcare professional for personalized advice.</p>
      </div>
    </div>
  );
}

export default App;
