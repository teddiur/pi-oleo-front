import { useEffect } from "react";
import axios from "axios";
import { getAxios } from "../api/";

export const ProtectedRoute = ({ route, children }) => {
  useEffect(() => {
    const a = async () => {
      const token = localStorage?.getItem("token") || "";

      if (!token) {
        window.location.href = "/";
      }

      try {
        await getAxios().get(`/current-user/`);
      } catch (e) {
        if (e.response.status === 401) {
          window.location.href = route;
        }
      }
    };
    a();
  }, []);

  return <>{children}</>;
};
