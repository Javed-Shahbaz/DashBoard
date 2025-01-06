import React from "react";

const Login = () => {
  return (
    <div className="flx flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-grey-100 to-50% space-y-6">
      <h2 className="font-sevillana text-3xl text-white">Managment System</h2>
      <div className="border-shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-grey-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-grey-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border"
              placeholder="*******"
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-grey-700">Remember me</span>
            </label>
            <a href="#" className="text-teal-600">
              Forget Password
            </a>
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-teal-600 py-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
