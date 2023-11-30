import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function DeleteCategory(){
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost/React_project/back-end/category-admin/delete.php?id=${id}`;

        axios.delete(url)
            .then(response => {
                console.log("User deleted:", response.data);
                navigate('/admin/category');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [id, navigate]);
    return(
        <></>
    )
}
export default DeleteCategory;