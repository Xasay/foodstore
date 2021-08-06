import { useEffect, useLayoutEffect, useState, createElement } from "react";
import {
  getPostBySlug,
  getCategories,
  getPostsByType,
} from "../../utilts/Models.js";
import PageTop from "../templates/PageTop.js";

import moment from "moment";

export default function NewsSingle(props) {
  useEffect(async () => {
    const file = document.createElement("link");
    file.rel = "stylesheet";
    file.href = "assets/dist/singleBlog.css";
    document.body.appendChild(file);

    


  });

  const [post, setPost] = useState("");
  const [postMetas, setPostMetas] = useState("");
  const [postTags, setPostTags] = useState("");
  const [postGallery, setPostGallery] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popularNews, setPopularNews] = useState([]);

  const news_link = props.match.params.news_link;

  useLayoutEffect(async () => {
    getPostBySlug(news_link).then((res) => {
      let data = res.data;
      setPost(data);
      setPostMetas(data.metas);
      setPostTags(data.categories);

      const images = [...postGallery];

      for (let key in data.metas.gallery) {
        let row = data.metas.gallery[key];

        images.push(row);
      }

      setPostGallery(images);
    });
    /* */
    getCategories(8).then((res) => {
      let data = res.data;
      setCategories(data);
    });
    /* */
    getPostsByType(8, 2,1, "p.view DESC").then((res) => {
      
      const res_data= res.data;
      const posts=[];


      for(let index in res_data.data){
        let row = res_data.data[index];

        posts.push({
         
          title:row.title,
          featured:row.featured,
          link:row.slug

        });

      }


      setPopularNews(posts);


    });

  }, []);

  return (
    <>
      <PageTop id="12" />
      <section id="blogDetail">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="blog-header">
                <h4>{post.title}</h4>

                <span className="date">
                  <i className="far fa-clock"></i>
                  {moment(new Date(post.date)).format("MMM Do YY")}
                </span>
                <span className="author">
                  by
                  <h3>{post.author}</h3>
                </span>
                <p>{post.excerpt}</p>
              </div>
              <div className="blog-body">
                <div className="blog-image">
                  {postGallery.map((img) => {
                    return <img src={img} alt="oiio" />;
                  })}
                </div>
                <p>{post.content}</p>

                {postTags && (
                  <div className="blog-tags">
                    {postTags.map((item, key) => {
                      return (
                        <span className="tag">
                          {key != 0 ? "," + item.title : item.title}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-search">
                <input type="text" placeholder="Search the blog" />
              </div>
              <div className="blog-categories">
                <h5>Categories</h5>
                <ul>
                  <li>
                    <a className="service-item active-category" href="#">
                      See All
                    </a>
                  </li>
                  {categories.map((item) => {
                    return (
                      <li>
                        <a
                          className="service-item"
                          href={"/category/" + item.slug}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>


              <div className="popular-posts">
                <h5>Popular Posts</h5>
                {popularNews.map((item) => {
                  return (
                    <div className="post">
                      <a href={'/read_news/'+item.link}>
                        <img src={item.featured} alt="sdxs" />
                      </a>
                      <a href={'/read_news/'+item.link}>{item.title}</a>
                    </div>
                  );
                })}
              </div>
              
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
