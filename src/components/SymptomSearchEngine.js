import React, { useState } from 'react';
import './Search.css';

function SymptomSearchEngine({ input, data }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewedItems, setViewedItems] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Add the item to the viewedItems array
    setViewedItems((prevItems) => [...prevItems, item.name]);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Display results only when at least 3 letters are typed
  const filteredData = input.length >= 3 ? data.filter(filterByInput) : [];

  function filterByInput(el) {
    return el.text.toLowerCase().includes(input.toLowerCase());
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Symptom Search</h1>

      {/* Display search results */}
      {filteredData.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {paginatedData.map((item) => (
            <li
              key={item.name}
              onClick={() => handleItemClick(item)}
              style={{
                cursor: 'pointer',
                color: viewedItems.includes(item.name) ? '#666' : '#3498db',
                marginBottom: '8px',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                backgroundColor: '#f8f8f8',
                transition: 'background-color 0.3s',
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: 'center', color: '#777' }}>
          No results found. If you are unsure about your symptoms, please consult your doctor.
        </p>
      )}

      {/* Display pagination */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
          style={{ marginRight: '10px' }}
        >
          Previous
        </button>
        <span>{`Page ${currentPage}`}</span>
        <button
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(prevPage + 1, Math.ceil(filteredData.length / itemsPerPage))
            )
          }
          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
          style={{ marginLeft: '10px' }}
        >
          Next
        </button>
      </div>

      {/* Display popup for selected item */}
      {selectedItem && (
        <div className="popup" style={{ textAlign: 'center', marginTop: '20px' }}>
          <div
            className="popup-content"
            style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: '#fff',
            }}
          >
            {/* Display detailed information */}
            <h2 style={{ color: '#333' }}>{selectedItem.text}</h2>
            <p>
              <strong style={{ color: '#3498db' }}>Is Rare:</strong>{' '}
              {selectedItem.IsRare ? 'Yes' : 'No'}
            </p>
            <p>
              <strong style={{ color: '#3498db' }}>Is Gender Specific:</strong>{' '}
              {selectedItem.IsGenderSpecific ? 'Yes' : 'No'}
            </p>
            <p>
              <strong style={{ color: '#3498db' }}>Is Immediately Life-Threatening:</strong>{' '}
              {selectedItem.IsImmLifeThreatening ? 'Yes' : 'No'}
            </p>
            <button
              onClick={closeModal}
              style={{
                padding: '10px',
                backgroundColor: '#3498db',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SymptomSearchEngine;
