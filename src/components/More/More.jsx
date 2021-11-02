import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="divider">
        <span>Languages</span>
      </div>
      <div className="box">
        <p>🎤 {languages.language}</p>
      </div>
      <div className="divider">
        <span>Skills</span>
      </div>
      <div className="box">
        {habilities.map((txt) => (
          <p>🤍 {txt}</p>
        ))}
      </div>
      <div className="divider">
        <span>Volunteer</span>
      </div>
      <div className="box">
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">❤️ {item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
