import React from 'react';
import {Link} from 'react-router-dom'
import {MDBIcon} from 'mdbreact'
import WomensWearData from '../productsPage/Data/WomensWearData';

function cart(props) {
  console.log(props.match.params.id);
      const product = WomensWearData.products.find(x => x._id === props.match.params.id);
       return(
       <div>
       <div className="back-to-result"> 
               <Link to="/">Back to result</Link>
           </div>
            (
                <div className="details">
               <div className="details-image">
                   <img src={product.images} alt="product"/>
               </div>
              
           <div className="details-action">
               <ul>
                   <li>
                       price: {product.price}
                   </li>
                   <li>
                       status: {product.status}
                   </li>
                   <li>
                       Qty:<select>
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                       </select>
                   </li>
                   <li>
                       <button className="button" onclick={() => {window.location.href="/cart"}}>
                       Add to cart <MDBIcon icon="cart-plus"/></button>
                   </li>
               </ul>
           </div>
           </div>
        )
        
</div>
           
 )   
}

export default cart
