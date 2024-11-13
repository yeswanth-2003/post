import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Post(){

    // const url="http://localhost:5000/api/register"
    const[form,setForm]=useState({
        name:'',
        email:'',
        password:''
    })

    const handlechange = (e) =>{
        const {name,value} = e.target;

        setForm({...form,[name]:value})
    }

    const handlesubmit = async (e) =>{

        e.preventDefault();

            const response = await fetch('http://localhost:5000/api/register',{
                method:"Post",
                body:JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json"
                },
                mode:'cors'
            })
            const data = await response.json();
            console.log(data)
    }

    return(
        <div style={{backgroundColor:'skyblue',padding:'200px ' }}>
        <div style={{backgroundColor:'white',marginLeft:'200px',maxWidth:'600px',minWidth:'300px',border:'1px solid black',borderRadius:'10px',padding:'40px 40px',boxShadow:'0 4px 8px black' }}>
            <h2>LOG IN</h2>
            <form  onSubmit={handlesubmit} >
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Name" value={form.name} onChange={handlechange} required/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter Email" value={form.email} onChange={handlechange} required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" value={form.password} onChange={handlechange} required/>
                </div>
                
                <button type="submit" className="btn btn-primary"style={{marginTop:'10px'}}>Submit</button>
            </form>
        </div>
        </div>

    )
}



export default Post