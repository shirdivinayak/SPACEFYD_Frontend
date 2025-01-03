// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const useProjectApi = (categories, subCategories, brands) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const item = location.state?.item;

//   // State for product details
//   const [productDetails, setProductDetails] = useState({
//     name: item?.name || "",
//     description: item?.description || "",
//     category: item?.category || categories[0],
//     subCategory: item?.subCategory || "",
//     brand: item?.brand || brands[0],
//     productCode: item?.productCode || "",
//     displayInHome: item?.displayInHome || false,
//     displayInTrending: item?.displayInTrending || false,
//   });

//   const [image, setImage] = useState({
//     image: "https://via.placeholder.com/400",
//     images: [
//       "https://via.placeholder.com/100",
//       "https://via.placeholder.com/100",
//       "https://via.placeholder.com/100",
//     ],
//   });

//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (item && item.category) {
//       setProductDetails((prev) => ({
//         ...prev,
//         subCategory: item.subCategory || subCategories[item.category][0],
//       }));
//     }
//   }, [item, subCategories]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setProductDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSave = async () => {
//     try {
//       setIsLoading(true);
//       // POST operation to create a new project
//       const response = await axios.post("/api/projects", productDetails);
//       console.log("Project created:", response.data);
//       setMessage("Project created successfully.");
//       setTimeout(() => {
//         setMessage("");
//         navigate("/projects"); // Redirect after success
//       }, 3000);
//     } catch (error) {
//       console.error("Error creating project:", error);
//       setMessage("An error occurred while creating the project.");
//       setTimeout(() => setMessage(""), 3000);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     const selectedCategory = e.target.value;
//     setProductDetails((prev) => ({
//       ...prev,
//       category: selectedCategory,
//       subCategory: subCategories[selectedCategory]?.[0] || "",
//     }));
//   };

//   const handleSubCategoryChange = (e) => {
//     const selectedSubCategory = e.target.value;
//     setProductDetails((prev) => ({
//       ...prev,
//       subCategory: selectedSubCategory,
//     }));
//   };

//   const handleBrandChange = (value) => {
//     setProductDetails((prevDetails) => ({
//       ...prevDetails,
//       brand: value,
//     }));
//   };

//   const handleMainImageUpload = async (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       try {
//         const base64Image = await convertImageToBase64(file);
//         setImage((prevState) => ({ ...prevState, image: base64Image }));
//       } catch (error) {
//         setMessage("Failed to process the image file.");
//         setTimeout(() => setMessage(""), 3000);
//       }
//     } else {
//       setMessage("Please upload a valid image file.");
//       setTimeout(() => setMessage(""), 3000);
//     }
//   };

//   const convertImageToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = (error) => reject(error);
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleCancel = () => {
//     navigate(-1); // Navigate back without saving
//   };

//   return {
//     productDetails,
//     image,
//     message,
//     isLoading,
//     handleChange,
//     handleSave,
//     handleCategoryChange,
//     handleSubCategoryChange,
//     handleBrandChange,
//     handleMainImageUpload,
//     handleCancel,
//   };
// };

// export default useProjectApi;
