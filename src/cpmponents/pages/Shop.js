import React, { useEffect, createElement, useState } from "react";
import PageTop from "../templates/PageTop.js";
import { AppendStyle } from "../../utilts/Append.js";
import { getPostsByType, getCategories } from "../../utilts/Models.js";
import ProductItemBox from "../templates/ProductItemBox.js";

export default (props) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [perPage, setPerPage] = useState(2);
  const [paginationCount, setPaginationCount] = useState([]);

  var pathname = window.location.pathname.split("/"),
    get_page = parseInt(pathname[pathname.length - 1]);

  const current_page = !isNaN(get_page) && get_page > 0 ? get_page : 1;
  const prev_page = current_page - 1;
  const next_page = current_page + 1;

  useEffect(() => {
    AppendStyle("shop");

    getPostsByType(10, perPage, current_page).then((res) => {
      const res_data = res.data;
      const posts = [];

      const pagination_count = Math.ceil(parseInt(res_data.total) / perPage);

      const temt_count = [...paginationCount];

      for (let i = 1; i <= pagination_count; i++) {
        temt_count.push(i);
      }

      setPaginationCount(temt_count);

      for (let index in res_data.data) {
        let row = res_data.data[index];

        let discount = row.metas.discount,
        price = row.metas.price,
        discount_start_date = new Date(row.metas.discount_start_date),
        discount_end_date = new Date(row.metas.discount_end_date),
        now_date = new Date(),
        calc_discount = (price * (100 - discount)) / 100;

        let has_discount = (discount_start_date <= now_date && discount_end_date >= now_date) ? true : false;
    



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
          discount_price: calc_discount
        });
      }


      setPosts(posts);
    });

    getCategories(10).then((res) => {
      let data = res.data;
      setCategories(data);
    });


  }, []);

  return (
    <>
      <PageTop id="32" />

      <section id="products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9">
              <div className="product-filter">
                <span>Showing 1–12 of 18 results</span>
                <select id="">
                  <option value="">Sort by newness</option>
                  <option value="">From new to old</option>
                  <option value="">From old to new</option>
                </select>
              </div>
              <div className="row">
                {posts &&
                  posts.map((item) => {
                    return (
                      <ProductItemBox   item={item}  />
                    );
                  })}
                <div className="col-lg-12">
                  <div className="product-pagenation">
                    <ul className="pagenationContainer">
                    {
                          current_page >1 && <li>
                            <a href={'/shop/' + prev_page} ><i className="fas fa-caret-left"></i></a>
                            </li>

                        }
                       {
                         paginationCount.map(page=>{
                            let class_name=(current_page==page)?'activePage' : '';
                           return(
                           <>
                             <li >
                               <a className={class_name} href={'/blog/' + page}>{page}</a>
                             </li>
                           </>
                           )
                         })
                       }
                      
                        {
                          current_page!=paginationCount.length &&  <li>
                           <a href={'/shop/' + next_page}> <i className="fas fa-caret-right"></i></a>
                            </li>
                          }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-search">
                <input type="text" placeholder="Product Search.." />
              </div>
              <div className="popular-categories">
                <h5>Popular categories</h5>
                <ul>
                  {categories.map((item) => {
                      return (
                        <li>
                          <input type="checkbox"  value={item.id} />
                            {item.title}
                          
                        </li>
                      );
                    })}
                  
                </ul>
              </div>
              <div className="price-filter">
                <h5>Filter by price</h5>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="0"
                  className="inputPrice"
                />
                <a href="#">
                  <span>Filter</span>
                </a>
                <p>
                  Price: $<span className="price-value"> </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
