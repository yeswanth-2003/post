import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Post(){

    const[form,setForm]=useState({
        Name:"",
        DOB:"",
        EmployeeID:"",
        PhoneNumber:""
    })

    const handlechange = (e) =>{
        const {name,value} = e.target;

        setForm({...form,[name]:value})
    }

    const handlesubmit = async (e) =>{

        e.preventDefault();

            const response = await fetch('http://localhost:5001/users/alluserdetails',{
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
        <div style={{backgroundColor:'skyblue',padding:'200px 40% ',minWidth:'700px' }}>
        <div style={{backgroundColor:'white',maxWidth:'600px',minWidth:'300px',border:'1px solid black',borderRadius:'10px',padding:'40px 40px',boxShadow:'0 4px 8px black' }}>
            <h2>LOG IN</h2>
            <form  onSubmit={handlesubmit} >
                <div className="form-group">
                    <label style={{marginTop:'10px' }} >Name</label>
                    <input type="text" name="Name" className="form-control" placeholder="Enter Name" value={form.Name} onChange={handlechange} required/>
                </div>
                <div className="form-group">
                    <label style={{marginTop:'10px' }}>DATE OF BIRTH</label>
                    <input type="date" name="DOB" className="form-control" placeholder="Enter Date Of Birth" value={form.DOB} onChange={handlechange} required/>
                </div>
                <div className="form-group">
                    <label style={{marginTop:'10px' }}>EmployeeID</label>
                    <input type="number" name="EmployeeID" className="form-control" placeholder="Enter EmployeeID" value={form.EmployeeID} onChange={handlechange} required/>
                </div>
                <div className="form-group">
                    <label style={{marginTop:'10px' }}>Phone Number</label>
                    <input type="number" name="PhoneNumber" className="form-control" placeholder="Enter PhoneNumber" value={form.PhoneNumber} onChange={handlechange} required/>
                </div>
                
                <button type="submit" className="btn btn-primary"style={{marginTop:'10px'}}>Submit</button>
            </form>
            {/* <div>
                <Link to={'/getuser'} ><button type="button" class="btn btn-primary">Get user with EmployeeID</button></Link>
            </div> */}
        </div>
        </div>
        

    )
}



export default Post
