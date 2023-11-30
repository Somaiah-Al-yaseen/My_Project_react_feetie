import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import axios from 'axios';

const HomePage = () => {

    const [products, setProducts] = useState([]);
  const [salesProducts, setSalesProducts] = useState([]);

  // Function to fetch products
  const fetchProducts = (endpoint, setStateFunction) => {
    axios.get(`http://localhost/React_project/back-end/homepage/${endpoint}`)
      .then((response) => {
        setStateFunction(response.data.slice(0, 4)); // Slice the first 4 products
      })
      .catch((error) => {
        console.error(`Error fetching ${endpoint}:`, error);
      });
  };

  useEffect(() => {
    // Fetch the first 4 products from your backend API
    fetchProducts('products.php', setProducts);
    fetchProducts('Offers.php', setSalesProducts);
  }, []);

    console.log();


    return (
        <div>
            <Header />

            {/* New section 1: "banner" */}
            <section className="home-banner">
                <div className="container">
                    <div className="home-slider owl-carousel">
                        {/* First banner */}


                        <div className="banner-bg align-flax">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 align-flax">
                                        <div className="banner-img">
                                            <img src="images/banner-2.png" alt="banner" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 align-flax">
                                        <div className="banner-heading w-100">
                                            <label className="banner-top">
                                                Get UP To <span>40%</span> Off
                                            </label>
                                            <h2 className="banner-title">
                                                season <span>sale</span>
                                            </h2>
                                            <p className="banner-sub">
                                                Step into style and comfort with every pair. Discover your perfect fit today
                                            </p>
                                            <a href="Products" className="btn">
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second banner */}

                        {/* <div className="banner-bg align-flax">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 align-flax">
                                        <div className="banner-img">
                                            <img src="images/banner.jpg" alt="banner" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 align-flax">
                                        <div className="banner-heading w-100">
                                            <label className="banner-top">
                                                Get UP To <span>40%</span> Off
                                            </label>
                                            <h2 className="banner-title">
                                                men <span>shoes</span>
                                            </h2>
                                            <p className="banner-sub">
                                                Experience the ultimate in shoe shopping - where style meets quality and affordability.
                                            </p>
                                            <a href="Products" className="btn">
                                                Shop now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>


            {/* New section 2: "FEATURED PRODUCTS" */}
            <section className="featured pt-100">
                <div className="container">
                    <div className="row mb-25 ">
                        {/* Heading */}
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="hading">
                                <h2 className="hading-title">FEATURED <span>PRODUCTS</span></h2>
                            </div>
                        </div>
                        {/* Filter tabs */}

                    </div>
                    {/* Tab content */}
                    <div className="tab-content">

                        <div role="tabpanel" className="row tab-pane fade active show justify-content-center" >



                            {products.map((product) => (

                                <div className="featured-product mb-25" >
                                    <div className="product-img transition mb-15">
                                        <a href={"/product/"+product.ProductID}>
                                            <img src={product.Image} alt={product.ProductName} className="transition" />
                                        </a>
                                        <div className="new-label">
                                            <span className="text-uppercase">New</span>
                                        </div>
                                        <div className="product-details-btn text-uppercase text-center transition">
                                            <a  href='' className="quick-popup mfp-iframe">Add To Cart</a> 
                                        </div>
                                    </div>
                                    <div className="product-desc">
                                        <a href={"/product/"+product.ProductID} className="product-name text-uppercase">{product.ProductName}</a>
                                        <span className="product-pricce">{product.Price} JD</span>
                                    </div>
                                </div>

                            ))}






                            <a href="Products" style={{ width: '20%', marginLeft: '2%', marginBottom: '3%' }} className="btn">View All Products</a>


                        </div>
                    </div>
                </div>
            </section>



            {/* New section 3: "offer-banner" */}

            <section className="offer-banner pt-70">
                <div className="container">
                    <div className="offer-bg bg text-center ptb-120">
                        <label className="banner-top text-uppercase">PROMOTION SALE <span>OFF 50%</span></label>
                        <h1 className="banner-title text-uppercase"><span>the</span> summer</h1>
                        <a href="Products" className="btn">Shop now</a>
                    </div>
                </div>
            </section>


            {/* New section 4: "Categories" */}

            <section className="featured pt-100">
                <div className="container">
                    <div className="row mb-25">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="hading">
                                <h2 className="hading-title">Categories</h2>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div role="tabpanel" className="row tab-pane fade active show">
                            {/* Category 1 */}
                            <div className="featured-product mb-25">
                                <div className="product-img transition mb-15">
                                    <a href="Categories/1">
                                        <img style={{ height: '350px', width: '350px' }} src="images/cat-1.png" alt="product" className="transition" />
                                    </a>
                                    <div className="new-label">
                                        <span className="text-uppercase">New</span>
                                    </div>
                                    <div className="product-details-btn text-uppercase text-center transition">
                                        <a href="Categories/1" className="quick-popup mfp-iframe">Explore Category</a>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <h2 style={{ textAlign: 'center' }}>Women's Shoes</h2>

                                </div>
                            </div>

                            {/* Category 2 */}
                            <div className="featured-product mb-25">
                                <div className="product-img transition mb-15">
                                    <a href="Categories/2">
                                        <img style={{ height: '350px', width: '350px' }} src="images/cat-2.png" alt="product" className="transition" />
                                    </a>
                                    <div className="product-details-btn text-uppercase text-center transition">
                                        <a href="Categories/2" className="quick-popup">Explore Category</a>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <h2 style={{ textAlign: 'center' }}>Men's Shoes</h2>
                                </div>
                            </div>

                            {/* Category 3 */}
                            <div className="featured-product mb-25">
                                <div className="product-img transition mb-15">
                                    <a href="Categories/3">
                                        <img style={{ height: '350px', width: '350px' }} src="images/cat-3.png" alt="product" className="transition" />
                                    </a>
                                    <div className="sale-label">
                                        <span className="text-uppercase">Sale</span>
                                    </div>
                                    <div className="product-details-btn text-uppercase text-center transition">
                                        <a href="Categories/3" className="quick-popup">Explore Category</a>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <h2 style={{ textAlign: 'center' }}>Kids' Shoes</h2>
                                </div>
                            </div>

                            {/* Category 4 */}
                            <div className="featured-product mb-25">
                                <div className="product-img transition mb-15">
                                    <a href="Categories/4">
                                        <img style={{ height: '350px', width: '350px' }} src="images/cat-4.png" alt="product" className="transition" />
                                    </a>
                                    <div className="product-details-btn text-uppercase text-center transition">
                                        <a href="Categories/4" className="quick-popup">Explore Category</a>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <h2 style={{ textAlign: 'center' }}>Baby Shoes</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* Newsletter Section */}
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



                                <div>
                                    <a href="/Offers" className="btn">View All Ofeers</a>

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

export default HomePage;