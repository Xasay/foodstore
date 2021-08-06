import Slider from './sections/Slider.js';
import Three_boks from './sections/Three_boks.js';
import Product from './sections/Product.js';
import Parallax from './sections/Parallax';
import Counter from './sections/Counter.js';
import Partners from './sections/Partners.js';
import Blog from './sections/Blog.js';

export default function Index(){
    return(
      <>
        <Slider/>
        <Three_boks/>
        <Product type='first'  />
        <Parallax/>
        <Product type='second' />
        <Counter/>
        <Partners/>
        <Blog/>

      </>

    )
}