import React from 'react';
import {useState} from 'react';
import {addUser} from '../Services/api';
import {useNavigate} from 'react-router-dom';
const EditUser=()=>{
    const {id} =useParams()
    console.log(id)
    const navigate=useNavigate()
    const [data,setData] =useState({
        username:' ',
        password:' '
    })
    const fetchUser=async()=>{
        try{
            const res=await getUserId(id)
            setData(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const handleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res2=await editUser(id,data)
            console.log()
            if(res.status===201){
                alert('user added')
                navigate('/')
            }
        }
        catch(e){
            console.log(e)
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' id='username' placeholder='username' onChange={handleChange}/>
            <input type='password' id='password' placeholder='password' onChange={handleChange}/>
            <button type='submit' className='submit-btn'>Add</button>

        </form>
        </>
    )
}
export default AddUser;