import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Modal, Image, Alert, Nav } from 'react-bootstrap';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function ProductEdit() {
  const placeholderImage = 'https://via.placeholder.com/50'; // Placeholder image URL

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('/assets/image 7.png');
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [isEditing, setIsEditing] = useState(false); // New state for edit mode
  
  // Product data state
  const [productName, setProductName] = useState("Familia Soft Chair");
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet...");
  
  // Saved values to reset on cancel
  const [savedProductName, setSavedProductName] = useState("Familia Soft Chair");
  const [savedDescription, setSavedDescription] = useState("Lorem ipsum dolor sit amet...");

  const [thumbnails, setThumbnails] = useState([
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpeg'
  ]);

  const handleShowModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleImageClick = (image) => {
    handleShowModal(image); // Open modal with the selected image
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSaveChanges = () => {
    setIsEditing(false);
    setShowSuccessMessage(true);
    setSavedProductName(productName);
    setSavedDescription(description);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setProductName(savedProductName);
    setDescription(savedDescription);
    setSelectedImage('/assets/image 7.png');
  };

  const handleRemoveCoverImage = () => {
    setSelectedImage(placeholderImage);
    setIsEditing(true);
  };

  const handleRemoveThumbnail = (index) => {
    const newThumbnails = thumbnails.filter((_, thumbIndex) => thumbIndex !== index);
    setThumbnails(newThumbnails);
    setIsEditing(true);
  };

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setIsEditing(true);
  };
  
  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <>
        <div className="d-flex justify-content-between align-items-center p-4" style={{ backgroundColor: "white", minHeight: "70px" }}>
          <h4 className="d-flex align-items-center mb-0 m-0" style={{ fontSize: "20px" }}>
            <Nav.Link as={Link} to="/" className="me-2 opacity-50">Home</Nav.Link>
            <span> &gt; </span>
            <span className="ms-2">All Products</span>
          </h4>
        </div>

        <Container className="p-4" style={{
          top: '215px',
          left: '308px',
          height: '718px',
          width: '1090px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'absolute'
        }}>
          <Form>
            <Row className="mt-4">
              <Col md={6}>
                <Form.Group controlId="productName" className="mb-3">
                  <Form.Label style={{   width: '135px',
    height: '20px',
    top:'36px',
    left: '54px',
    fontFamily: 'Outfit',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20.16px',
     color: '#47474782' }}>New Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={productName}
                    onChange={handleInputChange(setProductName)}
                    placeholder="Familia Soft Chair"
                    style={{ width: '480px', borderRadius: '4px', border: '1px solid #E0E0E0',color:'#474747' }}
                  />
                </Form.Group>

                <Form.Group controlId="description" className="mb-3">
                  <Form.Label style={{ fontSize: '16px', color: '#47474782' }}>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={description}
                    onChange={handleInputChange(setDescription)}
                    placeholder="Lorem ipsum dolor sit amet..."
                    style={{ width: '480px', borderRadius: '4px', border: '1px solid #E0E0E0',color:'#474747' }}
                  />
                </Form.Group>
                <Form.Group controlId="category" className="mb-3">
  <Form.Label style={{
    width: '68px',
    height: '20px',
    top:'329px',
    left: '54px',
    fontFamily: 'Outfit',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20.16px',
    textAlign: 'left',
    color: '#47474782',
    position: 'absolute'
  }}>
    Category
  </Form.Label>
  <Form.Control
    as="select"
    style={{
      width: '231px',
      height: '40px',
      top: '357px',
      left: '54px',
      padding: '6px 12px',
      borderRadius: '4px 0px 0px 0px',
      border: '1px solid #E0E0E0',
      color: '#474747',
      position: 'absolute'
    }}
    value="Furniture"
  >
    <option>select</option>
   
  </Form.Control>
  <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
    <i className="bi bi-caret-down-fill" style={{ fontSize: '16px', color: '#474747' }}></i>
  </div>
</Form.Group>

<Form.Group controlId="subcategory" className="mb-3">
  <Form.Label style={{
    width: '97px',
    height: '20px',
    top:'329px',
    left:"303px",
    fontFamily: 'Outfit',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20.16px',
    textAlign: 'left',
    color: '#47474782',
    position: 'absolute'
  }}>
    Subcategory
  </Form.Label>
  <Form.Control
    as="select"
    style={{
      width: '231px',
      height: '40px',
      top: '357px',
      left: '303px',
      padding: '6px 12px',
      borderRadius: '4px 0px 0px 0px',
      border: '1px solid #E0E0E0',
      color: '##474747',
      position: 'absolute'
    }}
    value="Living"
  >
    <option>select</option>
    
  </Form.Control>
  <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
    <i className="bi bi-caret-down-fill" style={{ fontSize: '16px', color: '#474747' }}></i>
  </div>
</Form.Group>

<Form.Group controlId="brand" className="mb-3">
  <Form.Label style={{
    width: '44px',
    height: '20px',
    top:'415px',
    left:'54px',

    fontFamily: 'Outfit',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20.16px',
    textAlign: 'left',
    color: '#47474782',
    position: 'absolute'
  }}>
    Brand
  </Form.Label>
  <Form.Control
    as="select"
    style={{
      width: '231px',
      height: '40px',
      top: '443px',
      left: '54px',
      padding: '6px 12px',
      borderRadius: '4px 0px 0px 0px',
      border: '1px solid #E0E0E0',
      color: '#474747',
      position: 'absolute'
    }}
    value="Modern"
  >
    <option>select</option>
    
  </Form.Control>
  <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
    <i className="bi bi-caret-down-fill" style={{ fontSize: '16px', color: '#474747' }}></i>
  </div>
</Form.Group>
<Form.Group controlId="productCode" className="mb-3">
  <Form.Label style={{
    width: '98px',
    height: '20px',
    top: '415px',
    left: '303px',
    fontFamily: 'Outfit',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20.16px',
    textAlign: 'left',
    color: '#47474782',
    
    position: 'absolute'
  }}>
    Product Code
  </Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter Product Code"
    style={{
      width: '231px',
      height: '40px',
      top: '443px',
      left: '303px',
      padding: '6px 12px',
      borderRadius: '4px 0px 0px 0px',
      border: '1px solid #E0E0E0',
      color:'#474747',
      fontFamily: 'Outfit',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
      position: 'absolute'
    }}
  />
</Form.Group>
<Form.Group controlId="displayInHomeScreen" className="mb-3" style={{ position: 'absolute', top: '510px', left: '54px' }}>
  <Form.Label style={{
    width: '480px',
    height: '40px',
    top:'510px',
    left:'54px',
    fontFamily: 'Outfit',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    textAlign: 'left',
    color: '#474747',
    
    padding: '6px 12px',
    borderRadius: '4px 0px 0px 0px',
    border: '1px solid #E0E0E0',
    display: 'flex',
    alignItems: 'center'
  }}>
    Size of Display in Home Screen
    <Form.Check type="checkbox" style={{
      width: '20px',
      height: '20px',
      marginLeft: 'auto',
      opacity: '1'
    }}/>
  </Form.Label>
</Form.Group>

<Form.Group controlId="displayInTrendingSection" className="mb-3" style={{ position: 'absolute', top: '568px', left: '54px' }}>
  <Form.Label style={{
    width: '480px',
    height: '40px',
        top:'568px',
    left:'54px',
    fontFamily: 'Outfit',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    textAlign: 'left',
    color: '#474747',
    
    padding: '6px 12px',
    borderRadius: '4px 0px 0px 0px',
    border: '1px solid #E0E0E0',
    display: 'flex',
    alignItems: 'center'
  }}>
    Size of Display in Home Screen with Trending Section
    <Form.Check type="checkbox" style={{
      width: '20px',
      height: '20px',
      marginLeft: 'auto',
      opacity: '1'
    }}/>
  </Form.Label>
</Form.Group>

</Col>
<Col md={6}>
                <Card style={{ width: '448px', height: '448px' }}>
                  <Card.Img
                    variant="top"
                    src={selectedImage}
                    onClick={() => handleImageClick(selectedImage)}
                    style={{ height: '448px', borderRadius: '6px', objectFit: 'cover', cursor: 'pointer' }}
                  />
                  <div
                    className="position-absolute d-flex align-items-center"
                    style={{
                      width: '164px',
                      height: '25px',
                      background: '#FFE0E08F',
                      color: '#DD0000',
                      fontSize: '14px',
                      borderRadius: '4px',
                      top: '5px',
                      right: '5px',
                      padding: '0 5px',
                      cursor: 'pointer'
                    }}
                    onClick={handleRemoveCoverImage}
                  >
                    <BiTrash style={{ width: '14.67px', height: '14.67px' }} />
                    <span>Remove Cover Image</span>
                  </div>
                </Card>

                <div className="d-flex mt-3" style={{ gap: '20px' }}>
                  {thumbnails.map((thumb, index) => (
                    <div key={index} className="position-relative">
                      <Image
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        rounded
                        onClick={() => handleImageClick(thumb)}
                        style={{
                          width: '110px',
                          height: '110px',
                          borderRadius: '6px',
                          border: '1px solid #474747',
                          cursor: 'pointer',
                        }}
                      />
                      <Button
                        variant="danger"
                        size="sm"
                        className="position-absolute"
                        onClick={() => handleRemoveThumbnail(index)}
                        style={{
                          width: '20x',
                      height: '2opx',
                      background: '#FFE0E08F',
                      color: '#DD0000',
                      fontSize: '14px',
                      borderRadius: '4px',
                      top: '493px',
                      right: '5px',
                      padding: '0 5px',
                      cursor: 'pointer'
                        }}
                      >
                        <BiTrash style={{ width: '14.67px', height: '14.67px' ,top:"495.67",left:"947.67px"}} />
                      </Button>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
            
            <div className="d-flex justify-content-end mt-3">
              {!isEditing ? (
                <Button variant="primary" onClick={() => setIsEditing(true)}>
                  <BiEdit /> Edit
                </Button>
              ) : (
                <>
                  <Button variant="secondary" className="me-2" onClick={handleCancelEdit}>Cancel</Button>
                  <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                </>
              )}
            </div>

            {showSuccessMessage && (
              <Alert variant="success" className="mt-3">
                Changes Saved Successfully
              </Alert>
            )}
          </Form>

          <Modal
  show={showModal}
  onHide={handleCloseModal}
  centered
  dialogClassName="custom-modal"
>
  <Modal.Header closeButton />
  <Modal.Body style={{  backgroundColor: 'transparent', 
    width: '666px',
    height: '666px',
    top: '117px',
    left: '520px',
    gap: '0px',
    borderRadius: '6px 0px 0px 0px',  // Border radius applied for specific corners
     // Assuming you want a 1px border on all sides
    opacity: '1px',  // This will make the element invisible (use '1' for visible)
    position: 'fixed', 
    backdropFilter: 'blur(4.8px)' }}>
  <Image 
    src={selectedImage} 
    alt="Selected" 
    fluid 
    style={{ backgroundColor: 'transparent' }} 
  />
  <div
    className="d-flex mt-3"
    style={{
      width: '666px',
      height: '666px',
      top: '117px',
      left: '520px',
      gap: '0px',
      padding: '6px 0px 0px 0px',
      border: '1px 0px 0px 0px',
      opacity: '0px',
    }}
  >
    {thumbnails.map((thumb, index) => (
      <Image
        key={index}
        src={thumb}
        alt={`Thumbnail ${index + 1}`}
        onClick={() => setSelectedImage(thumb)}
        rounded
        style={{
          width: '70px',
          height: '70px',
          border: thumb === selectedImage ? '1px solid' : '1px solid #ddd',
          cursor: 'pointer',
          backgroundColor: 'transparent',
        }}
      />
    ))}
  </div>
</Modal.Body>

</Modal>

        </Container>
      </>
    </div>
  );
}

export default ProductEdit;
