import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Productdetails = () => {

  const { productId } = useParams();
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




  return (



    <div>
      <Header />

      <section className="product-detail-main pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12">
              <div className="align-center mb-md-30">
                <img src={'/' + product.Image} alt={product.Image} />
                {/* <ul id="glasscase" className="">
                <li className='insideThisWasThePic'></li>
              </ul> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-12">
              <div className="product-detail-in">
                <h2 className="product-item-name text-uppercase">{product.ProductName}</h2>
                <div className="price-box">



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


                  <div className="rating-summary-block">
                    <div className="star-rating">
                      <input id="star-5" type="radio" name="rating" value="star-5" />
                      <label htmlFor="star-5" title="5 stars">
                        <FontAwesomeIcon icon={faStar} className="active" />
                      </label>
                      <input id="star-4" type="radio" name="rating" value="star-4" />
                      <label htmlFor="star-4" title="4 stars">
                        <FontAwesomeIcon icon={faStar} className="active" />
                      </label>
                      <input id="star-3" type="radio" name="rating" value="star-3" />
                      <label htmlFor="star-3" title="3 stars">
                        <FontAwesomeIcon icon={faStar} className="active" />
                      </label>
                      <input id="star-2" type="radio" name="rating" value="star-2" />
                      <label htmlFor="star-2" title="2 stars">
                        <FontAwesomeIcon icon={faStar} className="active" />
                      </label>
                      <input id="star-1" type="radio" name="rating" value="star-1" />
                      <label htmlFor="star-1" title="1 star">
                        <FontAwesomeIcon icon={faStar} className="active" />
                      </label>
                    </div>
                    <span>1 Review (s)</span>
                  </div>
                  <div className="product-des">
                    <p>{product.Description}</p>
                  </div>
                  <ul>
                    <li><FontAwesomeIcon icon={faCheck} /> Satisfaction 100% Guaranteed</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Free shipping on orders over $99</li>
                    <li><FontAwesomeIcon icon={faCheck} /> 14 day easy Return</li>
                  </ul>
                  <div className="row mt-20">
                    <div className="col-12">



                      <div className="product-action">
                        <ul>
                          <li>
                          <button>Add To Cart</button>

                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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

export default Productdetails;