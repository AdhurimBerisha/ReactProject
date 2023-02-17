import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../components/Footer'


const Layout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><img style={{height:'55px'}}  src="https://clipartix.com/wp-content/uploads/2016/04/Free-clipart-motorcycle-silhouette-vector.png"></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
      <Footer/>
    </>
  )
};


export default Layout;