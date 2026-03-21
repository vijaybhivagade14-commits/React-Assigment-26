import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  const validId = "123";

  const isValid = id === validId;

  return (
    <div>
      <h2>User Page</h2>

      {isValid ? (
        <h3>✅ Valid User</h3>
      ) : (
        <h3>❌ Invalid User</h3>
      )}
    </div>
  );
}

export default User;