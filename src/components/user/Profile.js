import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import "../../styles/user/Profile.css";

const Profile = () => {
  const { user } = useAuth(); // Use useAuth instead of directly importing AuthContext
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    // Here you would usually handle the save logic, e.g., call an API
    try {
      // Replace with actual API call
      await fetch("/api/updateProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      });
      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleCancelClick = () => {
    // Revert changes and exit editing mode
    setUsername(user.username);
    setEmail(user.email);
    setIsEditing(false);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>
          <strong>Username:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            username
          )}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            email
          )}
        </p>
      </div>
      <div className="profile-actions">
        {isEditing ? (
          <>
            <button onClick={handleSaveClick} className="button save">
              Save
            </button>
            <button onClick={handleCancelClick} className="button cancel">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={handleEditClick} className="button edit">
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
