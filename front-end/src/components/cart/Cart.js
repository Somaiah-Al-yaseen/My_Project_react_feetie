// import React from 'react'
// import dawn from "../images/product-5.png";

import Header from '../Header/Header';
import Footer from '../Header/Footer';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaTrashCan } from 'react-icons/fa6';
// import { useNavigate , useParams } from "react-router-dom";
const Cart = () => {



  


  
	localStorage.setItem('id',1);
	const [cart, setCart] = useState([]);
  // const [photo, setPhoto] = useState([]);
	const [subTotal, setSubTotal]=useState(0.0);
	useEffect(() => {
        axios.post('http://localhost/React_project/back-end/cart/layout.php', { id: localStorage.getItem('id') })
            .then(response => {
				setCart(response.data);
				let total = 0; // Initialize subTotal outside the map function
				response.data.forEach(item => {
				total += parseFloat(item.Price)  * parseFloat(item.Qunatity); 
        console.log(item.Image);
        // Use "Quantity" instead of "Qunatity"
        // setPhoto(item.Image)
				});
				setSubTotal(total); // Update subTotal after calculating it



				
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
	console.log(cart);
	console.log(subTotal);


	// const handleChange =(id , e) => {
	// 	const value = e.target.value ;
	// 	axios.post('http://localhost/React_project/back-end/cart/editquantity.php', { id: id , Qunatity: value})
	// 	.then(response => {
	// 		console.log(response.data);
			
	// 	})
	// 	.catch(error => {
	// 		console.error('Error:', error);
	// 	});	
	// }
	
  return (

    <div>
    <Header />



	<section>
  <section className="page-banner">
    <div className="container">
      <div className="page-banner-in">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-12">
            <h1 className="page-banner-title text-uppercase">Cart</h1>
          </div>
          <div className="col-xl-6 col-lg-6 col-12">
            <ul className="right-side">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pt-100">
    <div className="container">
      <div className="wishlist-table">
        <div className="responsive-table">
          <table className="table border text-center">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
			{cart.map(item => (
				
              <tr>
                <td className="text-left">
                  <div className="seller-box align-flax w-100">
                    <div className="seller-img">
                      <a href="product-detail.html" className="display-b">
                        <img   src={item.Image}  alt="shoes" className="transition" />
                      </a>
                    </div>
                    <div className="seller-contain pl-15">
                      <a
                        href="product-detail.html"
                        className="product-name text-uppercase"
                      >
                        {item.ProductName}
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="price">{item.Price} JOD</span>
                </td>
                <td>
                  <select
                    data-id={100}
                    className="quantity_cart"
                    name="quantity_cart"
					defaultValue={item.Qunatity}
					// onChange={handleChange(item.cartId)}
                  >
                    <option  value={1}>
                      1
                    </option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </td>
                <td>
                  <span className="price">{(item.Price*item.Qunatity).toFixed(2)} JOD</span>
                </td>
                <td>
                  <ul>
                   
                    <li>

                    <button >
                    <FaTrashCan />
                    </button>
                    
                    </li>
                  </ul>
                </td>
              </tr>
			
			  
			  ))}
              
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="share-wishlist shoping-con">
              <a href="shop.html" className="btn">
                <i className="fa fa-angle-left" /> Continue Shopping
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="share-wishlist">
             
            </div>
          </div>
        </div>
        <div className="estimate">
          <div className="row" style={{marginLeft:"25%" , marginRight:"25%"}} >
           
            <div className="col-md-12">
              <div className="cart-total-table">
                <div className="responsive-table" >
                  <table className="table border">
                    <thead>
                      <tr>
                        <th colSpan={2}>Cart Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Item(s) Subtotal :</td>
                        <td>
                          <div className="price-box">
                            <span className="price">{subTotal} JOD </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Shipping :</td>
                        <td>
                          <div className="price-box">
                            <span className="price">5 JOD</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="payable">
                        <span>The Total Price :</span>
                          
                        </td>
                        <td>
                          <div className="price-box">
                            <span className="price">{subTotal +5} JOD</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="share-wishlist">
                  <a href="Checkout" className="btn btn-color" >
                    Proceed to checkout <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="newsletter pt-100">
    <div className="container">
      <div className="newsletter-inner text-center ptb-100">
        <h2 className="newsletter-title">Sign up for Newsletter</h2>
        <p className="newsletter-sub">
          Wants to get latest updates! sign up for Free
        </p>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your email address"
              required=""
            />
          </div>
          <button type="submit" className="form-btn text-uppercase">
            <span className="sub-r">Subscribe</span>
            <i className="fa fa-send icon-r" />
          </button>
        </form>
      </div>
    </div>
  </section>
  <div className="top-scrolling">
    <a href="#main" className="scrollTo">
      <i className="fa fa-angle-up" aria-hidden="true" />
    </a>
  </div>
</section>
<Footer />

</div>
);
};

export default Cart;
