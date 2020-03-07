import React from "react";
import { Button, Card } from "react-bootstrap";
import StyledCardGroup from "../../Styles/Cardgroup_Style";
import image from "../../Assets/undraw_coding_6mjf.svg";
import ReactRotatingText from 'react-rotating-text';

class Body extends React.Component {
  render() {
    return (
      <StyledCardGroup>
        <Card
          bg="dark"
          text="white"
          style={{
            border: "none",
            padding: 1 + "em",
          }}
        >
          <Card.Img src={image}></Card.Img>

          <Card.Title style = {{textAlign: 'center', marginTop: 'auto', height: 30 + 'px',
              boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
            }}> <span>👋</span>, We are KeyGenCoders</Card.Title>
        </Card>
        
      
        <Card bg="dark" text="white"
         style={{ 
          border: "none",
          padding: 1 + 'em',
          }}
          >
          <Card.Title style = {{marginTop:'auto', textAlign: 'center'}}>
            
          <ReactRotatingText items={['We are a group of students', 'who love to solve problems', 'through code']} />

          </Card.Title>
          <Card.Text style={{marginBottom:'auto' ,textAlign: 'center',color: '#e91e63'}}>
            Our core aim is to make computer science easy to learn for everyone
            who wants to.
          </Card.Text>
          <Button
            href="#"
            variant="info"
            style={{
              width: 120 + "px",
              padding: 0.5 + "em",
              alignSelf: 'center',
              marginBottom: 'auto',
              boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',

            }}
          >
            Join Us{" "}
          </Button>
        </Card>
      </StyledCardGroup>
    );
  }
}
export default Body;
