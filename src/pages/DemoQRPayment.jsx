// src/DemoQRPayment.jsx
import React, { useState } from "react";

const DemoQRPayment = () => {
  const [status, setStatus] = useState("pending");

  const handleQRClick = () => {
    setStatus("processing");
    setTimeout(() => {
      setStatus("success");
    }, 5000); // 5 seconds delay
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Demo QR Payment</h1>

      {status === "pending" && (
        <>
          <p>Scan the QR to pay ₹100 (Demo)</p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=demo@upi&pn=Demo%20Store&am=100&cu=INR"
            alt="Demo Payment QR"
            style={{ cursor: "pointer" }}
            onClick={handleQRClick}
          />
          <p>(Click QR to simulate payment)</p>
        </>
      )}

      {status === "processing" && <p>⏳ Processing payment, please wait...</p>}

      {status === "success" && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          ✅ Payment Successful! Thank you for your purchase.
        </p>
      )}
    </div>
  );
};

export default DemoQRPayment;
