import React from 'react'
import '../cart/cart.css'

const Cart=(props)=>{
    const {image,title,btn,price}=props
    return(
        <div className="card">
        <div className='cart'>
                   <img src={image} alt="image catalog" />
        <div className="block_title">
            <p className="title">{title}</p>
       <p className="price">{price}$</p>
       <button className="btn">{btn}</button>
        </div>
    </div>
    </div>
    )
}

export default Cart