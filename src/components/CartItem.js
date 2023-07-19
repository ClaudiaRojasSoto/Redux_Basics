import React from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { removeItems, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={()=>dispatch(removeItems(id))}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={()=>dispatch(increase({id}))}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={()=>{
          if(amount === 1){
            dispatch(removeItems(id));
            return;
          }
          dispatch(decrease({id}))
          }
        }>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;