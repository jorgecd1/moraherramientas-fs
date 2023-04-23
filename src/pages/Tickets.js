import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function Tickets() {

    const [tickets, setTickets]= useState([]);

    useEffect(()=>{
        loadTickets();
    },[]);

    const {toolId}= useParams();

    const loadTickets= async ()=>{
        const result= await axios.get("http://localhost:8080/tickets");
        setTickets(result.data);
    }

    const deleteTicket= async (id)=>{
        await axios.delete(`http://localhost:8080/ticket/${id}`);
        loadTickets();
        console.log("Ticket deleted. Reloading. . .")
    }

    return (
        <div className='container'>
            <div className='py-3'>
                <h1>Directorio de Tickets</h1>
            </div>
            <div className='py-2'>
                <table className='table border shadow'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Concepto del Ticket</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Creado en:</th>
                            <th scope="col">Última actualización:</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tickets.map((ticket,index)=>(
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{ticket.title}</td>
                                    <td>{ticket.status}</td>
                                    <td>{ticket.createdDate}</td>
                                    <td>{ticket.lastDateUpdate}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                        to={`/viewTicket/${ticket.id}`}
                                        >Ver</Link>
                                        <button className='btn btn-danger mx-2'
                                        onClick={()=>deleteTicket(ticket.id)}>Borrar</button>
                                    </td>
                                </tr>
                            ))  
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
