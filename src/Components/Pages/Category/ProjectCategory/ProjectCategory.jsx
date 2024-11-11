import React from 'react';
import './ProjectCategory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'; // Import faPlus

function Categories() {
  return (
    <div className="categories-container">
      <div className="add-more-container">
        <span className="add-more-text">Add more</span>
        <div className="add-more-icon">
          <FontAwesomeIcon icon={faPlus} /> {/* Render the "+" icon */}
        </div>
      </div>
      <div className="table-container">
        <table className="category-table">
          <thead>
            <tr>
              <th className="category-column">
                <input type="checkbox" className="header-checkbox" /> Category
              </th>
              
            </tr>
          </thead>
          <tbody>
            {Array(7).fill().map((_, index) => (
              <tr key={index}>
                <td>
                  <div className="category-row">
                    <input type="checkbox" className="category-checkbox" />
                    <span>Furniture</span>
                  </div>
                </td>
                <td>
                  <button className="edit-btn">
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Categories;
