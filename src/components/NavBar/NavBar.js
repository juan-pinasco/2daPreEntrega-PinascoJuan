import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
      </div>
      <h3>Ecommerce</h3>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
