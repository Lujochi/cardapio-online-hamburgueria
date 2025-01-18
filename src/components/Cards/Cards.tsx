import { Card } from "./Card";

const CardItem = [
  {
    Name: "Cheese Burger Duplo",
    Description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    Price: 35,
    ImageUrl: "/images/hamb-9.png",
  },
  {
    Name: "Cheese Burger",
    Description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    Price: 35,
    ImageUrl: "/images/hamb-8.png",
  },
  {
    Name: "Cheese Bacon",
    Description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    Price: 35,
    ImageUrl: "/images/hamb-7.png",
  },
  {
    Name: "Cheese Bacon 3.0",
    Description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    Price: 35,
    ImageUrl: "/images/hamb-6.png",
  },
  {
    Name: "Cheddar melt",
    Description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    Price: 35,
    ImageUrl: "/images/hamb-5.png",
  },
  {
    Name: "Cheddar Duplo",
    Description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    Price: 35,
    ImageUrl: "/images/hamb-4.png",
  },
  {
    Name: "Whopper Duplo",
    Description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    Price: 35,
    ImageUrl: "/images/hamb-3.png",
  },
  {
    Name: "Whopper",
    Description:
      "Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa",
    Price: 35,
    ImageUrl: "/images/hamb-2.png",
  },
];

export const Cards = () => {
  return (
    <>
      {CardItem.map((CardItem, index) => {
        return (
          <Card key={index}>
            <div className="card-box">
              <img src={CardItem.ImageUrl} alt="Imagem Hamburguer" />
              <div className="text-box">
                <h3>{CardItem.Name}</h3>
                <p>{CardItem.Description}</p>
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
