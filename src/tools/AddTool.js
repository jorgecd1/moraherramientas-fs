import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function AddTool(){
    
    let navigate= useNavigate();

    const[tool, setTool]= useState({
        tool_name:"",
        tool_model:"",
        tool_detail:"",
        tool_description:"",
        tool_code:""
    });
    const{tool_name,tool_model,tool_detail,tool_description,tool_code}=tool;

    const onInputChange=(e)=>{
        setTool({...tool,[e.target.name]:e.target.value})
    };
    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/tool",tool);
        navigate("/tools");
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Registrar Artículo</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-3">
                            <label>
                                Nombre de Artículo
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder="Ingrese nombre del artículo..."
                            name='tool_name'
                            value={tool_name}
                            onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label>
                                Modelo de Artículo
                            </label>
                            <input 
                            type={"text"}
                            className="form-control"
                            placeholder="Ingrese módelo del artículo..."
                            name='tool_model'
                            value={tool_model}
                            onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                Marca de Artículo
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder="Ingrese el detalle del artículo..."
                            name='tool_detail'
                            value={tool_detail}
                            onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                Descripción del Artículo
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder='Ingrese la descripción del artículo...'
                            name='tool_description'
                            value={tool_description}
                            onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <div className='mb-3'>
                            <label>
                                Código de Artículo
                            </label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder='Ingrese el código del artículo...'
                            name='tool_code'
                            value={tool_code}
                            onChange={(e)=>onInputChange(e)}/>
                        </div>
                        <button type="submit" className='btn btn-outline-primary mx-1'>Crear</button>
                        <Link className='btn btn-outline-danger mx-1' to="/tools">
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}