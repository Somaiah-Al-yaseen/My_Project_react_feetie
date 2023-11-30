import Admin from "../main";
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import '../admins/admins.css';
function EditUser(){
    const { UserId } = useParams();
    const navigate = useNavigate();
    const [inputs , setInputs ] = useState({});
    const inputHandler = (e) =>{
        const name  = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values , [name]: value}));
    }
    const edit = (e) =>{
        e.preventDefault();

        if(inputs.Fname == null){
            alert("Please enter the Name");
            return;
        }
        if(inputs.password == null){
            alert("Please enter the password");
            return;
        }
        if(inputs.email == null){
            alert("Please enter the email");
            return;
        }


       const url = `http://localhost/React_project/back-end/users-admin/edit.php?id=${UserId}`;

        axios.post(url, inputs)
            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/admin/users');
            })
            
    }
    return(
        <>
            <Admin />
            <div className="content">
                <div className="edit">
                    <form  id="admins" onSubmit={edit}>
                        
                    <label>Fname</label>
                    <input type="text" name="Fname" onChange={inputHandler}/>
                    <label>Lname</label>
                    <input type="text" name="Lname" onChange={inputHandler}/>
                    <label>password</label>
                    <input type="password" name="password" onChange={inputHandler}/>
                    <label>email</label>
                    <input type="email" name="email" onChange={inputHandler}/>
                    <label>phone</label>
                    <input type="text" name="phone" onChange={inputHandler}/>
                    <label>address</label>
                    <input type="text" name="address" onChange={inputHandler}/>
                    <input type="submit" />
                    </form>
                </div>

            </div>
        </>
    )
}
export default EditUser;