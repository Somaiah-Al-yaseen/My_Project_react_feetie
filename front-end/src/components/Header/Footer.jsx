import React from 'react';
import './hom.css';
import './animate.css';
// import './bootstrap.min.css';
import './font-awesome.min.css';
import './glass-case.css';
import './magnific-popup.css';
// import './owl.carousel.css';
import './responsive.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faPinterestP } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    return (
        <footer className="footer pt-100">


          <hr />
        <div className="container">
          <div className="footer-inner">
            <div className="footer-box">
              <div className="footer-logo">
                <a href="/"><img src="/images/logo.png" alt="logo" /></a>
              </div>
              <p className="footer-desc">At Feetie , we offer a wide range of top-quality products at competitive prices. Shop with us for a convenient and satisfying shopping experience</p>
            </div>
  
           
  
                    <div className="footer-box footer-static m-0">
              <span className="opener plus"></span>
              <h2 className="footer-title text-uppercase">Your Account</h2>
              <ul className="footer-block-contant">
                <li>Women's Shoes</li>
                <li>Men's Shoes</li>
                <li>Kid's Shoes</li>
                <li>baby Shoes</li>
                <li>Your Shoes</li>
              </ul>
            </div>
  
            <div className="footer-box footer-contact footer-static m-0">
              <span className="opener plus"></span>
              <h2 className="footer-title text-uppercase">Contact us</h2>
              <ul className="footer-block-contant">
                <li><img src="/images/cont-1.png" alt="img" /><span>Aqaba, Said Darweesh, Jordan,WT47.</span></li>
                <li><img src="/images/cont-2.png" alt="img" />+ 91 123 456 789 0</li>
                <li><img src="/images/cont-3.png" alt="img" />Feetie@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="copy-right mt-100">
            <div className="row">
              <div className="col-md-4">
                <p className="copyright-text"> copyright &#169; 2023 FEETIE</p>
              </div>
              <div className="col-md-4">
                <ul>
                  <li><FontAwesomeIcon icon={faFacebook} className="fa-2x" style={{ color: '#020203' , marginLeft: '30px' }} /></li>
                  <li><FontAwesomeIcon icon={faTwitter} className="fa-2x" style={{ color: '#020203' , marginLeft: '30px' }} /></li>
                  <li><FontAwesomeIcon icon={faLinkedin} className="fa-2x" style={{ color: '#020203' , marginLeft: '30px' }} /></li>
                  <li><FontAwesomeIcon icon={faPinterestP} className="fa-2x" style={{ color: '#020203' , marginLeft: '30px' }} /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
        );
};
export default Footer;