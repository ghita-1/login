import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="login-container">
        <h2>Login</h2>
        <form>
            <label>Email</label>
            <input type="text" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <div className="options">
                <div>
                    <input type="checkbox" id="rememberMe" />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <a href="#">Forget Password</a>
            </div>
            <button type="submit" className="login-button">Log in</button>
        </form>
        <div className="register-link">
            Don't have a account <a href="#">Register</a>
        </div>
    </div>
)
}

export default App
