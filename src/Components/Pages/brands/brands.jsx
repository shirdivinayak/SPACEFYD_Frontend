import React, { useState, useRef, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import AlertMessage from "../../common/MessageAlert";

const BrandTable = () => {
  const navigate = useNavigate();
 
  const brandData = [
    {
      id: `#56674`,
        brand:'Nike'
    },
    {
      id: `#56675`,
      brand:'addidas'
    },
    {
      id: `#56676`,
      brand:'puma'
    },
    {
      id: `#56677`,
      brand:'cat'
    },
    {
      id: `#56678`,
      brand:'lousisee vitten',
    },
    {
      id: `#56679`,
      brand:'GC'
    },
    {
      id: `#56680`,
     brand:'redd'
    },
    {
      id: `#56681`,
      brand:'redtape'
    },
    {
      id: `#56682`,
      brand:'whitefox'
    },
    {
      id: `#56683`,
      brand:'lenn'
    },
  ];
  

  const [items, setItems] = useState(brandData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [message, setMessage] = useState("");
  const tabsRef = useRef(null);


  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);


  const handleEdit = (brand) => {
    navigate('/products/AddProduct', { state: { item: brand } });
  };

  const handleAdd = (brand) => {
    navigate('/brand/AddBrand', { state: { item: brand } });
  };


  
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

  const handleRemoveSelected = () => {
    if (selectedItems.length > 0) {
      const updatedItems = items.filter(
        (item) => !selectedItems.includes(item.id)
      );
      setItems(updatedItems);
      setMessage(`${selectedItems.length} item removed`);
      setSelectedItems([]);
    } else {
      setMessage("No items selected to remove.");
    }
  };



  return (
    <div className="container " style={{ padding: "0" }}>
      <div
        className="d-flex justify-content-between align-items-center p-4"
        style={{ backgroundColor: "white", minHeight: "70px", padding: "0" }}
      >
        <h4
          className="d-flex align-items-center mb-0 m-0"
          style={{ fontSize: "20px" }}
        >
          <Nav.Link as={Link} to="/" className="me-2 opacity-50">
            Home
          </Nav.Link>
          <span> &gt; </span> {/* This ensures the ">" symbol is inline */}
          <span className="ms-2">Brands</span>
        </h4>

        <Button
          height="12px"
          onClick={() => handleAdd()}
          variant="primary" // Keeps the button style, but we'll override the color
          className="text-white"
          style={{
            backgroundColor: "#184BD3", // Replace with any custom color (example: orange-red)
            border: "none", // Match border color to the background color
          }}
        >
          <i className="bi bi-plus-circle"></i> Add brand
        </Button>
      </div>

      {/* Add a custom gap here */}
      <div style={{ marginTop: "22px" }}></div>

   
      {/* brand Table */}
      <div className="  mx-4 px-4" style={{ backgroundColor: "white" }}>
        <Table hover responsive>
          <thead>
            <tr>
              <th
                style={{
                  height: "60px",
                  width:"5%",

                  padding: "20px 10px",
                  borderBottom: true,
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#474747",
                }}
              >
                <Form.Check
                  type="checkbox"
                  onChange={handleSelectAll}
                  style={{
                    transform: "scale(1.2)", // Scale the checkbox size
                    fontSize:"20px",
                    paddingLeft:"10px"


                  }}
                />
              </th>
              
              <th
                style={{
                    width:"50%",
                  height: "60px",
                  padding: "20px 10px",
                  borderBottom: true,
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#474747",
                }}
              >
                Name
              </th>
              <th
                style={{
                    width:"10%",
                  height: "60px",
                  padding: "20px 10px",
                  borderBottom: true,
                  fontWeight: 500,
                  fontSize: 14,
                  color: "#474747",
                }}
              >
                
              </th>
            </tr>
          </thead>
          <tbody>
            {brandData.map((item) => (
              <tr key={item.id}>
                <td style={{ borderBottom: true }}>
                  <Form.Check
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    style={{
                      transform: "scale(1.2)", // Scale the checkbox size
                      fontSize:"20px",
                      paddingLeft:"10px"


                    }}
                  />
                </td>
                <td style={{ borderBottom: true }}>{item.brand}</td>
               
                <td style={{ borderBottom: true }}>
                  <Button
                    size="sm"
                    onClick={() => handleEdit(item)}
                    style={{
                      color: "blue", // Text color
                      backgroundColor: "transparent", // Background color set to transparent
                      border: "none", // Remove the border if needed
                      // Adjust this to change the size of the text "Edit"
                    }}
                  >
                    <i
                      className="bi bi-pencil"
                      style={{ color: "blue", fontSize: "20px" }}
                    ></i>{" "}
                    {/* Increase icon size */}
                    <span style={{ fontWeight: 500, fontSize: "16px" }}>
                      {" "}
                      Edit
                    </span>{" "}
                    {/* Increase text size */}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/*message section*/}
      <AlertMessage message={message} />


      {/* Footer section */}
      {selectedItems.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "81%",
            backgroundColor: "#f8f9fa",
            padding: "0px 20px",
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #ddd",
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)", // Adjusted to remove side shadows
            height: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1220px",
            }}
          >
            {/* Left: Number of selected items */}
            <span
              style={{ color: "#011140", fontWeight: 500, fontSize: "22px" }}
            >
              {selectedItems.length} Selected
            </span>

            {/* Right: Remove button */}
            <div>
              <Button
                onClick={handleRemoveSelected}
                style={{
                  backgroundColor: "rgba(194, 0, 0, 0.6)", // 60% opacity
                  border: "none", // Match border color to the background color
                }}
              >
                <i className="bi bi-trash" style={{ marginRight: "15px" }}></i>
                Remove
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandTable;
