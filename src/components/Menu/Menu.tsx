import { Cards } from "../Cards/Cards";
import { CardsHamburger } from "../Cards/CardsHamburger";
import "./Menu.css";

export const Menu = () => {
  return (
    <section id="Cardapio">
      <h2>Conheça nosso menu</h2>
      <div className="cards-container">
        <Cards />
      </div>
      <div className="drinks-container">
        <h4>Bebidas</h4>
        <div className="drinks">
          <CardsHamburger />
        </div>
      </div>
    </section>
  );
};
