import Logo from "../assets/logo.svg";
import * as H from "../styles/HeaderStyle";

function Header() {
  return (
    <H.Container>
      <img src={Logo} alt="조각집" />
    </H.Container>
  );
}

export default Header;
