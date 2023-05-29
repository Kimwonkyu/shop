import {Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Products =(props)=> {
    const {shoes} = props;
    const navigate = useNavigate();
    return(
        <div>
            <Row md={3}>
                {shoes.map((shoe,index) => (
                    <Col key={index}>
                        <img src={`https://codingapple1.github.io/shop/shoes${index+1}.jpg`} width="80%" alt={`Product ${index}`}
                        onClick={()=> navigate(`/detail/${index}`)}
                        />
                        <h4>{shoe.title}</h4>
                        <p>{shoe.price}</p>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Products;