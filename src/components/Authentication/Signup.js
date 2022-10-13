import React from 'react';

const Signup = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center flex-column">
    <h1 className="login-txt mb-5">Signup</h1>
    <div className="card py-4">
      <div className="card-body">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="col-md-6">
            <img
              className="w-100"
              src="./images/registration.png"
              alt="registration-img"
            />
          </div>
          <div className="col-md-6 px-5">
            <form>
              <div class="form-group mb-3">
                <label for="emailAddress">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="emailAddress"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group mb-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div class="form-group mb-3">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  placeholder="Password"
                />
              </div>
              <button type="submit" class="btn btn-success width-100">
                Register
              </button>
            </form>
            <p className="registration mb-0 mt-2">Already registered?<span className="create-account mx-1">Login</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup;