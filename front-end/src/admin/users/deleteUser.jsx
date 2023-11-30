import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function DeleteUser(){
    const { UserId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost/React_project/back-end/users-admin/delete.php?id=${UserId}`;

        axios.delete(url)
            .then(response => {
                console.log("User deleted:", response.data);
                navigate('/admin/users');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [UserId, navigate]);
    return(
        <>

        </>
    )
}
export default DeleteUser;