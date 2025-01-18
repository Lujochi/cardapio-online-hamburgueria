import { Cards } from "../Cards/Cards";
import "./Menu.css";

export const Menu = () => {
  return (
    <section id="Cardapio">
      <h2>Conheça nosso menu</h2>
      <div className="cards-container">
        <Cards />
      </div>
    </section>
  );
};
