import { useState } from "react";

function ProfileCard({ profiles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const profile = profiles[currentIndex];

  const nextProfile = () => {
    setCurrentIndex((currentIndex + 1) % profiles.length);
  };

  return (
    <div
      onClick={nextProfile}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "220px",
        textAlign: "center",
        margin: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        cursor: "pointer",
      }}
    >
      <img
        src={profile.image}
        alt={profile.name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
        }}
      />

      <h3>{profile.name}</h3>
      <p>{profile.role}</p>

      <small>Click to see next profile</small>
    </div>
  );
}

export default ProfileCard;