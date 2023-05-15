/**
 * Header Component
 *
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 05/15/2023
 *
 * @internal revisions:
 * +
 *
 */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { FaCalendarDay } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <FaCalendarDay size={20} /> Roster APP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="roster-nav" />
        <Navbar.Collapse id="roster-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {};

export default Header;
