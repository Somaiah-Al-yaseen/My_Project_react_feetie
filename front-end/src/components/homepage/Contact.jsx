import React from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
const Empty = () => {
    return (

        <div>
        <Header />

        <section class="page-banner">
				<div class="container">
					<div class="page-banner-in">
						<div class="row">
							<div class="col-xl-6 col-lg-6 col-12">
								<h1 class="page-banner-title text-uppercase">Contact Us</h1>
							</div>
							<div class="col-xl-6 col-lg-6 col-12">
								<ul class="right-side">
									<li><a href="index.html">Home</a></li>
									<li>Contact Us</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div class="contact-map pt-100">
				<div class="container">
					<div class="add-map">
                    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13885.137963007706!2d35.005758699999994!3d29.537208299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sjo!4v1694683475560!5m2!1sar!2sjo"
      style={{ border: 0, width: '100%', height:'600px' }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>		            </div>
				</div>
			</div>

			<section class="contact-form pt-100">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="contact-box">
								<ul>
									<li>
					                    <div class="contact-thumb">
					                        <img src="images/location.png" alt="location"/>
					                    </div>
					                    <div class="contact-box-detail">
					                        <h2 class="contact-title text-uppercase">ADDRESS</h2>
					                        <p>Aqaba, Said Darweesh, Jordan,WT47.</p>
					                    </div>
					                </li>
					                <li>
					                    <div class="contact-thumb">
					                        <img src="images/mail.png" alt="mail"/>
					                    </div>
					                    <div class="contact-box-detail">
					                        <h2 class="contact-title text-uppercase">Email</h2>
					                        <a href="mailto:expoge@exmaple.com">feetie@email.com, feetie@gmail.com</a>
					                    </div>
					                </li>
					                <li>
					                    <div class="contact-thumb">
					                        <img src="images/admin.png" alt="user"/>
					                    </div>
					                    <div class="contact-box-detail">
					                        <h2 class="contact-title text-uppercase">Phone</h2>
					                        <a href="tel:+911234567890">+9627888992004, +9627888992002</a>
					                    </div>
					                </li>
								</ul>
							</div>
						</div>
						<div class="col-md-8">
							<div class="contact-form-detail">
								<h2 class="contact-head text-uppercase">LEAVE A MESSAGE</h2>
								<form>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Name*" required/>
											</div>
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Your Email*" required/>
											</div>
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Phone*" required/>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<textarea class="form-control" placeholder="Massage"></textarea>
											</div>
										</div>
										<div class="col-12">
											<button class="btn btn-color">submit form</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>



        <Footer />

        </div>
        );
};

export default Empty;