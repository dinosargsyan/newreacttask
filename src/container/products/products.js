import React from 'react';
import {productMockup} from '../../data-mockup/product-mockup';
import Product from '../../components/Product/product';
import './products.scss';

class Products extends React.Component {
    render(){
        return(
            <div className="Products">
                {productMockup.map(el =>{
                    return (
                        <Product title={el.title} image={el.image} version={el.version} />
                    )
                })}
            </div>
        )
    }
}

export default Products;