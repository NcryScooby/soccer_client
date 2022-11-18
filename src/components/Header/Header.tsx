import { Container } from "./style";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <div className="list">
        <a href="/tournaments">Tournaments</a>
        <a href="/teams">Teams</a>
        <a href="/players">Players</a>
      </div>
    </Container>
  );
};

export default Header;
