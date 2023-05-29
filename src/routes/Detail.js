import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Nav} from "react-bootstrap";

const Detail =(props) => {
    const {id} = useParams();
    console.log(id);
    let shoe = props.shoes.find(shoe => shoe.id === Number(id));

    if(shoe){
        console.log("great");
    }else {
        console.log("WTF");
    }

    const [showAlert, setShowAlert] = useState(true);
    const [text, setText] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 2000)

        return () => {// 이 안에 내용이 먼저 실행된다. 타이머 쓸때 기본적으로 쓰는 패턴
            clearTimeout(timer)
        }
    }, []);

    const handleInputChange =(e)=> {
        const inputValue = e.target.value;
        const reg = /^[0-9]*$/;
        if(reg.test(inputValue)) {
            setText(inputValue);
        }else{
            alert('그러지 마세요!!')
        }
    }

    const [tabState, setTabState] = useState(0);

    const TabContent= () => {
        if (tabState === 0){
            <div>내용0</div>
        }
        if(tabState === 1){
            <div>내용1</div>
        }

        if(tabState === 2){
            <div>내용2</div>
        }
    }

return(
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${shoe.id+1}.jpg`} width="100%" />
                {showAlert && <div className="alert alert-warning">NEW!</div> }
            </div>
            <div className="col-md-6">
                <input value={text} onChange={handleInputChange}/>
                <h4 className="pt-5">{shoe.title}</h4>
                <p>{shoe.content}</p>
                <p>{shoe.price}원</p>
                <button className="btn btn-danger">주문하기</button>
            </div>
        </div>
        <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
                <Nav.Link eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContent/>
    </div>
)
}
export default Detail;