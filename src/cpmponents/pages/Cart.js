import React, { useEffect, createElement, useState } from "react";
import PageTop from "../templates/PageTop.js";
import { AppendStyle } from "../../utilts/Append.js";

import { getBasket } from "../../utilts/Models.js";

export default (props) => {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const l_storage = window.localStorage;
  const basket_key = "basket";
  const [updateBasket, setUpdateBasket] = useState(false);
 

  useEffect(() => {
    AppendStyle("cart");

    const checkBasket = l_storage.getItem(basket_key);

    if (checkBasket) {
      const cart_data = JSON.parse(checkBasket);
      const ids = Object.keys(cart_data).join(",");

      getBasket(ids).then((res) => {
        let res_data = res.data;
        const posts = [];

        for (let index in res_data.data) {
          let row = res_data.data[index];
          let discount = row.metas.discount,
            price = row.metas.price,
            discount_start_date = new Date(row.metas.discount_start_date),
            discount_end_date = new Date(row.metas.discount_end_date),
            now_date = new Date(),
            calc_discount = (price * (100 - discount)) / 100;

          let has_discount =
            discount_start_date <= now_date && discount_end_date >= now_date
              ? true
              : false;

             let qty= cart_data[row.id];

              let sum =(has_discount)?Math.ceil( qty*calc_discount) : qty*price;

              setTotal(prevState=>prevState + sum);

          posts.push({
            id:row.id,
            title: row.title,
            featured: row.featured,
            metas: row.metas,
            link: row.slug,
            date: row.date,
            author: row.author,
            author_image: row.author_image,
            has_discount: has_discount,
            price: price,
            discount_price: calc_discount,
            qty:qty,
            sum:sum,
            stock:row.metas.stock
          });
        }

        setPosts(posts);
      });
    }
  }, [updateBasket]);

  const updateItemCount=(product_id,e)=>{
    

    const old_data = JSON.parse(l_storage.getItem(basket_key));
            
    old_data[product_id] = e.target.value;

    l_storage.setItem(basket_key, JSON.stringify(old_data));

    setTotal(0);
    setUpdateBasket(Math.random());
  };

  const removeItem=(product_id,e)=>{

    if(window.confirm('Silmek isteyirsiz?')){
      
    const old_data = JSON.parse(l_storage.getItem(basket_key));
            
     delete  old_data[product_id] ;

    l_storage.setItem(basket_key, JSON.stringify(old_data));

    setTotal(0);
    setUpdateBasket(Math.random());
    }

  };

  return (
    <>
      <PageTop id="34" />

      <section id="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-container">
                {posts.length > 0 ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((item) => {
                       
                       
                        return (
                          <tr>
                            <td>
                              <a href={"/shop_item/" + item.link}>
                                <img src={item.featured} alt={item.title} />
                              </a>
                              <a href={"/shop_item/" + item.link}>Peaches</a>
                            </td>
                            <td>
                              {item.has_discount ? (
                                <>
                                  <p>$<del>{item.price}</del></p>
                                  <p className="new-price">
                                    ${item.discount_price}
                                  </p>
                                </>
                              ) : (
                                <p className="new-price">${item.price}</p>
                              )}
                            </td>
                            <td>
                              <input type="number"  min='1'  max={item.stock}  defaultValue={item.qty}  onChange={updateItemCount.bind(this,item.id)} />
                            </td>
                            <td>
                              <span>${item.sum}</span>
                            </td>
                            <td><button type='button'  onClick={removeItem.bind(this,item.id)} >Remove</button></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <p>Səbət boşdur</p>
                )}
              </div>
            </div>
            <div className="col-lg-6  col-md-6"></div>
            {posts.length > 0 && (
              <div className="col-lg-12  col-md-12 ">
                <div className="confirm-price">
                  <span>total:</span>
                  <h5>${total}</h5>
                  <a href="checkout.html">
                    <span>proceed to checkout</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
