import React from "react";
import ticketsImage from "./../img/ticket.jpg";

function Header(){
  return (
    <ReactFragment>
      <h1>Help Queue</h1>
      <img src={ticketsImage} alt="Image of a ticket" />
    </ReactFragment>
  );
}

export default Header;