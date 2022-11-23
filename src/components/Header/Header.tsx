import { Container } from "./style";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import wave from "../../assets/wave.svg";

const Header = () => {
  return (
    <>
      <Container>
        <img src={wave} alt="wave" className="wave" />
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="list">
          <Link to="/tournaments">Tournaments</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/players">Players</Link>
        </div>
      </Container>
    </>
  );
};

export default Header;
