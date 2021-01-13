import React from 'react';
import './product.scss';


const Product = ({title, version, image}) =>{
return(    
<div className="Product">
    <div className="productImage">
        <img src={ image } alt="tinder" />  
    </div>
    <div className="productTitle">
    <p>{title}</p>
    <h6 id="productVersion">{version}</h6>
    </div>
</div>

)
}
export default Product;
