import React from "react";
import blackCoffeeData from "../Data Json/Coffee.json";

const BlackCoffee = () => {
  console.log(blackCoffeeData.black);

  return (
    <div>
      <ul className="black-coffee coffee-category">
        {blackCoffeeData.black.map((blackItem, index) => (
          <li key={blackItem.imgName || index}>
            <img src={`${process.env.PUBLIC_URL}${blackItem.image}`} alt={blackItem.title} />
            <div>
              <h3>{blackItem.title}</h3>
              <p>{blackItem.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlackCoffee;
