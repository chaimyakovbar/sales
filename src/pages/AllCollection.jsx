import React from "react";
import { useNavigate } from "react-router-dom"; // Navigation Hook
import backgroundImage from "../assets/photoBackGround.jpg";

const collections = [
  { id: 1, title: "Classic Elegance" },
  { id: 2, title: "Modern Sophistication" },
  { id: 3, title: "Italian Heritage" },
  { id: 4, title: "Luxury Essentials" },
  { id: 5, title: "Timeless Style" },
  { id: 6, title: "Exclusive Collection" },
  { id: 7, title: "Tailored Perfection" },
  { id: 8, title: "Prestige Line" },
];

const AllCollection = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#FAF3E0" }}>
      {/* Back to Main Page Button */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#8B5E3C", // Luxurious brown
            color: "#FFF",
            marginLeft: "20px",
            marginTop: "30px",
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#5E3C1B")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#8B5E3C")}
        >
          ← Return to Main Page
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "50px",
          backgroundColor: "#FAF3E0", // Cream background
        }}
      >
        {/* Collection Cards */}
        {collections.map((collection) => (
          <div
            key={collection.id}
            style={{
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            {/* Background Image */}
            <img
              src={backgroundImage}
              alt={collection.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                filter: "brightness(0.7)", // Dark overlay for luxury feel
              }}
            />

            {/* Title and Button */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "22px",
                textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              {collection.title}
              <br />
              <button
                onClick={() => navigate(`/collection/${collection.id}`)}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#1B3B6F", // Deep blue
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#8B5E3C")
                } // Hover effect to brown
                onMouseOut={(e) => (e.target.style.backgroundColor = "#1B3B6F")}
              >
                View Collection
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCollection;
