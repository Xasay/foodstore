
import React,{useState,useLayoutEffect,useRef,useEffect} from 'react';
import {getMenusByType} from '../../utilts/Models'
export default function Header() {

  const [menus,setMenus]=useState([]);

  const lang_menu=useRef();

  const  l_storage=window.localStorage;
  const check_lang=l_storage.getItem('default_lang');


  useLayoutEffect(async() => {
  
   getMenusByType(1).then( (res) => {
      
      const res_data=res.data
      const menus=[];


      for(let index in res_data){
        let row = res_data[index];

        menus.push({
          content:row.content,
          title:row.title
        });

      }


      setMenus(menus);
    })






  }, [])

  useEffect(()=>{

   
      if(!Boolean(check_lang)){
        l_storage.setItem('default_lang','az');
      }

      lang_menu.current.addEventListener('change', function (e) {

        l_storage.setItem('default_lang', e.target.value);

        window.location.href = window.location.href;
    });



  },[])

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar-wrapper">
              <div className="navbar-logo">
                <a href="/">
                  <img src="assets/images/logo-default.png" alt="herber logo" />
                </a>
              </div>
              <ul className="navbar-list">
               {
              
                menus.map(item => {
                  return(
                    <li className="navbar-item  ">
                      <a href={item.content}>{item.title}</a>
                    </li>
                  )
                })  

                }
                <li className="navbar-item shopping">
                  <a href="/cart">
                    <i className="fas fa-shopping-bag"></i>
                  </a>
                </li>
                <li className='navbar-item p-0'  >
                   <select className="form-control p-0 " ref={lang_menu}>
                       <option value="az" selected={(check_lang==='az') ? true : false } >Az</option>
                       <option value="en" selected={(check_lang === 'en') ? true : false} >En</option>
                     </select>
                </li>
              </ul>
              <div className="navbar-responsive">
                <div className="navbar-responsive-btn"></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
