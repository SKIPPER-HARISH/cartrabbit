import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";
 
function EditEmployee() {
    const {id} = useParams();
    const [employee, setemployee] = useState({
        name: "",
        email: "",
        address: "",
        salary: "",
    });
 
    const location = useLocation();
    const navigate = useNavigate();
  
    const employeeId = location.pathname.split("/")[2];
    //alert(employeeId);
    const handleChange = (e) => {
        setemployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    useEffect(() => {
        axios.get("http://localhost:3001/get/"+id)
        .then(res => {
            console.log(res.data.Result[0])
            setemployee(res.data.Result[0]);
        })
        .catch(err => console.log(err))
    }, []);
 
    const handleUpdate = async (e) => {
        e.preventDefault();
  
        try {
            await axios.put(`http://localhost:3001/update/${employeeId}`, employee);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
 
    return (
        <div className='d-flex flex-column align-items-center pt-4'>
            <h2>Edit Employee</h2>
            <form className="row g-3 w-50">
                <div className="col-12">
                    <input type="text" className="form-control" id="id" name="id" value={id} disabled />
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder='Enter Name' autoComplete='off'
                    name="name" value={employee.name} onChange={handleChange}/>
                </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder='Enter Email' autoComplete='off'
                    name="email" value={employee.email} onChange={handleChange}/>
                </div>
                <div className="col-12">
                    <label className="form-label">Salary</label>
                    <input type="text" className="form-control" placeholder="Enter Salary" autoComplete='off'
                    name="salary" value={employee.salary} onChange={handleChange}/>
                </div>
                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="1234 Main St" autoComplete='off'
                    name="address" value={employee.address} onChange={handleChange}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                </div>
            </form>
        </div>
 
    )
}
 
export default EditEmployee