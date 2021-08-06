import { useLayoutEffect,useState } from 'react';
import {getPostById} from '../../utilts/Models';


export default function PageTop(props){

    const [title, setTitle] = useState('');
    const [coverImage, setCoverImage] = useState('');


   useLayoutEffect ( async ()=>{

    getPostById(props.id).then((res)=>{
        let data=res.data;

        setTitle(data.title);
        setCoverImage(data.featured);
    })



   },[])



    return(
        <>
          
            <section id="about">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="about-title"  style={{backgroundImage:"url("+ coverImage +")"}}  >
                        <h2>{title}</h2>
                        <ul>
                        <li><a href="/">Home</a></li>
                        <li className="light-color">{title}</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}