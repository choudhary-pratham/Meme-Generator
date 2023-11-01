import React, { useEffect, useState } from "react";

export default function Form() {
  const [allmemes, setAllmemes] = useState([]);

  const [memImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllmemes(data.data.memes));
  }, []);
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allmemes.length);
    setMemeImage((prevState) => {
      return {
        ...prevState,
        randomImage: allmemes[randomNumber].url,
      };
    });
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemeImage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="Form">
      <div className="form--input">
        <input
          className="form--first--input"
          type="text"
          placeholder="Enter upper text"
          name="topText"
          value={memImage.topText}
          onChange={handleChange}
        />
        <input
          className="form--second--input"
          type="text"
          placeholder="Enter lower text"
          name="bottomText"
          value={memImage.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="form--button" onClick={handleClick}>
        Get a new image meme
      </button>
      <div className="meme">
        {memImage.randomImage !== "" && (
          <img src={memImage.randomImage} alt="" className="meme--image" />
        )}
        {memImage.randomImage !== "" && (
          <p className="meme--upper">{memImage.topText}</p>
        )}
        {memImage.randomImage !== "" && (
          <p className="meme--lower">{memImage.bottomText}</p>
        )}
      </div>
    </div>
  );
}
