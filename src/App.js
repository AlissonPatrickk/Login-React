import { useState } from 'react';
import loginImage from './images/login-icon.png'
import './styles/styles.css'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Welcome</span>
            <span className="login-form-title">
              <img src={loginImage} alt="login-logo" />
            </span>

            <div className="wrap-input">
              <input  
              class={email !== "" ? 'has-val input' : 'input'}
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input 
              class={password !== "" ? 'has-val input' : 'input'}
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="text1">Não possui conta?</span>
              <a className="text2" href="#">Criar conta</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
