import "./cartWidget.css";
import cart from "./assets/cart.svg";

const CartWidget = () => {
  return (
    <div className="cartWidget-css">
      <img src={cart} alt="cart-widget" />0
    </div>
  );
};

export default CartWidget;
