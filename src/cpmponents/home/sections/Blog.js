

import React,{useState,useLayoutEffect,createElement,useEffect } from 'react';
import {getPostsByType} from '../../../utilts/Models.js';

import moment from 'moment';

export default function News(props) {
  useEffect(() => {
    const file = document.createElement("link");
    file.rel = "stylesheet";
    file.href = "assets/dist/blog.css";
    document.body.appendChild(file);
  });


  
  const [posts,setPosts]=useState([]);
  const [perPage, setPerPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [paginationCount, setPaginationCount] = useState([]);

  var pathname=window.location.pathname.split('/'),
      get_page=parseInt(pathname[pathname.length - 1 ] );

  const current_page = (!isNaN(get_page) && get_page>0 )? get_page : 1 ;

  const prev_page=current_page-1;
  const next_page= current_page+1;

  useLayoutEffect(async() => {
    
  getPostsByType(8,3,current_page).then((res) => {
      
      const res_data= res.data;
      const posts=[];
      
     /*  setTotalPosts(res_data.total); */
      
      
      const pagination_count=Math.ceil(parseInt(res_data.total)/perPage);

      const temt_count=[...paginationCount];

      for(let i=1 ;i<=pagination_count;i++){
        temt_count.push(i);
      }


      setPaginationCount(temt_count);

      for(let index in res_data.data){
        let row = res_data.data[index];

        posts.push({
         
          title:row.title,
          
          featured:row.featured,
          metas:row.metas,
          link:row.slug,
          date:row.date,
          author:row.author,
          author_image:row.author_image
         


        });

      }


      setPosts(posts);
      
    })






  }, [])









  return (
   <>
         
       <section id="blog">
      <div className="container-fluid">
        <div className="row">
         {
           posts.map(item=>{
             return(
              <div className="col-lg-4 col-sm-6 col-md-4">
              <div className="blog-item">
                <div className="blog-header">
                  <img src={item.author_image} alt="sds" width='50' height='50' />
                  <a href={"/read_news/"+item.link}>
                    <span>by</span> {item.author}
                  </a>
                  <p>{moment(new Date(item.date)).format('MMM Do YY')}</p>
                </div>
                <div className="blog-body">
                  <a href={"/read_news/"+item.link}>
                    <img src={item.featured} alt="" />
                  </a>
                </div>
                <div className="blog-footer">
                  <a href={"/read_news/"+item.link}>
                    {item.title}
                  </a>
                </div>
              </div>
            </div>
             )
           })
         }         
         {
           /*
          <div className="col-lg-4 col-sm-6 col-md-4">
            <div className="blog-item">
              <div className="blog-header">
                <img src="assets/images/user-6-49x49.jpg" alt="" />
                <a href="singleBlog.html">
                  <span>by</span> Kate William
                </a>
                <p>May 17, 2018</p>
              </div>
              <div className="blog-body">
                <a href="singleBlog.html">
                  <img src="assets/images/post-17-370x267.jpg" alt="" />
                </a>
              </div>
              <div className="blog-footer">
                <a href="singleBlog.html">
                  Everyday Dinner Choices for a Healthier, Happier You
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-4">
            <div className="blog-item">
              <div className="blog-header">
                <img src="assets/images/user-5-49x49.jpg" alt="" />
                <a href="singleBlog.html">
                  <span>by</span> Peter Milan
                </a>
                <p>May 17, 2018</p>
              </div>
              <div className="blog-body">
                <a href="singleBlog.html">
                  <img src="assets/images/post-18-370x267.jpg" alt="" />
                </a>
              </div>
              <div className="blog-footer">
                <a href="singleBlog.html">
                  Standardizing the Organic Industry in the USA
                </a>
              </div>
            </div>
          </div>
           
           */
         }
           

        </div>
      </div>
    </section>
   
    
   </>
  );
}
