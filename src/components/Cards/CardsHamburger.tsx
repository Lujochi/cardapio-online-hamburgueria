import { Card } from "./Card";

const CardItem = [
  {
    Name: "Coca-Cola Lata",
    Price: 6,
    ImageUrl: "/images/refri-1.png",
  },
  {
    Name: "Guaraná Lata",
    Price: 6,
    ImageUrl: "/images/refri-2.png",
  },
  {
    Name: "Água Mineral",
    Price: 10,
    ImageUrl: "/images/agua-1.png",
  },
  {
    Name: "Suco Laranja Natural",
    Price: 8,
    ImageUrl: "/images/suco-1.png",
  },
];

export const CardsHamburger = () => {
  return (
    <>
      {CardItem.map((CardItem, index) => {
        return (
          <Card key={index}>
            <div className="card-box">
              <img src={CardItem.ImageUrl} alt="Imagem Hamburguer" />
              <div className="text-box">
                <h3>{CardItem.Name}</h3>
                <div className="price-cart">
                  <span>R$ {CardItem.Price},00</span>
                  <button>
                    <i className="ri-shopping-cart-2-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
};
