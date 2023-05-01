import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  }


  return (
    <div className="text-white">
      <form className="w-96 mx-auto" onSubmit={handleLogin}>
        <h3 className="text-2xl font-bold mb-5">Login</h3>
        <div className="form-control">
          <label className="label">
            <span className="text-white">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-white">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label text-white">
            <Link className="underline text-white hover:text-white hover:bg-slate-50 hover:p-2 hover:rounded-md">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control">
          <label className="flex gap-4 cursor-pointer mt-4">
            <input type="checkbox" className="checkbox bg-cyan-500" />
            <span className="text-white">Remember me</span>
          </label>
        </div>
        <div className="form-control mt-6 mb-3">
          <button className="btn btn-warning">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
