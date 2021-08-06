export default function Product(props){

  const {type}=props


    return(
        <section id="product"  className={ (type=='second') ? 'second_product' : null }  >
        <div className="container-fluid">
         

          <div className="row">
            <div className="col-lg-6">
              <div className="product-banner-image">
                <img src="assets/images/home-banner.jpg" alt="banner" />
                <div className="product-banner-content">
                  <h3>organic</h3>
                  <h2>Vegetables</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animateProduct">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item-image">
                    <img src="assets/images/product-5.png" alt="" />
                    <div className="product-overlay">
                      <a href="#"><span>add to cart</span></a>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h6><a href="singleProduct.html">Avocados</a></h6>
                    <p className="old-price">$59.00</p>
                    <p className="new-price">$30.00</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item-image">
                    <img src="assets/images/product-6.png" alt="" />
                    <div className="product-overlay">
                      <a href="#"><span>add to cart</span></a>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h6><a href="singleProduct.html">Corn</a></h6>
                    <p className="old-price"></p>
                    <p className="new-price">$18.00</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item-image">
                    <img src="assets/images/product-7.png" alt="" />
                    <div className="product-overlay">
                      <a href="#"><span>add to cart</span></a>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h6><a href="singleProduct.html">Broccoli</a></h6>
                    <p className="old-price"></p>
                    <p className="new-price">$25.00</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="product-item-image">
                    <img src="assets/images/product-8.png" alt="" />
                    <div className="product-overlay">
                      <a href="#"><span>add to cart</span></a>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h6><a href="singleProduct.html">Artichokes</a></h6>
                    <p className="old-price">$16.00</p>
                    <p className="new-price">$10.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}