import React, { useEffect, createElement } from "react";

export default function Checkout() {
  useEffect(() => {
    const file = document.createElement("link");
    file.rel = "stylesheet";
    file.href = "assets/dist/checkout.css";
    document.body.appendChild(file);
  });

  return (
    <>
    
    
    <section id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-title">
                <h2>Checkout</h2>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="index.html">Cart</a></li>
                  <li className="light-color">Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="payment">
        <div className="container">
          <div className="row">
            <div className="offset-lg-3 col-lg-6">
              <div className="delivery-detail">
                <form>
                  <input className="little" type="text" placeholder="First Name" />
                  <input className="little" type="text" placeholder="Last Name" />
                  <input className="full" type="text" placeholder="Company" />
                  <input className="full" type="text" placeholder="Address" />
                  <input className="little" type="text" placeholder="Post Code" />
                  <input className="little" type="text" placeholder="Phone" />
                  <input className="little" type="text" placeholder="Email" />
                  <input className="little" type="text" placeholder="City" />
                </form>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
                <div className="cart-totals">
                    <h5>Cart Totals</h5>
                    <table>
                        <tbody>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td>$800</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$800</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href="#"><span>proceed to checkout</span></a>
                </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  
    );
}