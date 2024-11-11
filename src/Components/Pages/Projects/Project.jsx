import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Project.css';

const ProjectTable = () => {
  const categories = [
    "All Projects", "Furniture", "Plants", "Decorations", "Living", "Dining", "Lighting", "Outdoor", "Storage", "On Sale"
  ];

  const productData = [
    {
      id: 1,
      name: "Rigo Solid Wood",
      category: "Furniture",
      location: "Seating",
      sqrft: "400 sqft", // Ensure that the sqrft is in the correct format
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Luxe Sofa",
      category: "Living",
      location: "Living Room",
      sqrft: "300 sqft", // Similarly, correct this data
      image: "https://via.placeholder.com/50",
    }
    // Add more product data as needed
  ];

  const [items] = useState(productData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [isOnLive, setIsOnLive] = useState(false);
  const tabsRef = useRef(null);

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleGlobalToggle = () => {
    setIsOnLive((prevIsOnLive) => !prevIsOnLive);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'right' ? 100 : -100;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-page">
      <div className="table-frame">
        <div className="tabs" ref={tabsRef}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`tab ${selectedCategory === category ? 'active' : ''} ${index === categories.length - 1 ? 'last-tab' : ''}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="arrows">
          <div className="arrow left" onClick={() => scrollTabs('left')}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="arrow right" onClick={() => scrollTabs('right')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedItems.length === items.length && items.length > 0}
              />
            </th>
            <th>Name</th>
            <th>Image</th>
            <th>Category</th>
            <th>Location</th>
            <th>Sqrft</th>
            <th>
              <div className="global-toggle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isOnLive}
                    onChange={handleGlobalToggle}
                  />
                  <span className="slider round"></span>
                </label>
                <span>{isOnLive ? "Live" : "Offline"}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              className={selectedItems.includes(item.id) ? 'selected-row' : ''}
            >
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.name}</td>
              <td><img src={item.image} alt={item.name} className="product-image" /></td>
              <td>{item.category}</td>
              <td>{item.location}</td> {/* This will display location */}
              <td>{item.sqrft}</td> {/* This will display sqrft */}
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
  );
};

export default ProjectTable;
