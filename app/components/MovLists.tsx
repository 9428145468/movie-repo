import React from "react";
import Card from "@/app/components/Cards";

const cards = [
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
  {
    imageUrl: "../images/bg.jpeg",
  },
];

const ListsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-accent font-bold mt-10 mb-1 text-center">All Movies</h2>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold">Cards Grid</h1>
        <div className="grid grid-cols-5 gap-8" style={{ gridAutoRows: '1fr' }}>
          {cards.map((card, index) => (
            <Card key={index} {...card} className="w-full h-full rounded" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListsPage;
