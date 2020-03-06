import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class Footer extends Component{

  render(){
    return(
        <div>
            
        <Card bg="dark" text="white" style = {{'width' : '100%', border: 'none'}}>
          <Card.Title style = {{'text-align': 'center', padding: 0.3 + 'rem'}}>Created with <span>❤</span>  by a team of developers and designers.</Card.Title>
          <Card.Text style = {{'text-align': 'center', padding: 0.3 + 'rem'}}>© {new Date().getFullYear()} KeyGEnCoders. All rights reserved.</Card.Text>
        </Card>
        </div>
    ); 
  }
}
export default Footer;