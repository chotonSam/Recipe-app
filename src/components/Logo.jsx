import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Nav>
      <GiKnifeFork />
      <Text to="/">deliciousss</Text>
    </Nav>
  );
};

const Text = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
padding: 2.5rem 0 2rem 0;
display: flex;
justify-content: start;
align-items: center;

svg{
    font-size: 1.7rem;
}
`;
export default Logo;
