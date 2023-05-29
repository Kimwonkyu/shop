import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import mainImg from './img/bg.png';
import {useState} from "react";
import data from './data';
import Products from "./Products";
import {Routes,Route,Link,useNavigate,Outlet} from "react-router-dom";
import Detail from "./routes/Detail";
import Event from "./routes/event/Event";
import One from "./routes/event/One";
import Two from "./routes/event/Two";
import axios from "axios";


function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();

    const [showButton, setShowButton] = useState(true);
    const fetchShoesData = () => {
        axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=> {
            setShoes([...shoes, ...result.data]);
            setShowButton(false);
        })
            .catch(()=> {
                console.log('실패 ㅅㄱㅇ;')
            })
    }

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => {
                            navigate('/')
                        }}>Home</Nav.Link>
                        <Nav.Link onClick={() => {
                            navigate('/detail')
                        }}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={
                    <>
                        <div className="main-bg" style={{backgroundImage: 'url(' + mainImg + ')'}}></div>
                        <Container>
                            <Products shoes={shoes}/>
                            {showButton &&
                                <button onClick={fetchShoesData}>더보기</button>
                            }
                        </Container>
                    </>
                }/>
                <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
                <Route path="/event" element={<Event/>}>
                    <Route path="one" element={<One/>}/>
                    <Route path="two" element={<Two/>}/>
                </Route>
                <Route path="*" element={<div>없는페이지 에여</div>}/>
            </Routes>
        </div>
    );
}



export default App;