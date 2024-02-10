import { useNavigate } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <div className="grid-container">
      <div className="grid-tiles">
        {" "}
        <div className="tile">
          <span>
            people icon and below that test about registering new employees or
            customers
          </span>
        </div>
        <button onClick={handleClick}>Register Users</button>
      </div>
      <div className="grid-tiles"> stuff goes in all these tiles</div>
      <div className="grid-tiles"> stuff goes in all these tiles</div>
      <div className="grid-tiles"> stuff goes in all these tiles</div>
      <div className="grid-tiles"> stuff goes in all these tiles</div>
      <div className="grid-tiles"> stuff goes in all these tiles</div>
      <div className="grid-tiles"> stuff goes in all these tiles</div>
      <div className="grid-tiles"> stuff goes in all these tiles</div>
      <div className="grid-tiles"> stuff goes in all these tiles</div>
    </div>
  );
};
export default Grid;
