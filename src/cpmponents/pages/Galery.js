import React, { useEffect, createElement } from "react";

export default function Galery() {
  useEffect(() => {
    const file = document.createElement("link");
    file.rel = "stylesheet";
    file.href = "assets/dist/galery.css";
    document.body.appendChild(file);
  });

  return (
    <>
      <section id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-title">
                <h2>Galery</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="light-color">Galery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="galery">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/grid-gallery-1-370x303.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/grid-gallery-2-370x303.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/grid-gallery-3-370x303.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/grid-gallery-4-370x303.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/grid-gallery-5-370x303.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/grid-gallery-6-370x303.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/project-1-420x308.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/project-2-420x308.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <div className="galery-item">
                <div className="galery-img">
                  <img src="assets/images/project-3-420x308.jpg" alt="" />
                  <div className="border-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
