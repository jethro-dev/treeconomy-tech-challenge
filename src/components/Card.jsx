import React, { useState } from "react";

const Card = ({ project }) => {
  const [isPurchased, setIsPurchased] = useState(false);
  const date = new Date(project.start_date * 1000);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleString("en-UK", options);

  const handlePurchase = () => {
    setIsPurchased(!isPurchased);
  };

  return (
    <div className="project-card">
      {/* Card  Top */}
      <div className="project-card__top">
        <img src={project.image} alt={project.name} />
      </div>

      {/* Card Bottom */}
      <div className="project-card__bottom">
        <div className="project-card__bottom__left">
          <h3>
            {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
          </h3>
          <button
            type="button"
            onClick={handlePurchase}
            className={`project-card__purchase-btn project-card__purchase-btn__${
              isPurchased ? "red" : "green"
            }`}
          >
            {isPurchased ? "Purchase" : "Purchased"}
          </button>
        </div>
        <div className="project-card__bottom__right">
          <span>{project.available_credits} credits</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
