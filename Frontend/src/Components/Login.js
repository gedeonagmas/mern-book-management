import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <div className="mb-3 text1">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 text2">
          <label htmlFor="exampleInputPassword1 text2" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check text3">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary btn6">Submit</button>
        <button type="button" className="btn btn-primary btn7">SignUp</button>
      </form>
    </div>
  )
}

export default Login
