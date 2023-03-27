import "./header.css";
import LogoBullMarketplace from "./assets/LogoBullMarketplace.png";

const header = () => {
  return (
    <div className="header-css">
      <img className="logo" src={LogoBullMarketplace} alt="Logo" />
    </div>
  );
};

export default header;
