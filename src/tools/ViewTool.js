import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';

export default function ViewTool() {

    const [tool, setTool]=useState({
        tool_name:"",
        tool_model:"",
        tool_detail:"",
        tool_description:"",
        tool_code:""
    });

    const {id}=useParams();

    useEffect(()=>{
        loadTool();
    },[]);

    const loadTool=async ()=>{
        const result = await axios.get(`http://localhost:8080/tool/${id}`);
        setTool(result.data)
    }

  return (
    <div className='container text-center'>
      <div className='row justify-content-around'>
        <div>
          <h1 className='my-3'> Ficha de Herramienta - Código #{tool.tool_code}</h1>
        </div>
        <div className='col-md-8 border rounded shadow'>
          <h3 className='text-center my-3'>Detalles de Herramienta</h3>
          <div className='card my-2'>
            <div className='card-header'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <b>Herramienta: </b>
                  {tool.tool_name}
                </li>
                <li className='list-group-item'>
                  <b>Modelo de Herramienta: </b>
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
          <Link className='btn btn-primary my-2' 
            to={"/tools"}>Regresar a Herramientas</Link>
          <Link className='btn btn-secondary mx-1'
            to={`/addTicket/${tool.id}`}>Crear Ticket</Link>
        </div>
        <div className='col-md-4 border rounded shadow'>
          <h3 className='text-center my-3'>Notas de Herramienta</h3>
          <div>
          <textarea
                    type={"text"}
                    className='form-control'
                    placeholder='Notas generales (no guardadas)...'
                    rows={20}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
