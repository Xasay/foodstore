
import React,{useState,useLayoutEffect} from 'react';
import {getPostsByType} from '../../../utilts/Models'

export default function Slider(){

  
  const [posts,setPosts]=useState([]);

  useLayoutEffect(() => {
  getPostsByType(7).then( (res) => {
      
      const res_data= res.data;
      const posts=[];


      for(let index in res_data.data){
        let row = res_data.data[index];

        posts.push({
         
          title:row.title,
          excerpt:row.excerpt,
          featured:row.featured,
          metas:row.metas

        });

      }


      setPosts(posts);
    })






  }, [])



    return(
        <section id="slider">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="slider-wrapper">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">

                    {
                      posts.map((item,key) =>{
                        let li_class=(key==0) ? "carousel-item active" : "carousel-item";
                        return (
                          <div className={li_class}  data-interval="10000"> 
                          <img
                            src={item.featured}
                            className="d-block w-100"
                            alt={item.title}
                          />
                          <div className="slider-content">
                            <h1 className="animate__animated animate__fadeInLeft">
                             {item.title}
                            </h1>
                            <p className="animate__animated animate__fadeInRight">
                             {item.excerpt}
                            </p>


                            {
                              (item.metas.slider_link.length>0)? <a
                              className="animate__animated animate__fadeInUpBig"
                              href={item.metas.slider_link}
                              ><span>Read more</span>
                              </a>:null
                            }
                            
                          </div>
                        </div>
                        )
                      })
                    }



                  {/* 
                   <div className="carousel-item" data-interval="2000">
                      <img
                        src="assets/images/slider-2.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="slider-content">
                        <h1 className="animate__animated animate__fadeInLeft">
                          Organic-Food
                        </h1>
                        <p className="animate__animated animate__fadeInRight">
                          As the leading organic farm, we maintain an
                          eco-friendly policy of growing and selling healthy
                          food without any additives.
                        </p>
                        <a
                          className="animate__animated animate__fadeInUpBig"
                          href="#"
                          ><span>Read more</span></a
                        >
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        src="assets/images/slider-3.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="slider-content">
                        <h1
                          className="black animate__animated animate__fadeInRight"
                        >
                          Quality-Control
                        </h1>
                        <p
                          className="blackText animate__animated animate__fadeInLeft"
                        >
                          As the leading organic farm, we maintain an
                          eco-friendly policy of growing and selling healthy
                          food without any additives.
                        </p>
                        <a
                          className="animate__animated animate__fadeInUpBig"
                          href="#"
                          ><span>Read more</span></a
                        >
                      </div>
                    </div>
    */}
                    </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleInterval"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}