import React,{useEffect,createElement} from "react";

export default function Footer() {


  useEffect(() => {

      const script=document.createElement('script');
      script.src='assets/dist/main.js';
      document.body.appendChild(script);
   
  })


  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12"></div>
          <div className="col-lg-4 col-sm-4">
            <div className="footer-info">
              <a href="/">
                <img src="assets/images/logo-inverse-154x42.png" alt="" />
              </a>
              <p>
                Herber is an organic farm located in California. We offer
                healthy foods and products to our clients.
              </p>
              <div className="footer-icon">
                <i className="fas fa-phone-alt"></i>
                <span>+1 323-913-4688</span>
              </div>
              <div className="footer-icon">
                <i className="fas fa-clock"></i>
                <span>Mon-Sat: 07:00AM - 05:00PM</span>
              </div>
              <div className="footer-icon">
                <i className="fas fa-paper-plane"></i>
                <span>4730 Crystal Springs Dr, Los Angeles, CA 90027</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4">
            <div className="footer-subscribe">
              <h5>Newsletter</h5>
              <p>Join our email newsletter for news and tips.</p>
              <input type="email" placeholder="Enter Your E-mail" />
              <a href="#">
                <span>Subscribe</span>
              </a>
              <div className="social-icons">
                <p>Follow Us</p>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4">
            <div className="footer-galery">
              <h5>Galery</h5>
              <a href="#">
                <img src="assets/images/gallery-image-1-129x120.jpg" alt="" />
              </a>
              <a href="#">
                <img src="assets/images/gallery-image-2-129x120.jpg" alt="" />
              </a>
              <a href="#">
                <img src="assets/images/gallery-image-3-129x120.jpg" alt="" />
              </a>
              <a href="#">
                <img src="assets/images/gallery-image-4-129x120.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
