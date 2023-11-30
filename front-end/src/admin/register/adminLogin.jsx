import './adminLogin.css';
import Button from '../UI-elements/button';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const SubHandler = (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      return;
    } else {
      axios.post('http://localhost/React_project/back-end/admin/login.php', data)
        .then((response) => {
          console.log(response.data);
          if (Array.isArray(response.data) && response.data.length > 0) {
            const firstAdmin = response.data[0];

            if (firstAdmin.password) {
              localStorage.setItem('name', firstAdmin.Fname);
              navigate('/admin');
            } 
          } else {
            console.log('No admin data found');
          }
        })
    }
  };

  return (
    <div className='admin_container'>
      <div className='image_container'>
        <div className='image'></div>
      </div>
      <div className='form'>
        <form onSubmit={SubHandler}>
          <label>E-mail</label>
          <input type="email" placeholder='Enter your email' onChange={inputHandler} name='email' />
          <label>Password</label>
          <input type="password" placeholder='Enter your password' onChange={inputHandler} name='password' />
          <Button className='button'>Log In</Button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
