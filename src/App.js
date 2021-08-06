import React, { useState, useEffect, useLayoutEffect }  from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';


import {getTranslate} from '../src/utilts/Models.js';

import Index from './cpmponents/home/Index'
import Header from './cpmponents/templates/Header.js';
import Footer from './cpmponents/templates/Footer.js';



//pages
import About from './cpmponents/pages/About.js';
import Shop from   './cpmponents/pages/Shop.js';
import News from './cpmponents/pages/News.js';
import Galery from './cpmponents/pages/Galery.js';
import Contact from './cpmponents/pages/ContactUs.js';
import Cart from './cpmponents/pages/Cart.js';
import Checkout from './cpmponents/pages/CheckOut.js';
//posts

import NewsSingle from './cpmponents/posts/News.js';
import ProductSingle from   './cpmponents/posts/ProductSingle.js';

export  const TranslateList=React.createContext();



function App() {

  const [translate, setTranslate] = useState({});
 
  useEffect(() => {

    getTranslate().then((res) => {

      setTranslate(res.data);
    })

  }, [])


 
  return (
    
   <>
    <TranslateList.Provider value={translate} > 
     <Header/>
      <main>
  
        <Router>
          <Route path='/' exact component={Index} />
          <Route path='/about' exact component={About}  />
          <Route path='/shop'  component={Shop}  />
          <Route path='/blog'  component={News} />
          <Route path='/galery' exact component={Galery}   />
          <Route path='/contact' exact component={Contact}   /> 
          <Route path='/cart' exact  component={Cart}   />
          <Route path='/checkout' exact component={Checkout}  />

          <Route path='/read_news/:news_link' exact component={NewsSingle}  />
          <Route path='/shop_item/:item_link' exact component={ProductSingle}  />
        </Router>
     
      </main>
     <Footer/>

    </TranslateList.Provider>
  
   </>
  );
}

export default App;
