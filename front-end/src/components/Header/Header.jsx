import React from 'react';
import './hom.css';
import './animate.css';
import './font-awesome.min.css';
import './glass-case.css';
import './magnific-popup.css';
import './responsive.css';
import { FiLogOut } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleLogout = () => {
    localStorage.setItem('login', 'false');
    window.location.href = './';
  };
  

  const isLoggedIn = localStorage.getItem('login') === 'true';

  return (
    <div>
      <header className="header transition">
        <div className="container position-r">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 align-flax">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <img alt="log" src="/images/logo.png" className="transition" />
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-6 position-i">
              <div className="transition">
                <div className="menu">
                  <ul>
                    <li>
                      <a href="/">HOME</a>
                    </li>
                    <li>
                      <a href="/Products">PRODUCTS</a>
                    </li>
                    <li>
                      <a href="/Offers">OFFERS</a>
                    </li>
                    <li>
                      <a href="About">ABOUT US</a>
                    </li>
                    <li>
                      <a href="Contact">CONTACT US</a>
                    </li>
                    {!isLoggedIn && (
                      <>
                        <li>
                          <a href="login">LOGIN</a>
                        </li>
                        <li>
                          <a href="register">REGISTER</a>
                        </li>
                      </>
                    )}
                    <li>
                      <a href="contact.html">
                        {' '}
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          // className="fa-x"
                          style={{ color: '#020203' ,fontSize: '25px' }}
                        />
                      </a>
                    </li>
                    {isLoggedIn && (
                      <>
                        <li key="loggedin">
                          <a href="UserProfile">
                            <FontAwesomeIcon
                              icon={faUser}
                              style={{ color: '#020203' ,fontSize: '25px' }}
                            />
                          </a>
                        </li>
                        <li>
                          <FiLogOut
                            style={{ fontSize: '30px' ,cursor:'pointer' }}
                            onClick={handleLogout}
                          />
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
