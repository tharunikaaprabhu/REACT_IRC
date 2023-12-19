import React from 'react';
import { useState } from 'react';
const StateEx =()=>
{
    const[data,setData]=useState(0);
    const inc =()=>{
        setData(data+1);
    }
    const dec =()=>{
        setData(data-1);
    }
    return(
        <>
        <button onclick={inc}>Increase</button>
        <p>{data}</p>
        <button onclick={dec}>Decrease</button></>

    )
}