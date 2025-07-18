import jwtDecode from "jwt-decode";

export const getRoleFromToken = () => {
  const token = localStorage.getItem("authToken");

  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded; // Example: { _id, name, email, role, iat, exp }
  } catch (err) {
    console.error("Invalid authToken:", err);
    return null;
  }
};
