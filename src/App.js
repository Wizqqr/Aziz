import React from 'react'
import './App.css';
import image1 from '../src/pictures/image1.webp'
import image2 from '../src/pictures/image2.webp'
import image3 from '../src/pictures/image7.webp'
import image4 from '../src/pictures/image4.png'
import image5 from '../src/pictures/image5.webp'
import image6 from '../src/pictures/image6.webp'
import image7 from '../src/pictures/image7.webp'
import image8 from '../src/pictures/image8.webp'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import imageSh from '../src/pictures/imageSh-transformed.png'
import Cart from './components/cart/cart.jsx'
import Header from './components/header/header.jsx'
import Rec from './components/rec/rec.jsx'
import Footer from './components/footer/footer.jsx'
const products =[
  {
    image:image1,
    title:'Mens Lace up fashion Shoe',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79',
    btn:'ADD TO CART'
  },
  {
    image:image2,
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    title:'Womens sneakers 20225',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image3,
    title:'Womens T-shirt 2022',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  }, 
  {
    image:image4,
    title:'Mens black jacket',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image5,
    title:'Brazilia',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image6,
    title:'T-shirt for lady',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image7,
    title:'For China mens',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image8,
    title:'Its only for me',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  }
  ]
const producter=[
  {
    imagesh:imageSh
  }
]
function App() {
  return (
    <div className="app">
  
      <Header/>


      {
        products.map(product=>(
<Cart
image={product.image}
title={product.title}
desc={product.desc}
price={product.price}
btn={product.btn}
  />
        ))    
        }
              {
        producter.map(product=>(
<Rec
imagesh={product.imagesh}
/>
        ))    
        }
      {
        products.map(product=>(
<Cart
image={product.image}
title={product.title}
desc={product.desc}
price={product.price}
btn={product.btn}
  />
        ))    
        }
                 {
        producter.map(product=>(
<Rec
imagesh={product.imagesh}
/>
        ))    
        }    
        <Footer/>
    </div>
  );
}

export default App;
