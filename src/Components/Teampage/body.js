import React from "react";
import { Card, Button } from "react-bootstrap";
import StyledCardDeck from "../../Styles/CardDeckStyled";
import StyledCard from "../../Styles/Cardstyled";

class Body extends React.Component {
  render() {
    return (
      <div>
        <p
          style={{ textAlign: "center", fontSize: 1.5 + "rem", color: "white" }}
        >
          Professors
        </p>

        <StyledCardDeck>
          <StyledCard bg="dark" text="white">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Profile link</small>
            </Card.Footer>
          </StyledCard>

          <StyledCard bg="dark" text="white">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Profile link</small>
            </Card.Footer>
          </StyledCard>

          <StyledCard bg="dark" text="white">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Profile link</small>
            </Card.Footer>
          </StyledCard>
        </StyledCardDeck>

        <p
          style={{ textAlign: "center", fontSize: 1.5 + "rem", color: "white" }}
        >
          Members
        </p>

        <StyledCardDeck>
          <StyledCard bg="dark" text="white">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Profile link</small>
            </Card.Footer>
          </StyledCard>

          <StyledCard bg="dark" text="white">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Profile link</small>
            </Card.Footer>
          </StyledCard>

          <StyledCard bg="dark" text="white">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Profile link</small>
            </Card.Footer>
          </StyledCard>
        </StyledCardDeck>

        <Card bg="dark" text="white" style={{ border: "none", margin: "5%" }}>
          <Card.Header
            as="h5"
            style={{ textAlign: "center", padding: 1 + "em" }}
          >
            Want to see your name here ?
          </Card.Header>

          <Card.Title style={{ textAlign: "center", padding: 0.5 + "em" }}>
            Fill the Form
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            Wait for the upcoming hiring interview
          </Card.Text>
          <Button
            href="#"
            variant="success"
            style={{
              width: 150 + "px",
              padding: 0.5 + "em",
              alignSelf: "center",
              marginBottom: "auto"
            }}
          >
            Fill Now
          </Button>
        </Card>
      </div>
    );
  }
}
export default Body;
