import React from "react";
import "../Hero/Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="box">
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <p>๐{hero.city} </p>
        <p>๐{hero.birthDate}</p>
        <p>
        โ๏ธ
          <a href={"mailto:" + hero.email}>meritxey@gmail.com</a>
        </p>
        <p>๐ {hero.phone}</p>
        <p>
        ๐งท<a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
