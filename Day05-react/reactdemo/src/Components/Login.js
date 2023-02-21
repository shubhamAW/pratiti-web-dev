import './Login.css';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

const Login = () => {

    const navigate = useNavigate();

const[userData , setUserData]= useState({
        username:'',
        password:'',
    })

    function usernameInput(event){
        setUserData({
            username : event.target.value,
            password : userData.password,
        })
    }
    function passwordInput(event){
        setUserData({
            password: event.target.value,
            username: userData.username,
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        //do something with the data such as sending it to the server..


        if(userData.username === 'shubham' && userData.password === '1234'){
            sessionStorage.setItem('loggedInUser',userData.username);
            navigate('/DashBoard');
        }
        else{
            navigate('/InvalidUserLogin');
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} action="" className="form__container">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" onChange={usernameInput} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={ passwordInput} />
        <button type="submit">Login</button>
    </form>
    {/* displaying username & password */}
    <div className="display__container">
        <p>Username: {userData.username.toUpperCase()}</p>
        <p>Password: {"*".repeat(userData.password.length)}</p>
    </div>
    </div>
  )
}

export default Login