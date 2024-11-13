import React from 'react';

const AlertMessage = ({ message }) => {
  return (
    <>
      {message && (
        <>
          {/* Alert Message */}
          <div
            className="alert alert-danger mt-3"
            role="alert"
            style={{
              position: "fixed", 
              bottom: "20px", 
              left: "50%", 
              transform: "translateX(-50%)", 
              maxWidth: "400px", 
              width: "auto", 
              zIndex: 9999, 
            }}
          >
            {message}
          </div>
          {/* Red line at the bottom */}
          <div
            style={{
              position: "fixed", // Fixed at the bottom of the screen
              bottom: "0", // Align at the very bottom of the screen
              left: "0", // Align at the left edge
              width: "100%", // Make the line span the full width
              height: "4px", // Set the height of the line
              backgroundColor: "red", // Set the color of the line
              zIndex: 9998, // Ensure it's below the alert but still on top of other content
            }}
          />
        </>
      )}
    </>
  );
};

export default AlertMessage;
