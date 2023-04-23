import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';

export default function ViewTicket() {

    const[ticket, setTicket]=useState({
        "ticket_title":"",
        "ticket_status":"",
        "ticket_description":"",
        "ticket_resolution":"",
        "ticket_created_date":"",
        "ticket_last_date":"",
        "ticket_assigned_tool":""
    });

    const {id}= useParams();

    useEffect(()=>{
        loadTicket();
    },[]);

    const loadTicket= async ()=>{
        const result= await axios.get(`http://localhost:8080/ticket/${id}`);
        setTicket(result.data);
    }

    const ticketId = ticket.ticket_assigned_tool;

    return (
        <div className='container text-center'>
            <div className='row justify-content-around'>
                <div>
                    <h1 className='my-3'>
                        Ver Información de Reporte
                    </h1>
                </div>
                <div className='col-md-8 border rounded shadow'>
                    <h3 className='card my-3'>Fichas generales</h3>
                    <div className='card-header'>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Título de Reporte:</b><br/>
                                {ticket.title}
                            </li>
                            <li className='list-group-item'>
                                <b>Estado del Reporte:</b><br/>
                                {ticket.status}
                            </li>
                            <li className='list-group-item'>
                                <b>Descripción del Reporte:</b><br/>
                                {ticket.description}
                            </li>
                            <li className='list-group-item'>
                                <b>Comentarios del Reporte:</b><br/>
                                {ticket.resolution}
                            </li>
                            <li className='list-group-item'>
                                <b>Fecha de Creación / Última Actualización</b><br/>
                                {ticket.createdDate} / {ticket.lastDateUpdate}
                            </li>
                            <li className='list-group-item'>
                                <b>Identificador de Reporte: </b><br/>
                                <QRCode className='my-2' value={id}/>
                            </li>
                        </ul>
                        <Link className='btn btn-primary my-2'
                        to={'/tickets'}>Regresar a Tickets</Link>
                        <Link className='btn btn-secondary mx-2'
                        to={`/viewTool/${ticket.assignedTool}`}>Ver Herramienta</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
