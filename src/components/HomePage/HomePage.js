import AdminDashboard from "../AdminDashboard/Dashboard";
import Carousel from "../Carousel/Carousel";
import Rows from "../CategoryRows/Rows";

const HomePage = (props) => {
  const { employee, cartItems, setCartItems, setRedirect } = props;

  return (
    <div className="HomePage">
      {employee === true ? (
        <AdminDashboard />
      ) : (
        <div className="carousel-container">
          <Carousel cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      )}
      <div className="body-content">
        <div className="row-container">
          <Rows
            cartItems={cartItems}
            setCartItems={setCartItems}
            setRedirect={setRedirect}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
