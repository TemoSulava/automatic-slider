import React, { useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import people from "../data";

const Person = ({ image, name, title, quote, personIndex, index, setIndex, length }) => {

  useEffect(() => {
    const result = setInterval(() => {
      setIndex(index === length - 1 ? 0 : index + 1);
    }, 3000)
      return () => {
        clearInterval(result)
      }
  }, [index])

  const nextSlide = () => {
    setIndex(index === length - 1 ? 0 : index + 1)
  }

  const prevSlide = () => {
    setIndex(index <= 0 ? length - 1 : index - 1)
  }
  
  
  let position = "nextSlide";

  if (personIndex === index) {
    position = "activeSlide";
  }

  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === people.length - 1)
  ) {
    position = "lastSlide";
  }

  return (
    <>
      <article className={position}>
        <img src={image} alt={name} className='person-img'/>
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
      </article>
      <button onClick={prevSlide} className="prev">
        {" "}
        <GrPrevious/>{" "}
      </button>
      <button  onClick={nextSlide} className="next">
        {" "}
        <GrNext />{" "}
      </button>
    </>
  );
};

export default Person;
