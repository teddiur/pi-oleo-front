import { useEffect } from "react";
import axios from "axios";

export const ProtectedRoute = ({ route, children }) => {
  useEffect(() => {
    const a = async () => {
      const token = localStorage?.getItem("token") || "";
      if (!token) return null;

      try {
        await axios.post(
          `https://oleo-descarte-api.onrender.com/validate_token/?token=${token}`
        );
      } catch (e) {
        window.location.href = route;
      }
    };
    a();
  }, []);

  return <>{children}</>;
};
