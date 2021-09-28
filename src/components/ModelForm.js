import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { Modal,Button} from 'react-bootstrap'
export class ModelForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModel} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.update}>
                            <Form.Control type="text" placeholder="Normal text" name= "image"  defaultValue={this.props.image} />
                            <Form.Control type="text" placeholder="Normal text" name= "name"   defaultValue={this.props.name} />
                            <Form.Control type="text" placeholder="Normal text" name= "price"  defaultValue={this.props.price} />
                            <Button variant="primary" type="submit" onClick={this.props.handleClose}>
                                Save Changes
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModelForm
