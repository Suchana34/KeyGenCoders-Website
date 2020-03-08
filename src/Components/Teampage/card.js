import React from "react";
import { Card } from "react-bootstrap";
import Icon from "@mdi/react";

function Details(props) {
  const member = props.member;
  return (
    <Card bg="dark" text="white"
        
    style={{
          boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
          borderRadius: 10,
          border: `none`,
          padding: 2 + 'rem',
          maxWidth: 18 + `rem`,
          minWidth: 18 + 'rem',
          marginBottom: 5 + `rem`,
          marginLeft: 1 +'rem',

        }}>
        
      <Card.Img
        variant="top"
        src={member.picture}
        style={{ height: 200 + "px", width: 220 + "px",
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',}}
      />
      <Card.Body>
        <Card.Text style={{fontSize: 1.1+'em', textAlign:'center'}}>{member.name}</Card.Text>
        
        <Card.Footer style={{border: 'none'}}>
          
        {(member.links).map(symbol => {
          return (
            <a
              href={symbol.link}
              target=":blank"
              style={{
                margin: 0 + `px ` + 10 + `px`,
                cursor: "pointer"
              }}
            >
              <Icon
                path={symbol.icon}
                size={1}
                title={symbol.to}
                color={'white'}
              ></Icon>
            </a>
          );
        })}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default Details;
