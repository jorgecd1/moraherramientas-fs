import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';

export default function AddTicket() {

    // get parameter from url
    const {id} = useParams();

    // navigate controller
    let navigate= useNavigate();

    //constructor para modelo post
    const [tool, setTool]=useState({
        tool_name:"",
        tool_model:"",
        tool_detail:"",
        tool_description:"",
        tool_code:""
    });
    const[ticket, setTicket]= useState({
        "ticket_title":"",
        "ticket_status":"",
        "ticket_description":"",
        "ticket_resolution":"",
        "ticket_created_date":"",
        "ticket_last_date":"",
        "ticket_assigned_tool":""
    });
    const{ticket_title,ticket_status,ticket_description,ticket_resolution,ticket_created_date,ticket_last_date,ticket_assigned_tool}=ticket;

    // effecto a llamar tool
    useEffect(()=>{
        loadTool();
    },[]);

    // llamar información de la herramienta
    const loadTool=async ()=>{
        const result = await axios.get(`http://localhost:8080/tool/${id}`);
        setTool(result.data);
    }

    // modelos de actualización
    const onInputChange=(e)=>{
        setTicket({...ticket,[e.target.name]:e.target.value});
    };
    // onsubmit form
    const onSubmit= async(e)=>{
        e.preventDefault();
        ticket.ticket_assigned_tool = ticket_assigned_tool;
        await axios.post("http://localhost:8080/ticket", ticket);
        navigate(`/viewtool/${id}`);
    }

  return (
    <div className='container text-center'>
        <div className='row justify-content-around'>
            <div className='col-md-8 border rounded mt-2 shadow'>
                <h2 className='text-center m-4'>
                    Formato de Reporte
                </h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <label htmlFor='Ticket_title' className='form-label'>
                        Título del Reporte:
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='Registrar título'
                    name='ticket_title'
                    value={ticket_title}
                    onChange={(e)=>onInputChange(e)}/>
                    <label htmlFor='Ticket_status' className='form-label'>
                        Razón del Reporte
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder='placeholder'
                    name='ticket_status'
                    value={ticket_status}
                    onChange={(e)=>onInputChange(e)}/>
                    <label htmlFor='Ticket_description' className='form-label'>
                        Descripción del Reporte
                    </label>
                    <textarea
                    type={"text"}
                    className='form-control'
                    placeholder='Descripción breve del asunto...'
                    name='ticket_description'
                    value={ticket_description}
                    maxLength={250}
                    onChange={(e)=>onInputChange(e)}
                    />
                    <label htmlFor='Ticket_resolution' className='form-label'>
                        Comentarios adicionales (Si aplican):
                    </label>
                    <textarea
                    type={"text"}
                    className='form-control'
                    placeholder='Comentarios adicionales...'
                    name='ticket_resolution'
                    value={ticket_resolution}
                    maxLength={250}
                    onChange={(e)=>onInputChange(e)}/>
                    <label htmlFor='Ticket_assigned_tool' className='form-label'>
                        Número de identificación de Herramienta
                    </label>
                    <input
                    type={"text"}
                    className='form-control'
                    placeholder= {'Escriba el código de Herramienta ==> ' + id}
                    name='ticket_assigned_tool'
                    value={ticket_assigned_tool}
                    onChange={(e)=>onInputChange(e)}
                    />
                    <label htmlFor='Ticket_created_date' className='form-label'>
                        Fecha de creación del reporte:
                    </label>
                    <input
                    type={"date"}
                    className='form-control'
                    name='ticket_created_date'
                    value={ticket_created_date}
                    onChange={(e)=>onInputChange(e)}/>
                    <label htmlFor='Ticket_last_date' className='form-label'>
                        Fecha de Inicio del reporte:
                    </label>
                    <input
                    type={"date"}
                    className='form-control'
                    name='ticket_last_date'
                    value={ticket_last_date}
                    onChange={(e)=>onInputChange(e)}/>

                    <Link className='btn btn-danger mx-2' 
                    to={`/viewtool/${id}`}>Regresar a Herramienta</Link>
                    <button type="submit" className="btn btn-primary my-2 mx-1">Crear Ticket</button>
                </form>
            </div>
            <div className='col-md-4 border rounded mt-2 shadow'>
                <h3 className='text-center my-3'>
                    Detalles de Herramienta
                </h3>
                <div className='card my-2'>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Modelo de Herramienta:</b><br/>
                                {tool.tool_model} / {tool.tool_detail}
                            </li>
                            <li className='list-group-item'>
                                <b>Descripción de herramienta: </b><br></br>
                                {tool.tool_description}
                            </li>
                            <li className='list-group-item'>
                                <b>Identificador QR: </b><br></br>
                                <QRCode className='my-2' value={id}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

