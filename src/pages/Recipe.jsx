import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("Instructions");

  const fetchDetails = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const dataDetail = await data.json();
    setDetails(dataDetail);
    console.log(dataDetail);
  };

  useEffect(() => {
    fetchDetails(params.name);
    console.log(params.name);
  }, [params.name]);
  return (
    <DetailWraper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="details.title" />
      </div>
      <Info>
        <Button
          className={activeTab === "Instructions" ? "active" : ""}
          onClick={() => setActiveTab("Instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "Ingredients" ? "active" : ""}
          onClick={() => setActiveTab("Ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "Instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "Ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWraper>
  );
};

const DetailWraper = styled(motion.div)`
  margin: 5rem 0 1rem 0;
  display: flex;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: start;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2;
    line-height: 2.5;
    list-style-position: inside
  }
  ul {
    margin-top: 2rem;
    /* margin-left: 1rem; */
    
  }
  img {
    width: 30rem;
    @media (max-width: 1340px) {
      width: 25rem;
    }
    @media (max-width: 1555px) {
      width: 20rem;
    }
    @media (max-width: 1200px) {
      width: 100%;
  }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  @media (max-width: 1555px) {
    padding: 0.8rem 1.5em;
  }
  color: #313131;
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  margin-right: 2rem;
  @media (max-width: 576px) {
    margin-right: 1rem;
  }
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
  @media (max-width: 1200px) {
    margin-left: 0rem;
    margin-top: 3rem;
  }
`;

export default Recipe;
