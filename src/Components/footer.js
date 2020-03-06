import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class Footer extends Component{

  render(){
    return(
        <div>
        <Card bg="dark" text="white">
          <Card.Title style = {{'text-align': 'center'}}>Created with ❤ by a team of developers and designers.</Card.Title>
          <Card.Text style = {{'text-align': 'center'}}>© 2020 KeyGenCoders. All rights reserved.</Card.Text>
        </Card>
        </div>
    ); 
  }
}
export default Footer;