
import React,{useState,useLayoutEffect} from 'react';
import { getPostById} from '../../../utilts/Models';


export default function Parallax(){

  const [title,setTitle]=useState('');
  const [link, setLink] = useState('');
  const [excerpt, setExcerpt] = useState('');

  useLayoutEffect(async() => {
  
   getPostById(6).then( (res) => {
      
      const data= res.data;

      setTitle(data.title);
      setLink(data.link);
      setExcerpt(data.excerpt);

     


      
    })






  }, [])



    return(
        <section id="parallax">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="bg-parallax">
              <h2>{title}</h2>
                      <p>
                       {excerpt}
                      </p>
                      <a
                        href={link}
                        target="_blank"
                        ><span>view presentattion</span></a
                      >
                <div className="bottom-image"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}