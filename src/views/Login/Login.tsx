import LOGINBG from '@/assets/images/login-bg.png'
import { LoginContainer } from './login.styles'

function Login() {
  return (
    <LoginContainer>
      <div className="brand">
        <img src={LOGINBG} alt="Grupo a vivir" />
      </div>
      <form>
        <h1>Welcome again</h1>
        <input type="text" placeholder="user"/>
        <input type="text" placeholder="password"/>
        <button>login</button>
      </form>
    </LoginContainer>
  )
}

export default Login