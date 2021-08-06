import React, { useState, useEffect } from 'react';
import { AppendStyle } from "../../utilts/Append.js"


import { getPostBySlug, getCategories, getPostsByType } from "../../utilts/Models.js";

import PageTop from "../templates/PageTop.js"

import ProductItemBox from '../templates/ProductItemBox.js';

export default function ProductSingle (props){
    const [post, setPost] = useState('');
    const [postMetas, setPostMetas] = useState('');
    const [postTags, setPostTags] = useState('');
    const [postGallery, setPostGallery] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    const [discountPrice, setDiscountPrice] = useState(null);
    const [hasDiscount, setHasDiscount] = useState(null);

    const item_link = props.match.params.item_link;

    const [addBasketCount, setAddBasketCount] = useState(1);
    
    const l_storage=window.localStorage;
    const basket_key = 'basket';

    useEffect(async () => {

        AppendStyle('singleProduct');

        getPostBySlug(item_link).then((res) => {
            let data = res.data;

            /*  */
            let discount = data.metas.discount,
                price = data.metas.price,
                discount_start_date = new Date(data.metas.discount_start_date),
                discount_end_date = new Date(data.metas.discount_end_date),
                now_date = new Date(),
                calc_discount = (price * (100 - discount)) / 100;


            setHasDiscount((discount_start_date <= now_date && discount_end_date >= now_date) ? true : false);
            setDiscountPrice(calc_discount);

            setPost(data);
            setPostMetas(data.metas);

            const images = [...postGallery];

            for (let key in data.metas.gallery) {
                let row = data.metas.gallery[key];

                images.push(row)


            }

            setPostGallery(images);


        })


        /*  */
        getPostsByType(10, 5, 1, 'p.view DESC').then((res) => {
            let res_data = res.data;

            

            const posts = [];


            for (let index in res_data.data) {
                let row = res_data.data[index];

                if (row.slug === item_link) {
                    continue;
                }

                let discount = row.metas.discount,
                    price = row.metas.price,
                    discount_start_date = new Date(row.metas.discount_start_date),
                    discount_end_date = new Date(row.metas.discount_end_date),
                    now_date = new Date(),
                    calc_discount = (price * (100 - discount)) / 100;

                let has_discount = (discount_start_date <= now_date && discount_end_date >= now_date) ? true : false;


                posts.push({
                    title: row.title,
                    featured: row.featured,
                    link: row.slug,
                    has_discount: has_discount,
                    price: price,
                    discount_price: calc_discount
                })
            }

            setPopularProducts(posts);
        })


    }, [])

    const addBasket = (e) =>{
        e.preventDefault();

        const checkBasket = l_storage.getItem(basket_key);

        if (checkBasket){
            /* artiq sebete nese atib */
            const old_data = JSON.parse(l_storage.getItem(basket_key));
            
            old_data[post.id] = addBasketCount;

            l_storage.setItem(basket_key, JSON.stringify(old_data));

        }else{
            /* birinci defe */

            l_storage.setItem(basket_key, JSON.stringify(
                { [post.id] : addBasketCount}
            ));

        }
        
    }

    return (
        <>
            <PageTop id="32" />

            <section id="productInfo">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-image">
                                <img src={post.featured} alt={post.title} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-detail">
                                <h2>{post.title}</h2>
                                {
                                    hasDiscount ? <> 
                                        <p class="old-price">${postMetas.price}</p>
                                        <p class="new-price">${discountPrice}</p>
                                    </> : <p class="new-price">${postMetas.price}</p>
                                }
                               
                                <p>{post.content}</p>
                                <div className="product-price-detail">
                                    <ul>
                                        <li>Type: <span>Avacados</span> </li>
                                        <li>Weight: <span>{postMetas.weight} kq</span></li>
                                        <li>Container: <span>Plastic</span></li>
                                    </ul>
                                    {
                                        (postMetas.stock > 3) ? <>
                                            <input type="number" onChange={(e) => setAddBasketCount(e.target.value)} defaultValue={addBasketCount} min="1" max={postMetas.stock} />
                                            <a href="#" onClick={addBasket.bind(this)}><span>add to cart</span></a>
                                        </> : <p>Bu məhsuldan qalmayıb</p>
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      </section>

        <section id="relatedProduct">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Related Products</h2>
                    </div>
                    
                        {
                            popularProducts && popularProducts.map(item => {
                                return (
                                    <ProductItemBox item={item} />
                                )
                            })
                        }
                    
                    
                </div>
            </div>
        </section>
    </>
    )
}