import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import FruitsCard from './FruitsCard';
import {  withAuth0 } from '@auth0/auth0-react';


class Home extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       fruitData : [],
       show : false 
    }
  }

  componentDidMount=()=>{
    let url2 ='http://localhost:3008/getFruit'
    axios.get(url2).then(item=>{
      this.setState({
        fruitData :item.data,
        show : true 
      })
    })
  }

  addFruit=(data)=>{
    let newData ={
      email : this.props.auth0.user.email,
      image : data.image ,
      name : data.name ,
      price : data.price ,

    }
    axios.post('http://localhost:3008/addFruit',newData);
  }
  

  render() {
    return (
      <>
        <Row style={{gap :"60px" , marginTop: "60px"}}>
          {this.state.show && this.state.fruitData.map((item , idx)=>{
            return(
              <FruitsCard item={item} addFruit={this.addFruit}/>
            )
          })}
        </Row>
      </>
    )
  }
}

export default withAuth0(Home);
