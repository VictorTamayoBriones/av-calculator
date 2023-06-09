import LOGINBG from '@/assets/images/login-bg.png'
import { LoginContainer } from './login.styles'
import React, { useState } from 'react'
import { USERS } from '@/data/users'
import { useDispatch } from 'react-redux';
import { login } from '@/redux/states/User.slice';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '@/models/routes.model';

function Login() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [user, setUser] = useState({
    user: '',
    password: ''
  })

  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(user.user === USERS[0].user && user.password === USERS[0].password){
      dispatch(login(USERS[0]))
      navigate(PRIVATE_ROUTES.HOME)
    }else{
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <LoginContainer >
      <div className="brand">
        <img src={LOGINBG} alt="Grupo a vivir" />
      </div>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <h1>Welcome again</h1>
        <input type="text" placeholder="user" value={user.user} onChange={(e)=>handleChange(e)} name='user' />
        <input type="text" placeholder="password" value={user.password} onChange={(e)=>handleChange(e)} name='password' />
        <button>login</button>
      </form>
    </LoginContainer>
  )
}

export default Login