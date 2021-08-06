import React,{useEffect,createElement} from "react";

export default function About() {


  useEffect(() => {

      const file=document.createElement('link');
      file.rel='stylesheet'
      file.href='assets/dist/about.css';
      document.body.appendChild(file);
   
  })


  return (
    <>
    
    <section id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-title">
                <h2>About Our Farm</h2>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li className="light-color">About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="choose">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="assets/images/about-1-519x446.jpg" alt="sda" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-content">
                <h1>Why Choose Us</h1>
                <div className="company-items-header">
                  <div className="items one active">Our Goals</div>
                  <div className="items two">Our Values</div>
                  <div className="items three">Our Missions</div>
                </div>
                <div className="company-items-content goals active-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                  <ul>
                    <li>Eiusmod tempor</li>
                    <li>Nostrud exercitation</li>
                    <li>Dolore magna</li>
                    <li>Laboris nisi</li>
                    <li>Minim veniam</li>
                    <li>Officia deserunt</li>
                  </ul>
                </div>
                <div className="company-items-content missions">
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <ul>
                    <li>Dolore magna</li>
                    <li>Eiusmod tempor</li>
                    <li>Minim veniam</li>
                    <li>Officia deserunt</li>
                    <li>Nostrud exercitation</li>
                    <li>Laboris nisi</li>
                  </ul>
                </div>
                <div className="company-items-content values">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <ul>
                    <li>Officia deserunt</li>
                    <li>Eiusmod tempor</li>
                    <li>Minim veniam</li>
                    <li>Laboris nisi</li>
                    <li>Nostrud exercitation</li>
                    <li>Dolore magna</li>
                  </ul>
                </div>
                <div className="company-items-buttons">
                  <a href="#"><span>Read more</span></a>
                  <a className="contact-btn" href="contact.html"><span>Contact us</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="partner">
                <h1>Our History</h1>
                <div className="owl-carousel owl-theme">
                  <div className="item history-img">
                    <img src="assets/images/project-1-420x308.jpg" alt="" />
                    <div className="border-wrapper"></div>
                  </div>
                  <div className="item history-img">
                    <img src="assets/images/project-2-420x308.jpg" alt="" />
                    <div className="border-wrapper"></div>
                  </div>
                  <div className="item history-img">
                    <img src="assets/images/project-3-420x308.jpg" alt="" />
                    <div className="border-wrapper"></div>
                  </div>
                  <div className="item history-img">
                    <img src="assets/images/project-4-420x308.jpg" alt="" />
                    <div className="border-wrapper"></div>
                  </div>
                  <div className="item history-img">
                    <img src="assets/images/project-5-420x308.jpg" alt="" />
                    <div className="border-wrapper"></div>
                  </div>
                  <div className="item history-img">
                    <img src="assets/images/project-3-420x308.jpg" alt="" />
                    <div className="border-wrapper"></div>
                  </div>
                  <div className="item history-img">
                    <img src="assets/images/project-2-420x308.jpg" alt="" />
                    <div className="border-wrapper"></div>
                  </div>
                  <div className="item history-img">
                    <img src="assets/images/project-5-420x308.jpg" alt="" />
                    <div className="border-wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="service-title">
                <h2>Our Services</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="service">
                <div className="service-icon">
                  <i className="fas fa-car"></i>
                </div>
                <h5><a href="service.html">Food delivery</a></h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="service">
                <div className="service-icon">
                  <i className="far fa-lemon"></i>
                </div>
                <h5><a href="service.html">Juice production</a></h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="service">
                <div className="service-icon">
                  <i className="fas fa-carrot"></i>
                </div>
                <h5><a href="service.html">Take-Home Meals</a></h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="service">
                <div className="service-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h5><a href="service.html">Seeds for Sale</a></h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="service">
                <div className="service-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h5><a href="service.html">Seedlings for Sale</a></h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="service">
                <div className="service-icon">
                  <i className="fas fa-tree"></i>
                </div>
                <h5><a href="service.html">Tree Care</a></h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h2>Our team</h2>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="team-member">
                <img src="assets/images/team-1-370x406.jpg" alt="" />
                <div className="team-member-info">
                  <h5>Ryan Wilson</h5>
                  <p>Founder</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="team-member">
                <img src="assets/images/team-2-370x406.jpg" alt="" />
                <div className="team-member-info">
                  <h5>Jill Peterson</h5>
                  <p>Garden Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="team-member">
                <img src="assets/images/team-3-370x406.jpg" alt="" />
                <div className="team-member-info">
                  <h5>Sam Robinson</h5>
                  <p>Coordinator</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="team-member">
                <img src="assets/images/team-4-370x406.jpg" alt="" />
                <div className="team-member-info">
                  <h5>Jane Watson</h5>
                  <p>Farm Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="team-member">
                <img src="assets/images/team-5-370x406.jpg" alt="" />
                <div className="team-member-info">
                  <h5>Mike Adams</h5>
                  <p>Harevst Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="team-member">
                <img src="assets/images/team-6-370x406.jpg" alt="" />
                <div className="team-member-info">
                  <h5>Peter Smith</h5>
                  <p>Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}
