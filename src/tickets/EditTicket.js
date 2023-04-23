import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';

export default function EditTicket() {

    // get id parameter from url
    const {id} = useParams();

    // navigate controller
    let navigate= useNavigate();

    // constructor datos de ticket
    const [ticket, setTicket]=useState({
        "ticket_title":"",
        "ticket_status":"",
        "ticket_description":"",
        "ticket_resolution":"",
        "ticket_created_date":"",
        "ticket_last_date":"",
        "ticket_assigned_tool":""
    });
    const{ticket_title,ticket_status,ticket_description,ticket_resolution,ticket_created_date,ticket_last_date,ticket_assigned_tool}=ticket;

    const onInputChange = (e) => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadTicket();
    },[]);

    const onSubmit= async(e)=>{
        console.log("Submit");
        console.log(ticket);
        e.preventDefault();
        await axios.put(`http://localhost:8080/ticket/${id}`,ticket);
        navigate("/tickets")
    }

    const loadTicket = async ()=>{
        const result = await axios.get(`http://localhost:8080/ticket/${id}`)
        setTicket(result.data)
    }

  return (
    <div>
        <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='ticket_title'>Nombre: </label>
                <input
                defaultValue={ticket_title}
                name="ticket_assigned_tool"
                placeholder={ticket_title}
                />
            </div>
            <button type="submit"> This </button>
        </form>
    </div>
    
  )
}
