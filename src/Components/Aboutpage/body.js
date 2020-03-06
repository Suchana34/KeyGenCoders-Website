import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

class Body extends React.Component {
  render() {
    return (
      <div>
        <Card
          bg="dark"
          style={{
            border: "none",
            padding: 2 + "em",
            marginTop: "4%",
            marginLeft: "4%",
            marginRight: "4%"
          }}
        >
          <Card.Title
            style={{
              textAlign: "center",
              color: "white"
            }}
          >
            How it all started ?
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "center",
              color: "white"
            }}
          >
            Started in 2015 as a Facebook page, KeyGenCoders kicked off as a
            group to help students venture further into the fields of
            Competitive programming and later pivoted to a full-fledged club
            that brought together KGECians to learn Web Development, Data
            Science, Android Development and share their learnings with
            juniors/peers. Till date, with more than 20+ members, the group
            continues to fulfil it's mission of making CS fun and easy to learn
            for all by organizing classes and competitions regularly.
          </Card.Text>
        </Card>

        <Card
          bg="dark"
          style={{
            border: "none",
            padding: 1 + "em",
            marginTop: "4%"
          }}
        >
          <Card.Title
            style={{
              textAlign: "center",
              color: "white"
            }}
          >
            Accomplishments <span>🎯</span>
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "center",
              color: "white"
            }}
          >
            <ListGroup style = {{border: 'none'}}>
              <ListGroup.Item variant="dark" style = {{padding: 2+'rem'}}>Multiple Qualifications in ICPC regionals, with 2-digit ranks at national level.</ListGroup.Item>
              <ListGroup.Item variant="dark" style = {{padding: 2+'rem'}}>Past members have cracked internships in Adobe, Google, IITs.</ListGroup.Item>
              <ListGroup.Item variant="dark" style = {{padding: 2+'rem'}}>Winner at multiple hackathons including the prestigious Smart India Hackathon.</ListGroup.Item>
              <ListGroup.Item variant="dark" style = {{padding: 2+'rem'}}>Under 100 ranks in Codechef Long Challenges, mulitple 5 star and above coders.</ListGroup.Item>
            </ListGroup>
          </Card.Text>
        </Card>
      </div>
    );
  }
}
export default Body;
