import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const [callum, setCallum] = useState();

  useEffect(() => {
    const widht = window.innerWidth;
    const func = () => {
      if (widht < 576) {
        return 1;
      } else {
        return 3;
      }
    };

    setCallum(func());
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));

      console.log(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Our vegetarian Picks</h3>
        <Splide
          options={{
            perPage: callum,
            arrows: false,
            // pagination: false,
            drag: "free",
            gap: "3rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={'recipe/'+recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
                  </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  border-radius: 2rem;
  min-height: 15rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: absolute;
    object-fit: cover;
    left: 0;
    height: 100%;
    width: 100%;
  }
  p {
    z-index: 10;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Veggie;
