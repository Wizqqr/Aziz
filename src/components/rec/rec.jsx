import React from 'react';
import '../rec/rec.css'

const Rec = (propsi) => {
    const{imagesh}=propsi
    return (
        <div className="Rec">
           <div className="Sneep">
           <img src={imagesh} alt="" />
           <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem fuga accusantium enim nobis! Asperiores fugiat praesentium modi et mollitia ipsum, voluptatem dolorem <br></br>quisquam consequatur molestiae, aliquid perferendis, rerum eligendi. Sapiente?</h1>
           <p className='Price'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium hic maiores impedit temporibus alias voluptates consequuntur<br></br> facere eaque quos! Eveniet quia atque id nesciunt<br></br> reprehenderit modi culpa et illum!</p>
           <p>19999$</p>
           </div>
        </div>
    );
}

export default Rec;
