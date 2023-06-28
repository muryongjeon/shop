import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js';

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();
    return (
        <div className="App">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
                            <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
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
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg"></div>
                            <Container>
                                <Row>
                                    {shoes.map((a, i) => {
                                        return <Card data={a} key={i} index={i + 1} />;
                                    })}
                                </Row>
                            </Container>
                            <button
                                onClick={() => {
                                    axios
                                        .get('https://codingapple1.github.io/shop/data2.json')
                                        .then((result) => {
                                            let copy = [...shoes, ...result.data];
                                            setShoes(copy);
                                        })
                                        .catch(() => console.log('실패함'));
                                }}>
                                더보기
                            </button>
                        </>
                    }
                />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/cart" element={<Cart />} />
                <Route
                    path="/about"
                    element={
                        <div>
                            <h4>어바웃페이지</h4>
                            <Outlet></Outlet>
                        </div>
                    }>
                    <Route path="member" element={<div>멤버들</div>} />
                    <Route path="location" element={<div>회사위치</div>} />
                </Route>
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </div>
    );
}

function Card(props) {
    let navigate = useNavigate();
    return (
        <Col md={4}>
            <img
                onClick={() => {
                    navigate('/detail/' + props.data.id);
                }}
                style={{ cursor: 'pointer' }}
                src={'https://codingapple1.github.io/shop/shoes' + props.index + '.jpg'}
                width="80%"
                alt=""
            />
            <h4>{props.data.title}</h4>
            <p>{props.data.price}</p>
        </Col>
    );
}

export default App;
