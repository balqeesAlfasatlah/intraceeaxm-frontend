import React, { Component } from 'react'
import FavFruit from './FavFruit'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import ModelForm from './ModelForm'
import {  withAuth0 } from '@auth0/auth0-react';


export class Favourite extends Component {

    constructor(props) {
        super(props)

        this.state = {
            favData: [],
            show: false,
            image: " ",
            name: " ",
            price: " ",
            index: 0,
            showModel: false,
        }
    }

    componentDidMount = () => {
        if(this.props.auth0.isAuthenticated) {
            let url2 = `${process.env.REACT_APP_SERVER}/getData/${this.props.auth0.user.email}`
            axios.get(url2).then(item => {
                this.setState({
                    favData: item.data,
                    show: true
                })
            })
        }
    }
    delete = (index) => {
        let id = this.state.favData[index]._id
        axios.delete(`${process.env.REACT_APP_SERVER}/deleteFruit/${id}`).then(item => {
            this.setState({
                favData: item.data,
                show: true
            })
        })
    }

    showModelForm = (index) => {
        this.setState({
            image: this.state.favData[index].image,
            name: this.state.favData[index].name,
            price: this.state.favData[index].price,
            index: index,
            showModel: true,
        })
    }

    handleClose = () => {
        this.setState({
            showModel: false
        })
    }

    update = (e) => {
        e.preventDefault();
        let id = this.state.favData[this.state.index]._id;
        let data ={
            image: e.target.image.value ,
            name: e.target.name.value ,
            price: e.target.price.value ,
        
        }
        

        axios.put(`${process.env.REACT_APP_SERVER}/updateFruit/${id}`,data).then(element => {
            this.setState({
                favData: element.data,

            })
        })
    }





    render() {
        return (
            <>
                <Row style={{ gap: "60px", marginTop: "60px" }}>
                    {this.state.show && this.state.favData.map((item, idx) => {
                        return (
                            <FavFruit item={item} idx={idx} delete={this.delete} showModelForm={this.showModelForm}
                            />
                        )
                    })}
                </Row>

                <ModelForm showModel={this.state.showModel} handleClose={this.handleClose} image={this.state.image}
                    name={this.state.name} price={this.state.price} update={this.update} />


            </>
        )
    }
}

export default withAuth0(Favourite)
