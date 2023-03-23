import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams} from 'react-router-dom';

export default function EditTool() {

   let navigate= useNavigate();

   const{id} = useParams();    

   const [tool, setTool]= useState({
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

   useEffect(()=>{
     loadTool();
   },[]);

   const onSubmit= async(e)=>{
     e.preventDefault();
     await axios.put(`http://localhost:8080/tool/${id}`,tool)
     navigate("/tools")
   };

   const loadTool = async ()=>{
     const result = await axios.get(`http://localhost:8080/tool/${id}`)
     setTool(result.data)
   }

   return (
     <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Editar Herramienta</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor="name">Nombre de Herramienta</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder=''
                        name="tool_name"
                        value={tool_name}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name">Módelo de Herramienta</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder=''
                        name="tool_model"
                        value={tool_model}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name">Marca de Herramienta</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder=''
                        name="tool_detail"
                        value={tool_detail}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name">Descripción de Herramienta</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder=''
                        name="tool_description"
                        value={tool_description}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name">Descripción de Herramienta</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder=''
                        name="tool_code"
                        value={tool_code}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <button type="submit" className='btn btn-outline-primary mx-1'>Guardar Cambios</button>
                    <Link className='btn btn-outline-danger mx-1' to={"/tools"}>
                        Cancelar
                    </Link>
                </form>
            </div>
        </div>
     </div>
   )
}
