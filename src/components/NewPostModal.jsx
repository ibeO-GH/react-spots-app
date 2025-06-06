import React, { useState } from "react";
import "./style.css";

const NewPostModal = ({ isOpen, onClose, onSave }) => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imagePreview && caption.trim()) {
      onSave({ img: imagePreview, title: caption });
      setImage(null);
      setCaption("");
      setImagePreview(null);
    }
  };

  return (
    <div className="modal" style={{ display: "flex" }}>
      <div className="modal-content" style={{ maxWidth: 400, width: "90%" }}>
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>New Post</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="postImage">Upload Image:</label>
            <input
              type="file"
              id="postImage"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  width: "100%",
                  maxHeight: 200,
                  borderRadius: 8,
                  marginTop: 8,
                }}
              />
            )}
          </div>
          <div>
            <label htmlFor="postCaption">Caption:</label>
            <textarea
              id="postCaption"
              name="postCaption"
              rows="2"
              minLength="2"
              maxLength="50"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;
