import React from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">

        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
            <a href="#" className="navbar-brand text-white"><strong>FaceSmash</strong></a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item me-3"><a className="nav-link text-white " href="#">Signup</a> </li>
              <li className="nav-item me-3"><a className="nav-link active text-secondary" href="#">Login</a></li>
              <li className="nav-item me-3"><a className="nav-link text-white" href="#">About</a></li>
            </ul>
          </div>
        </nav>
      <div className="container-fluid">
        <h1 className=" my-5">Login</h1>
        <form action="" className="">
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input className="form-control w-25 mx-auto" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input className="form-control w-25 mx-auto" type="password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input float-none me-2" />
            <label className="form-label text-secondary" htmlFor="check">
              Keep me logged in
            </label>
          </div>
          <button type="submit" className="btn btn-sm btn-outline-primary mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
