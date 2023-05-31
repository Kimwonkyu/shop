import {Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {changeName} from "../store";
import {increaseCount} from "../store";

const Cart=()=> {
    const dispatch = useDispatch();
    let user = useSelector((state)=> {return state.user})
    let stock = useSelector((state)=> {return state.stock})
    const stockData = useSelector((state) => {return state.stockData})

    return(
        <>
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
            {stockData.map((item, index)=> (
                <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td><button onClick={()=>{dispatch(increaseCount({id : item.id}))}}>+</button></td>
                </tr>
            ))}
            </tbody>
        </Table>
        </>
    )
}

export default Cart