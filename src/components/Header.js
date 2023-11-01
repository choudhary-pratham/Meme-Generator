import React from "react";
import image from "../images/troll-face.png";
export default function Header() {
  return (
    <div className="header">
      <img className="header--image" src={image} alt="" />
      <h2 className="header--name">Meme Generator</h2>
    </div>
  );
}
