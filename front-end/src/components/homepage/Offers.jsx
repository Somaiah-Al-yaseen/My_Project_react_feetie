import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import axios from 'axios';

const Offers = () => {

    const [salesProducts, setSalesProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/React_project/back-end/homepage/Offers.php')
        .then((response) => {
            setSalesProducts(response.data);
        })
        .catch((error) => {
            console.error('Error fetching offer products:', error);
        });


}, []);

    return (

        <div>
        <Header />


        <section className="newsletter featured pt-100">
                <div className="container">
                    <div className="newsletter-inner text-center ptb-100">
                        <div className="row mb-25 justify-content-center">
                            <div className="hading">
                                <h2 className="hading-title">DISCOUNT <span style={{ color: 'red' }}>SECTION</span></h2>
                            </div>
                        </div>
                        <br /> <br />
                        <div className="tab-content">
                            <div role="tabpanel" className="row tab-pane fade active show">



                                {salesProducts.map((product) => (
                                    <div className="featured-product mb-25">
                                        {/* Product image */}
                                        <div className="product-img transition mb-15">
                                            <a href={"/product/"+product.ProductID}>
                                                <img src={product.Image} alt="product" className="transition" />
                                            </a>
                                            {/* New label */}
                                            <div className="new-label">
                                                <span className="text-uppercase">New</span>
                                            </div>
                                            {/* Sale label */}
                                            <div className="sale-label">
                                                <span className="text-uppercase">Sale</span>
                                            </div>
                                            {/* Quick view */}
                                            <div className="product-details-btn text-uppercase text-center transition">
                                                <a href="Productdetails" className="quick-popup">Add To Cart</a>
                                            </div>
                                        </div>
                                        {/* Product description */}
                                        <div className="product-desc">
                                            <a href={"/product/"+product.ProductID} className="product-name text-uppercase">{product.ProductName}</a>
                                            <del style={{ color: 'red' }} className="product-pricce">{product.Price} JD</del> <br />
                                            <span  className="product-pricce">{(product.Price*0.6).toFixed(2)} JD</span>
                                        </div>
                                    </div>
                                ))}



                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        <Footer />

        </div>
        );
};

export default Offers;