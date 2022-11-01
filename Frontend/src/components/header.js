import react from "react"
import { Navbar, Container } from "react-bootstrap"

const NavbarStyle = {
  backgroundColor: "lightblue"
}
const Header = ({title}) => { 
    return(
        <Navbar style={NavbarStyle} variant="light">
          <Container>
            <Navbar.Brand href="/">{title}</Navbar.Brand> 
          </Container> 
        </Navbar>
    )
};

export default Header;
