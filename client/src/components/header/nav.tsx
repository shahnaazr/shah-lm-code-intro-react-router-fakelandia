import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <ul>     
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/misdemeanours">{" "}Misdemeanours</NavLink>    
        <NavLink to="/confession">{" "}Confess To Us</NavLink>     
    </ul>
  </nav>
);

export default Nav;
