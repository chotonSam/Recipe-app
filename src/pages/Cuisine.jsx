import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );

    const recipes = await data.json();
    setCuisine(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);
  return (
    <Grid
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .5 }}
    >
      {cuisine.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: start;
`;
const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }
  h4 {
    text-align: center;
    padding: .8rem;;
  }
  a {
    text-decoration: none;
  }
`;
export default Cuisine;
