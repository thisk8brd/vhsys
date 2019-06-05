import React from "react";

import img from "./../assets/images/clients.png";

function Clients(props) {
  return (
    <section className="clients">
      <div className="container clients__container">
        <img src={img} alt="Clients" className="clients__image" />
      </div>
    </section>
  );
}

export default Clients;
