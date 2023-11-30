import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
function ProductDelet(){
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost/React_project/back-end/products-admin/delete.php?id=${id}`;

        axios.delete(url)
            .then(response => {
                console.log("product deleted:", response.data);
                navigate('/admin/products');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [id, navigate]);
    return(
        <></>
    )
}
export default ProductDelet;