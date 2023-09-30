import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UICard(props) {
  const item=props.data
  return (
    <Card style={{ width: '15rem',margin:'10px' }}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default UICard;