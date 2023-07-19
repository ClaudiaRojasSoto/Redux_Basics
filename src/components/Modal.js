import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all the items from your shoping cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn" 
          onClick={()=> {
            dispatch(clearCart());
            dispatch(closeModal());
          }}>
            Confirm
          </button>
          <button type="button" className="btn clear-btn" onClick={()=>dispatch(closeModal())}>
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
