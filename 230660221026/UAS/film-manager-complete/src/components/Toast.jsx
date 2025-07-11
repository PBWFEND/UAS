import React, { useEffect } from "react";

function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // otomatis hilang setelah 3 detik
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  }[type] || "bg-gray-800";

  return (
    <div className={`fixed top-5 right-5 z-50 text-white px-4 py-2 rounded shadow-lg ${bgColor}`}>
      {message}
    </div>
  );
}

export default Toast;
