import { useEffect } from "react";
import useAuthLogin from "../../hooks/useAuthLogin";
// import LogOutButton from "../Login/components/LogInButton";

const AccountPage = () => {
  const { login, userData, loading, error } = useAuthLogin();

  useEffect(() => {
    login();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  console.log("user data", userData);
  return (
    <div className="w-full px-6 bg-gray-50 text-gray-900">
      {/* Top Buttons */}
      <div className="flex justify-end items-center space-x-4 p-6">
        <button className="border border-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition">
          Log out
        </button>
      </div>

      <hr className="border-gray-300" />

      {/* Main Content */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Account</h1>

        {/* Order History */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Order history</h2>
          <p className="text-gray-600">You haven't placed any orders yet.</p>
        </section>

        {/* Account Details */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Account details</h2>
          <div className="inline-block border border-gray-300 p-8 rounded-md bg-white">
            <p className="text-lg font-medium">Anish Rokka</p>
            <p className="text-gray-600">Nepal</p>
          </div>
        </section>
      </div>
    </div>
    // <div>
    //   <h2>User Data</h2>
    //   <LogOutButton />
    //   <pre>{JSON.stringify(userData, null, 2)}</pre>
    // </div>
  );
};

export default AccountPage;
