import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import data from './data.js';
import { useState } from 'react';

function App() {
    let [shoes] = useState(data);
    return (
        <div className="App">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="main-bg"></div>
            <Container>
                <Row>
                    {shoes.map((a, i) => {
                        return <Card data={a} key={i} index={i + 1} />;
                    })}
                </Row>
            </Container>
        </div>
    );
}

function Card(props) {
    return (
        <Col sm>
            <img src={'https://codingapple1.github.io/shop/shoes' + props.index + '.jpg'} width="80%" alt="" />
            <h4>{props.data.title}</h4>
            <p>{props.data.price}</p>
        </Col>
    );
}

export default App;
