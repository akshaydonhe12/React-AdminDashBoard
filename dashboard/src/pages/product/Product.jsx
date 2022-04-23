import React from 'react';
import './product.css';
import { Link} from 'react-router-dom';
import { secondUserData } from '../../duumyData';
import SecondChart from '../../components/secondChart/SecondChart';



export default function Product() {
  return (
   <div className="product">
       <div className="productTitleContainer">
           <h1 className="productTitle">Product</h1>
           <Link to="/newProduct">
           <button className="productButton">Button</button>
           </Link >      
       </div>
       <SecondChart data={secondUserData} title="Product Details" grid dataKey="product Value"/>


   </div>
  )
}
