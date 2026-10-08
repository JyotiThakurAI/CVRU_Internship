import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

export default UserProfile;