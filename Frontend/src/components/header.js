import react from "react"
import { Navbar } from "react-bootstrap"

const NavbarStyle = {
  backgroundColor: "lightblue"
}
const Header = ({title}) => { 
    return(
        <Navbar style={NavbarStyle} variant="light">
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    )
};

export default Header;
