import { useState } from "react"
const TempComp=()=>
{
    const {data,setData}=useDate({

        username:'',
        password:''
    })
    const handlechange=(e)=>{
        setData({...data,[e.target.id]:e.target.value})
        console.log(data)
    }
    const handlesubmit=()=>{
        e.preventDefault()
        console.log("final data")
        console.log(data)
    
    }

return(
 <>
 <form>
    <input type="text" placeholder="username" id="username" onChange={handlechange}/>
        <input type="password" placeholder="password" id="password" onChange={handlesubmit}/>
            <input type="submit" value="login"/>
    
 </form>
 </>
)
}
export default TempComp;