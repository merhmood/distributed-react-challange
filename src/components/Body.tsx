import React from "react";
import "../assets/css/body.css";

type BodyProps = {
  title: string;
};

const Body = ({ title }: BodyProps) => {
  return (
    <div className="body">
      <h1>{title}</h1>
    </div>
  );
};

export default Body;
