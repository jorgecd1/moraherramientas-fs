import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

export default function EditUser() {

  let navigate=useNavigate()

  // Hook, fetch parameter from URL
  const {id} = useParams();

  const [user, setUser]=useState({
    name:"",
    username:"",
    email:""
  });

  const{name, username, email}=user;

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  };

  useEffect(()=>{
    loadUser();
},[]);

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user);
    navigate("/home");
  };

  const loadUser = async ()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Name
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder='Enter name'
              name='name'
              value={name}
              onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='Username' className='form-label'>
                Username
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder='Enter username'
              name='username'
              value={username}
              onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>
                Email
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder='Enter email'
              name='email'
              value={email}
              onChange={(e)=>onInputChange(e)}/>
            </div>
            <button type="submit" className="btn btn-outline-primary mx-1">Submit</button>
            <Link className="btn btn-outline-danger mx-1" to="/home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}