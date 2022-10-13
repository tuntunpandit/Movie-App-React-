import React from "react";
const Login = () => {
  return (  
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <h1 className="login-txt mb-5">Login</h1>
        <div className="card py-4">
          <div className="card-body">
            <div className="row d-flex flex-row justify-content-center align-items-center">
              <div className="col-md-6">
                <img
                  className="w-100"
                  src="./images/login.png"
                  alt="login-img"
                />
              </div>
              <div className="col-md-6 px-md-5">
                <form>
                  <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" class="btn btn-success width-100">
                    Login
                  </button>
                </form>
                <p className="registration mb-0 mt-2">Not registered yet?<span className="create-account mx-1">Create Account</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
