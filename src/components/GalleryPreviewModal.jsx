import React from "react";
import "./style.css";

const GalleryPreviewModal = ({ isOpen, onClose, img, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: "flex" }}>
      <div
        className="modal-content"
        style={{
          maxWidth: 400,
          width: "90%",
          textAlign: "center",
        }}
      >
        <span className="close" onClick={onClose} style={{ cursor: "pointer" }}>
          &times;
        </span>
        <img
          id="preview-image"
          src={img}
          alt="Preview"
          style={{
            width: "100%",
            maxHeight: 300,
            objectFit: "contain",
            borderRadius: 8,
          }}
        />
        <p id="preview-title" style={{ marginTop: 10, fontWeight: 500 }}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default GalleryPreviewModal;
