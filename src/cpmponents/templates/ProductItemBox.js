import React, { useState, useEffect } from 'react';
import { getPostBySlug } from '../../utilts/Models.js';



export default (props) => {

    const {item}=props;
    
     
    const l_storage=window.localStorage;
    const basket_key = 'basket';





    const addBasket = (e) =>{
      e.preventDefault();
      
     
      const checkBasket = l_storage.getItem(basket_key);

      if (checkBasket){
          /* artiq sebete nese atib */
          const old_data = JSON.parse(l_storage.getItem(basket_key));
          
          old_data[item.id] = '1';

          l_storage.setItem(basket_key, JSON.stringify(old_data));

      }else{
          /* birinci defe */

          l_storage.setItem(basket_key, JSON.stringify(
              { [item.id] : '1'}
          ));

      }
      
  }


  return (
    <div className="col-lg-4 col-sm-6">
      <div className="product-item-image">
        <img src={item.featured} alt={item.title} />
        <div className="product-overlay">
          <a href="#"  onClick={addBasket.bind(this)} >
            <span>add to cart</span>
          </a>
        </div>
      </div>
      <div className="product-detail">
        <h6>
          <a href={"/shop_item/" + item.link}> {item.title}</a>
        </h6>
        {item.has_discount ? (
          <>
            <p className="old-price">${item.price}</p>
            <p className="new-price">${item.discount_price}</p>
          </>
        ) : (
          <p className="new-price">${item.price}</p>
        )}
      </div>
    </div>
  );
};
