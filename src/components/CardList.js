import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <Fragment>
      {robots.map((robot) => {
        const { id, name, img, email } = robot;
        return <Card key={id} name={name} email={email} img={img} />;
      })}
    </Fragment>
  );
};

export default CardList;
