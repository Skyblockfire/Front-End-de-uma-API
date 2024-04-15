import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbars.module.css';
import {Link} from "react-router-dom";
const Navbars = () => {

  return (
      <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand> <a href="http://localhost:3000"><img id={styles.logo} src="/images/overdrive.png" alt="Logo overdrive"/></a> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/Company">Company</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/User">User</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
      )
}
export default Navbars