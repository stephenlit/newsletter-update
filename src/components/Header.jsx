import Logo from "../assets/images/illustration-sign-up-mobile.svg";
import Desktop from "../assets/images/illustration-sign-up-desktop.svg";

function Header() {
  console.log(Logo);

  return (
    <picture>
      <source srcSet={Desktop} media="(min-width: 768px)" alit="singup logo" />
      <img src={Logo} alt="signup logo" />
    </picture>
  );
}

export default Header;
