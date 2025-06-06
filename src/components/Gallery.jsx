import React, { useState } from "react";
import "./style.css";
import GalleryPreviewModal from "./GalleryPreviewModal";

const Gallery = ({ galleryData }) => {
  const [liked, setLiked] = useState(Array(galleryData.length).fill(false));
  const [preview, setPreview] = useState({ open: false, img: null, title: "" });

  // Update liked state if galleryData changes (e.g., new post)
  React.useEffect(() => {
    setLiked(Array(galleryData.length).fill(false));
  }, [galleryData]);

  const toggleLike = (idx) => {
    setLiked((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  const openPreview = (img, title) => {
    setPreview({ open: true, img, title });
  };

  const closePreview = () => {
    setPreview({ open: false, img: null, title: "" });
  };

  return (
    <section>
      <div className="gallerycontainer">
        {galleryData.map((item, idx) => (
          <div className="gallery-item" key={idx}>
            <img
              src={item.img}
              alt={item.title}
              className="gallery-image"
              style={{ cursor: "pointer" }}
              onClick={() => openPreview(item.img, item.title)}
            />
            <div className="gallery-caption">
              <span>{item.title}</span>
              <svg
                className={`heart-icon${liked[idx] ? " active" : ""}`}
                viewBox="0 0 24 24"
                onClick={() => toggleLike(idx)}
                style={{ cursor: "pointer" }}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <GalleryPreviewModal
        isOpen={preview.open}
        onClose={closePreview}
        img={preview.img}
        title={preview.title}
      />
    </section>
  );
};

export default Gallery;
