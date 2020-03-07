import React from "react";
import { Card, Button } from "react-bootstrap";
import StyledCardColumns from "../../Styles/CardColumnStyled";
import Details from "./card";
import current_team_members from "../../Data/current_team_members";
import previous_team_members from "../../Data/previous_team_members";
import professors from "../../Data/professors";


function Body(props) {
    return (
      <div>
        <p
          style={{ textAlign: "center", fontSize: 1.5 + "rem", color: "white", marginTop: '6%' , textShadow: '1px 1px 1px #FFF'}}
        >
          Professors
        </p>
        <StyledCardColumns>
        {professors.map((member) => {
          return (
            <Details member={member} />
          );
      })}
        </StyledCardColumns>
        
        <p
          style={{ textAlign: "center", fontSize: 1.5 + "rem", color: "white",textShadow: '1px 1px 1px #FFF' }}
        >
         Current Members
        </p>
        
        <StyledCardColumns>
        {current_team_members.map((member) => {
            return (
              <Details member={member} />
            );
        })}
        </StyledCardColumns>
      
        <p
          style={{ textAlign: "center", fontSize: 1.5 + "rem", color: "white",textShadow: '1px 1px 1px #FFF' }}
        >
         Previous Members
        </p>

        <StyledCardColumns>
        {previous_team_members.map((member) => {
            return (
              <Details member={member} />
            );
        })}
        </StyledCardColumns>
      

        <Card bg="dark" text="white" style={{ border: "none", margin: "5%" }}>
          <Card.Header
            as="h5"
            style={{ textAlign: "center", padding: 1 + "em", Width: '70%',alignSelf: 'center',
              boxShadow: '0 10px 10px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.02)',}}
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
              marginBottom: "auto",
              boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',

            }}
          >
            Fill Now
          </Button>
        </Card>
      </div>
    );
  }

export default Body;
