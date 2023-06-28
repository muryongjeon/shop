import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increaseAge } from '../store/userSlice';
import { increaseCount } from '../store';

function Cart() {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <div>
            {state.user.name} 의 장바구니
            {state.user.age}
            <button onClick={() => dispatch(increaseAge(10))}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((a, i) => (
                        <tr key={i}>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>{a.count}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        dispatch(increaseCount(a.id));
                                    }}>
                                    +
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;
