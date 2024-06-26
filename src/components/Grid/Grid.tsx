import "./Grid.scss";
import "./Grid-new.scss";
import Card from "../Card/Card";

const GridItem = () => {
  return <Card />;
};

const Grid = () => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="tds-grid-container">
        <div className="tds-grid-fluid">
          {items.map((_, idx) => (           
              <GridItem key={idx} />           
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
