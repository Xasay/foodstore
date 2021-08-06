
import React,{useState,useLayoutEffect} from 'react';
import {getPostsByType} from '../../../utilts/Models';

export default function Three_boks() {

   const [posts,setPosts]=useState([]);

    useLayoutEffect(async() => {
    
     getPostsByType(13).then( (res) => {
        
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
  
  
  
  
  
  
    },[])
  return (
    <section id="three_boks">
     <div className='container-fluid'>
        <div className="row">

            {
                posts.map(item=>{
                    return (
                        <div className="col-lg-4">
                        <div className="company-characteristics">
                            <div className="border">
                            <i className="fas fa-leaf"></i>
                            <h4>
                                <a href="#">{item.title}</a>
                            </h4>
                            </div>
                        </div>
                        </div>
                    )
                })
            }


           

            {/*
            <div className="col-lg-4">
            <div className="company-characteristics">
                <div className="border">
                <i className="fas fa-hammer"></i>
                <h4>
                    <a href="#">Best Equipment</a>
                </h4>
                </div>
            </div>
            </div>
            <div className="col-lg-4">
            <div className="company-characteristics">
                <div className="border">
                <i className="far fa-sun"></i>
                <h4>
                    <a href="#">Dedicated Team</a>
                </h4>
                </div>
            </div>
            </div>
            */}
            </div>
     </div>
    </section>
  );
}
