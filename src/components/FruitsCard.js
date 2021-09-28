import React, { Component } from 'react'
import { Col ,Card ,Button } from 'react-bootstrap'

export class FruitsCard extends Component {
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
                            <Button onClick={()=>this.props.addFruit(this.props.item)}  variant="primary">Add to Fav</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
}

export default FruitsCard
