import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function Test(){
    const  productId  = useParams();
    const [product, setProduct] = useState([]);
  
   
    useEffect(() => {
      // Fetch products based on the selected category
      axios.get(`http://localhost/React_project/back-end/homepage/Productdetails.php?productId=${productId}`) // Adjust the API endpoint
          .then((response) => {
            setProduct(response.data);
          })
          .catch((error) => {
              console.error('Error fetching products:', error);
          });
  }, [productId]);
  
  
  console.log(product);
  return(
    <div>
    <h1>fff</h1>
    </div>
  )
  
}

export default Test;