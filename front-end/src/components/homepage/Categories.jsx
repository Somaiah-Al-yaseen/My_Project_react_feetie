import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {

    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products based on the selected category
        axios.get(`http://localhost/React_project/back-end/homepage/Categories.php?categoryId=${categoryId}`) // Adjust the API endpoint
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [categoryId]);

    console.log(products);

    return (

        <div>
            <Header />

            <section className="newsletter featured pt-100">
                <div className="container">
                    <div className="newsletter-inner text-center ptb-100">
                        <div className="row mb-25 justify-content-center">
                            <div className="hading">
                                <h2 style={{ textDecoration: 'underline' }} className="hading-title"> <span style={{ color: 'red' }} >Categories</span></h2>
                            </div>
                        </div>
                        <br /> <br />
                        <div className="tab-content">
                            <div role="tabpanel" className="row tab-pane fade active show">



                                {products.map((product) => (

                                    <div className="featured-product mb-25" key={product.productID}>
                                        {/* Product image */}
                                        <div className="product-img transition mb-15">
                                            <a href={"/product/"+product.ProductID}>
                                                <img src={'/'+product.Image} alt={product.ProductName} className="transition" />
                                            </a>
                                            {/* New label */}
                                            <div className="new-label">
                                                <span className="text-uppercase">New</span>
                                            </div>
                                            {/* Sale label */}
                                            {product.sales === 1 ? (
                                                <div className="sale-label">
                                                    <span className="text-uppercase">Sale</span>
                                                </div>
                                            ) : null}

                                            {/* Quick view */}
                                            <div className="product-details-btn text-uppercase text-center transition">
                                                <a href="Productdetails" className="quick-popup">View Product</a>
                                            </div>
                                        </div>
                                        {/* Product description */}
                                        <div className="product-desc">
                                            <a href={"/product/"+product.ProductID} className="product-name text-uppercase">{product.ProductName}</a>
                                            {product.sales === 1 ? (
                                                <>
                                                    <del style={{ color: 'red' }} className="product-price">
                                                        {product.Price} JD
                                                    </del>
                                                    <br />
                                                    <span className="product-price">{(product.Price*0.6).toFixed(2)} JD</span>
                                                </>
                                            ) : (
                                                <span className="product-price">{product.Price} JD</span>
                                            )}
                                        </div>
                                    </div>


                                ))}


                                <div>
                                    <a href="/Products" className="btn">View All Products</a>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <Footer />

        </div>
    );
};

export default Categories;