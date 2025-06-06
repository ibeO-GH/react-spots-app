import React, { useState } from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";
import galleryDataInitial from "./data/gallaryData";

function App() {
  const [galleryData, setGalleryData] = useState(galleryDataInitial);

  // Add new post to gallery
  const handleNewPost = (post) => {
    setGalleryData((prev) => [post, ...prev]);
  };

  return (
    <section>
      <Header />
      <main>
        <ProfileSection onNewPost={handleNewPost} />
        <Gallery galleryData={galleryData} />
      </main>
      <Footer />
    </section>
  );
}
export default App;
