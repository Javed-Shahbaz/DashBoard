import React from "react";

const Login = () => {
  return (
    <div className="flx flex-col item-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-grey-100 to-50% space-y-6">
      <h2 class Name="font-sevillana text-3xl text-white">
        Admin Login
      </h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="*******" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
