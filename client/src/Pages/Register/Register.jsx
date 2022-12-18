import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username" />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email" />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password" />
        <button className="registerButton">Register <i class="fa-solid fa-right-to-bracket"></i></button>
      </form>
      <Link className="link" to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  )
}