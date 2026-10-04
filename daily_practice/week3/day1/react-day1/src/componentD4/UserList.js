import { useEffect, useState } from "react";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "16px",
};

const cardStyle = {
  backgroundColor: "#fff",
  border: "1px solid #dce5e8",
  borderTop: "4px solid #168b83",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 3px 12px rgba(25, 55, 65, 0.08)",
};

const nameStyle = {
  color: "#193b45",
  fontSize: "18px",
  margin: "0 0 16px",
};

const detailLabelStyle = {
  color: "#60777d",
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 0 4px",
  textTransform: "uppercase",
};

const detailStyle = {
  color: "#263f46",
  fontSize: "14px",
  lineHeight: 1.5,
  margin: "0 0 12px",
};

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }

        const data = await response.json();
        setUsers(data);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUsers();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <h3>Loading users...</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }

  return (
    <div style={gridStyle}>
      {users.map((user) => (
        <article key={user.id} style={cardStyle}>
          <h3 style={nameStyle}>{user.name}</h3>
          <p style={detailLabelStyle}>Email</p>
          <p style={detailStyle}>{user.email}</p>
          <p style={detailLabelStyle}>City</p>
          <p style={{ ...detailStyle, marginBottom: 0 }}>{user.address.city}</p>
        </article>
      ))}
    </div>
  );
}

export default UserList;