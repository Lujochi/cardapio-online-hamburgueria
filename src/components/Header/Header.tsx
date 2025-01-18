import { useEffect } from "react";
import "./Header.css";

const CurrentDate = new Date();
const CurrentHours = CurrentDate.getHours();
let OpenOrClosed = "Open";

if (CurrentHours < 18 || CurrentHours > 22) {
  OpenOrClosed = "Closed";
} else {
  OpenOrClosed = "Open";
}

const ChangeColor = () => {
  const OpeningHoursDiv = document.querySelector(".Opening-hours");

  if (OpeningHoursDiv) {
    if (
      OpenOrClosed === "Closed" &&
      OpeningHoursDiv.classList.contains("open")
    ) {
      OpeningHoursDiv.classList.remove("open");
      OpeningHoursDiv.classList.add("closed");
    } else if (
      OpenOrClosed === "Open" &&
      OpeningHoursDiv.classList.contains("closed")
    ) {
      OpeningHoursDiv.classList.remove("closed");
      OpeningHoursDiv.classList.add("open");
    }
  }
};

export const Header: React.FC = () => {
  useEffect(() => {
    ChangeColor();
  }, []);

  return (
    <header>
      <img src="/images/Logo.png" alt="Logo" />
      <h1>Hamburgueria | Cárdapio Online</h1>
      <p>Rua 2 de Setembro, 12, Itoupava Norte, SC</p>
      <div className="Opening-hours open">
        <span>Seg á Dom - 18:00 as 22:00</span>
      </div>
    </header>
  );
};
