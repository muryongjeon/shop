import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { order } from '../store';
/*
import styled from 'styled-components';

let Box = styled.div`
    padding: 20px;
    background: grey;
`;

let YellowBtn = styled.button`
    background: ${(props) => props.bg};
    color: ${(props) => (props.bg == 'blue' ? 'white' : 'black')};
    padding: 10px;
`;
*/

function Detail(props) {
    let { id } = useParams();
    let item = props.shoes.find((x) => x.id === parseInt(id));
    let [tab, setTab] = useState(0);
    //let state = useSelector((state) => state);
    let dispatch = useDispatch();
    return (
        <div className="container">
            {/* <Box>
                <YellowBtn bg="orange">버튼</YellowBtn>
                <YellowBtn bg="blue">버튼</YellowBtn>
            </Box> */}
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (parseInt(id) + 1) + '.jpg'} width="100%" alt="" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <button className="btn btn-danger" onClick={() => dispatch(order(item))}>
                        주문하기
                    </button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(0)} eventKey="link0">
                        버튼0
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(1)} eventKey="link1">
                        버튼1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => setTab(2)} eventKey="link2">
                        버튼2
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div>
    );
}

function TabContent({ tab }) {
    return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab];
}

export default Detail;
