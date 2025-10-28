
import classes from './Post.module.css';
import { Container,Row,Col, Button, Alert, Card } from 'react-bootstrap';
function Posts(props) {

    return (

 <Container className="mt-5 text-center">
    <Row>
      <Col md={12}>
        <Card bg="danger"  className={classes.post}>
                <Card.Body>
                    <h5 className="card-title text-light">{props.author}</h5>
                    <p className="card-text text-light">{props.body}</p>
                </Card.Body>
            </Card>
      </Col>
    </Row>
</Container>
    );
}

export default Posts;