import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
    <div>ViewTool</div>
  )
}
