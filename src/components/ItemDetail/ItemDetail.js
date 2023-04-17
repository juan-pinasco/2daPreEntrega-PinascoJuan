import { ItemCount } from "../itemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  price,
  stock,
}) => {
  return (
    <article className="CardItem2">
      <header className="Header2">
        <h2 className="ItemHeader2">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg2" />
      </picture>
      <section>
        <p className="info2">Categoria: {category}</p>
        <p className="info2">Descripcion: {description}</p>
        <p className="info2">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter2">
        <ItemCount initial={1} stock={stock} />
      </footer>
    </article>
  );
};
