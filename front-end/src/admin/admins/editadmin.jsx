import Admin from "../main";
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import './admins.css';

function EditAdmin(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [inputs , setInputs ] = useState({});
    const editHandler = (e) =>{
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


       const url = `http://localhost/React_project/back-end/admin/edit.php?id=${id}`;

        axios.post(url, inputs)
            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/admin');
            })
            
    }
    return(
        <>
            <Admin />
            <div className="content">
                <div className="edit">
                    <form  id="admins" onSubmit={edit}>
                        
                        <label>Fname</label>
                        <input type="text" name="Fname" onChange={editHandler}/>
                        <label>Lname</label>
                        <input type="text" name="Lname" onChange={editHandler}/>
                        <label>password</label>
                        <input type="password" name="password" onChange={editHandler}/>
                        <label>email</label>
                        <input type="email" name="email" onChange={editHandler}/>
                        <input type="submit" value='update'/>
                    </form>
                </div>

            </div>
        </>

    )
}
export default EditAdmin;