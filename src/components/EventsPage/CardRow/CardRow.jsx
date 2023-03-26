import React from "react";
import Card from "../Card/Card";
import "./CardRow.css"; // import the CardRow.css file

const CardRow = (props) => {
  const cardData = [
    {
      title: "Card 1",
      location: "Location 1",
      imageURL:
        "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
    {
      title: "Card 2",
      location: "Location 2",
      imageURL: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 3",
      location: "Location 3",
      imageURL: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 4",
      location: "Location 4",
      imageURL: "https://via.placeholder.com/400x300",
    },
  ];

  // add any necessary logic here
  return (
    <div className="card-row flex justify-between w-full h-[20%]">
      {cardData.map((card, index) => (
        <div className="w-1/4 p-4">
          <Card
            key={index}
            title={card.title}
            location={card.location}
            imageURL={card.imageURL}
            onCardClick={props.onCardClick}
          />
        </div>
      ))}
    </div>
  );
};

export default CardRow;
