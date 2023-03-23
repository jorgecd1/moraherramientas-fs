import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Tool() {

    const [tools,setTools]=useState([]);

    useEffect(()=>{
        loadTools();
    },[]);

    const loadTools= async ()=>{
        const result= await axios.get("http://localhost:8080/tools");
        setTools(result.data);
    }
    const deleteTool= async (id)=>{
        await axios.delete(`http://localhost:8080/tool/${id}`);
        loadTools();
    }

    return(
        <div className="container">
            <div className="py-3">
                <h1>Máquinas Registradas en Bódega</h1>
            </div>
            <div className="py-2">
                <table className='table border shadow'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre Artículo</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Código ID</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tools.map((tools,index)=>(
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{tools.tool_name}</td>
                                <td>{tools.tool_model}</td>
                                <td>{tools.tool_code}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2"
                                    to={`/viewtool/${tools.id}`}>View</Link>
                                    <Link className='btn btn-outline-primary mx-2'
                                    to={`/edittool/${tools.id}`}>Edit</Link>
                                    <button className='btn btn-danger mx-2'
                                    onClick={()=>deleteTool(tools.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
}