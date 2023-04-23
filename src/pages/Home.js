import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Home() {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers= async ()=>{
        const result= await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

  return (
    <div className="container">
        <div className='py-3'>
            <h1>Directorio de Contactos</h1>
        </div>
        <div className="py-2">
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Nombre Contacto</th>
                        <th scope="col">Correo o teléfono de Contacto</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2"
                                    to={`/viewuser/${user.id}`}>Ver</Link>
                                    <Link className="btn btn-outline-primary mx-2"
                                    to={`/edituser/${user.id}`}>
                                    Editar</Link>
                                    <button className="btn btn-danger mx-2"
                                    onClick={()=>deleteUser(user.id)}>Borrar</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
