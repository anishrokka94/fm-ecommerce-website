import { useEffect } from "react";
import useAuthLogin from "../../hooks/useAuthLogin";
import LogOutButton from "../Login/components/LogInButton";

const AccountPage = () => {
  const { login, userData, loading, error } = useAuthLogin();

  useEffect(() => {
    login();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  console.log("user data", userData);
  return (
    <div>
      <h2>User Data</h2>
      <LogOutButton />
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default AccountPage;
