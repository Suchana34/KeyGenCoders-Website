import React from "react";
import { Button, Card } from "react-bootstrap";
import StyledCardGroup from "../../Styles/Cardgroup_Style";
import image from "../../Assets/undraw_coding_6mjf.svg";

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
          className="d-none d-md-block my-auto"
        >
          <Card.Img src={image}></Card.Img>

          <Card.Title style = {{textAlign: 'center', marginTop: 'auto'}}> <span>👋</span>, We are KeyGenCoders</Card.Title>
        </Card>

        <Card bg="dark" text="white"
         style={{ 
          border: "none",
          padding: 1 + 'em' 
          }}
          >
          <Card.Title style = {{marginTop:'auto', textAlign: 'center'}}>
            We are a group of students who love to solve problems through code.
          </Card.Title>
          <Card.Text style={{marginBottom:'auto' ,textAlign: 'center',color: '#e91e63'}}>
            Our core aim is to make computer science easy to learn for everyone
            who wants to.
          </Card.Text>
          <Button
            variant="info"
            style={{
              width: 100 + "px",
              padding: 0.5 + "em",
              alignSelf: 'center',
              marginBottom: 'auto'
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
