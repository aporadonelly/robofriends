import React from "react";
import "tachyons";

const Card = ({ name, email, id }) => {
  return (
    <>
      <div
        key={id}
        className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      >
        <img alt="pix" src="https://robohash.org/test?200x200" />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </>
  );
};
export default Card;
