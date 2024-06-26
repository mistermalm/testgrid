import { TdsCard } from "@scania/tegel-react";
import CardImg from "../../assets/card-img.png";
import "./Card.scss";

const Card = () => {
  return (
      <TdsCard
        image-placement="above-header"
        header="Card"
        subheader="Card with image"
      >
        <img
          className="tds-u-w-100"
          slot="body-image"
          alt="Scania graphical lettering sign"
          src={CardImg}     
        />
        <div slot="actions">
          <p className="tds-text-grey-958">
            This is the bottom section, this Card has its image-placement
            above-header below.
          </p>
        </div>
      </TdsCard>  
  );
};

export default Card;
