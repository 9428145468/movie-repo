import React from "react";

interface CardProps {
  imageUrl: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, className }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageUrl} alt="Card" className="rounded-lg" />
    </div>
  );
};

export default Card;
