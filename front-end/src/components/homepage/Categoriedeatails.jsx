import React from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
const Categoriedeatails = () => {
    return (

        <div>
        <Header />

        <section className="newsletter featured pt-100">
                <div className="container">
                    <div className="newsletter-inner text-center ptb-100">
                        <div className="row mb-25 justify-content-center">
                            
                        </div>
                        <br /> <br />
                        <div className="tab-content">
                            <div role="tabpanel" className="row tab-pane fade active show">


                                <div className="featured-product mb-25">
                                {/* Product image */}
                                <div className="product-img transition mb-15">
                                    <a href="Productdetails">
                                        <img src="images/product-7.jpg" alt="product" className="transition" />
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
                                        <a href="Productdetails" className="quick-popup">View Product</a>
                                    </div>
                                </div>
                                {/* Product description */}
                                <div className="product-desc">
                                    <a href="Productdetails" className="product-name text-uppercase">BUSCIPIT AT MAGNA</a>
                                    <span className="product-pricce">$478.00</span>
                                </div>
                            </div>

                                
                                
                            <div className="featured-product mb-25">
                                {/* Product image */}
                                <div className="product-img transition mb-15">
                                    <a href="Productdetails">
                                        <img src="images/product-7.jpg" alt="product" className="transition" />
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
                                        <a href="Productdetails" className="quick-popup">View Product</a>
                                    </div>
                                </div>
                                {/* Product description */}
                                <div className="product-desc">
                                    <a href="Productdetails" className="product-name text-uppercase">BUSCIPIT AT MAGNA</a>
                                    <span className="product-pricce">$478.00</span>
                                </div>
                            </div>

                                
                                
                            <div className="featured-product mb-25">
                                {/* Product image */}
                                <div className="product-img transition mb-15">
                                    <a href="Productdetails">
                                        <img src="images/product-7.jpg" alt="product" className="transition" />
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
                                        <a href="Productdetails" className="quick-popup">View Product</a>
                                    </div>
                                </div>
                                {/* Product description */}
                                <div className="product-desc">
                                    <a href="Productdetails" className="product-name text-uppercase">BUSCIPIT AT MAGNA</a>
                                    <span className="product-pricce">$478.00</span> <br />
                                    <span className="product-pricce"> <del> $478.00</del></span>
                                </div>
                            </div>

                                
                                
                            <div className="featured-product mb-25">
                                {/* Product image */}
                                <div className="product-img transition mb-15">
                                    <a href="Productdetails">
                                        <img src="images/product-7.jpg" alt="product" className="transition" />
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
                                        <a href="Productdetails" className="quick-popup"> View Product </a>
                                    </div>
                                </div>
                                {/* Product description */}
                                <div className="product-desc">
                                    <a href="Productdetails" className="product-name text-uppercase">BUSCIPIT AT MAGNA</a>
                                    <span className="product-pricce">$478.00</span> <br />
                                    <span style={{ textDecoration: 'line-through' , color: 'red' }} className="product-pricce">$478.00</span>
                                </div>
                            </div>

                            <div>
                            <a href="Products"  className="btn">View All Products</a>

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

export default Categoriedeatails;