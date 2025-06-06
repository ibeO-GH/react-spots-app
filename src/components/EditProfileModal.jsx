import React, { useState } from "react";
import "./style.css";

const EditProfileModal = ({ isOpen, onClose, profile, onSave }) => {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [image, setImage] = useState(profile.image);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, bio, image });
  };

  return (
    <div className="modal" style={{ display: "flex" }}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Profile</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="profileImage">Upload New Image:</label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 8,
                  marginTop: 8,
                }}
              />
            )}
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
