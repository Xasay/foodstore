
import React,{useState,useLayoutEffect} from 'react';
import {getPostsByType} from '../../../utilts/Models';
export default function Counter() {
   
  const [posts,setPosts]=useState([]);

  useLayoutEffect(() => {
  getPostsByType(15).then( (res) => {
      
      const res_data= res.data;
      const posts=[];


      for(let index in res_data.data){
        let row = res_data.data[index];

        posts.push({
         
          title:row.title,
          metas:row.metas

        });

      }


      setPosts(posts);
    })






  }, [])



  return (
    <section id="counter">
      <div className="container">
        <div className="row">
          {
            posts &&  posts.map(item=>{

              return(
                  <>
                     <div className="col-lg-3 col-sm-6 col-md-3">
                      <div className="counters right-border">
                       <div className="counter-item">
                         <span className="counter">{item.metas.count}</span>
                         <i className={item.metas.icon_class}></i>
                         <h6>{item.title}</h6>

                        </div>
                      </div>
                     </div>
                  </>

              )

            })
          }

{/*

          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="counters right-border">
              <div className="counter-item">
                <span className="counter">800</span>
                <i className="fas fa-file-upload"></i>
                <h6>Products</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="counters right-border">
              <div className="counter-item">
                <span className="counter">679</span>
                <i className="fas fa-sun"></i>
                <h6>Happy clients</h6>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <div className="counters">
              <div className="counter-item">
                <span className="counter">13</span>
                <i className="fas fa-user-tie"></i>
                <h6>Farmers</h6>
              </div>
            </div>
          </div>
       
       
*/}
        </div>
      </div>
    </section>
  );
}
