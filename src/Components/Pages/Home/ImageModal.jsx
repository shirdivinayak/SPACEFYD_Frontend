// import React from "react";
// import { Modal, Button } from "react-bootstrap";
// import { IoClose } from "react-icons/io5";

// const ImageModal = ({
//   show,
//   handleClose,
//   images,
//   selectedImage,
//   setSelectedImage,
// }) => {
//   const handlePrev = () => {
//     const currentIndex = images.indexOf(selectedImage);
//     const prevIndex = (currentIndex - 1 + images.length) % images.length;
//     setSelectedImage(images[prevIndex]); // Update the selected image
//   };

//   const handleNext = () => {
//     const currentIndex = images.indexOf(selectedImage);
//     const nextIndex = (currentIndex + 1) % images.length;
//     setSelectedImage(images[nextIndex]); // Update the selected image
//   };

//   return (
//     <Modal show={show} onHide={handleClose} size="lg" centered>
//       <IoClose
//         style={{
//           position: "absolute",
//           top: "10px",
//           right: "20px",
//           fontSize: "25px",
//           cursor: "pointer",
//           color: "gray",
//           zIndex: "1051", // Ensure it's above the modal
//         }}
//         onClick={handleClose}
//       />
//       <Modal.Body
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Button
//           variant="light"
//           onClick={handlePrev}
//           style={{
//             position: "absolute",
//             left: "10px",
//             top: "50%",
//             zIndex: "1000",
//           }}
//         >
//           Prev
//         </Button>
//         <div
//           style={{
//             width: "80%",
//             height: "421px",
//             background: `url(${selectedImage}) center / cover no-repeat`,
//           }}
//         />
//         <Button
//           variant="light"
//           onClick={handleNext}
//           style={{
//             position: "absolute",
//             right: "10px",
//             top: "50%",
//             zIndex: "1000",
//           }}
//         >
//           Next
//         </Button>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ImageModal;
