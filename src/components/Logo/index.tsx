import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 select-none">
      <div className="w-14">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="text-2xl font-headFamily bg-gradient-to-r from-primary-400 to-primary-900 text-transparent bg-clip-text">
        LastNews
      </h2>
    </Link>
  );
};

export default Logo;
