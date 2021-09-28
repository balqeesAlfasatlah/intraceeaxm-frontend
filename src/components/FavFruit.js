import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col ,Card ,Button } from 'react-bootstrap'

class FavFruit extends React.Component {
  render() {
    return (
      <>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.item.image} />
            <Card.Body>
              <Card.Title>{this.props.item.name}</Card.Title>
              <Card.Text>
                {this.props.item.price}
              </Card.Text>
              <Button onClick={()=>this.props.delete(this.props.idx)}  variant="primary">Delete</Button>
              <Button onClick={()=>this.props.showModelForm(this.props.idx)}  variant="primary">Update</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default FavFruit;
