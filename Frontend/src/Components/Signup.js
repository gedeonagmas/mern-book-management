import React, { useState } from 'react';
import axios from 'axios';
import photo from '../images/dra.webp';

const Signup = () => {

  const [user, setUser] = useState({
    name: "", email: "", password: "", address: ""
  })

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
    console.log(name, value);
  }

  const sentdata = async (e) => {
    e.preventDefault()
    const { name, email, password, address } = user;

    try {
      const res = await axios.post("/register", { name, email, password, address })
      window.alert("successfully registration ")
    } catch (err) {
      window.alert('invalid data')
    }
  }


  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4" method='POST'>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name="name" autoComplete='off' id="form3Example1c" className="form-control"
                            value={user.name} onChange={handleInput}
                          />
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" name="email" autoComplete='off' id="form3Example3c" className="form-control"
                            value={user.email} onChange={handleInput}
                          />
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name="password" autoComplete='off' id="form3Example4c" className="form-control"
                            value={user.password} onChange={handleInput}
                          />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name="address" autoComplete='off' id="form3Example4cd" className="form-control"
                            value={user.address} onChange={handleInput}
                          />
                          <label className="form-label" htmlFor="form3Example4cd">Address</label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">

                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg"
                          onClick={sentdata}>Register</button>
                        <button type="button" className="btn btn-primary btn-lg">SignUp</button>
                      </div>

                    </form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">


                    <img src={photo} className="img-fluid" alt="Sample images" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
