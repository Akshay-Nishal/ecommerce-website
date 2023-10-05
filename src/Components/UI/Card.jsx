import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function UICard(props) {
  const item=props.data
  // console.log(item)
  let plink = '/products/'+item.id
  return (
    <Card style={{ width: '15rem',margin:'10px' }}>
      <Card.Img variant="top" src={item.imageUrl} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button onClick={()=>props.addToCart(item)} variant="primary">{props.buttonAction}</Button>
        <Link to={plink}><Button style={{marginTop:'10px'}} >See Details</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default UICard;