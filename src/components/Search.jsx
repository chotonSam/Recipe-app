import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandle = (e) => {
    e.preventDefault();
    navigate("searched/" + input);
  };
 
  
  return (
    <FormStyle onSubmit={submitHandle}>
      <FaSearch />
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        value={input}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0 auto;
  width: 50%;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
}
  input {
    background: linear-gradient(35deg, #494949, #313131);
    padding: 0.8rem 3rem;
    border: none;
    outline: none;
    border-radius: 1rem;
    font-size: 1rem;
    color: white;
    width: 100%;
  }
  svg {
    position: absolute;
    color: white;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
`;
export default Search;
