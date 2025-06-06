import React, { useState } from "react";
import "./style.css";
import ProfilePicture from "../assets/images/Avatar.jpg";
import EditProfileModal from "./EditProfileModal";
import NewPostModal from "./NewPostModal";

const ProfileSection = ({ onNewPost }) => {
  // User profile state
  const [profile, setProfile] = useState({
    name: "Aliaune Damala Bouga Time Bongo Puru Nacka Lu Lu Lu Badara Akon...",
    bio: "Known mononymously as Akon (/'eɪkɒn/), is a Senegalese-American singer, record producer, and entrepreneur. An influential figure in modern world....",
    image: ProfilePicture,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [newPostOpen, setNewPostOpen] = useState(false);

  // Handle profile update from modal
  const handleProfileUpdate = (updatedProfile) => {
    setProfile(updatedProfile);
    setModalOpen(false);
  };

  // Handle new post creation
  const handleNewPost = (post) => {
    onNewPost(post);
    setNewPostOpen(false);
  };

  return (
    <section className="first-section">
      <div className="profile-section">
        <div className="left-section">
          <img src={profile.image} alt="profile" className="profile-img" />
        </div>
        <div className="profile-text">
          <h3 className="heading-text">{profile.name}</h3>
          <p className="profile-parag">{profile.bio}</p>
          <button
            title="edit"
            className="edit-icon"
            onClick={() => setModalOpen(true)}
          >
            <i className="fa-solid fa-pencil"></i> Edit Profile
          </button>
        </div>
      </div>
      <button
        className="post"
        id="new-post-btn"
        onClick={() => setNewPostOpen(true)}
      >
        <i className="fa-solid fa-plus"></i> New post
      </button>
      <EditProfileModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        profile={profile}
        onSave={handleProfileUpdate}
      />
      <NewPostModal
        isOpen={newPostOpen}
        onClose={() => setNewPostOpen(false)}
        onSave={handleNewPost}
      />
    </section>
  );
};

export default ProfileSection;
