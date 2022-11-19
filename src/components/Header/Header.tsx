import { Container } from "./style";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="list">
        <Link to="/tournaments">Tournaments</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/players">Players</Link>
      </div>
    </Container>
  );
};

export default Header;
