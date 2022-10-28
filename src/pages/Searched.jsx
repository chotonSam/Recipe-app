import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
const Searched = () => {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );

    const recipes = await data.json();
    setSearchedRecipe(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {searchedRecipe.map((item) => {
        return (
          <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
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
  text-decoration: none;
`;
const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 100%;
  }
  h4 {
    text-align: center;
    padding: 0.8rem;
  }
  a {
    text-decoration: none;
  }
`;
export default Searched;
