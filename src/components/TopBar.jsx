import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopBar() {
  const handleSelect = eventKey => console.log(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          Browse
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Category" id="nav-dropdown">
        <NavDropdown.Item eventKey="Fantasy">Fantasy</NavDropdown.Item>
        <NavDropdown.Item eventKey="History">History</NavDropdown.Item>
        <NavDropdown.Item eventKey="Horror">Horror</NavDropdown.Item>
        <NavDropdown.Item eventKey="Romance">Romance</NavDropdown.Item>
        <NavDropdown.Item eventKey="Scifi">Scifi</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default TopBar;
