import { useState } from "react";
import { loginUser } from "../services/api";

const useAuthLogin = () => {
  const [userData, setUserdata] = useState(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async () => {
    setLoading(true);
    try {
      const res = await loginUser();

      setUserdata(res.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { login, userData, error, loading };
};

export default useAuthLogin;
