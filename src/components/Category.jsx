import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Category = () => {
  return (
    <List>
      <SLink to={"cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.5rem 0rem;
  grid-gap: 1rem;
  @media (max-width: 768px) { 
    grid-gap: 0rem;
   }
`;
const SLink = styled(NavLink)`
  display: flex;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  background: linear-gradient(35deg, #494949, #313131);
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(0.7);
  h4 {
    color: white;
    font-size: .8rem;
  }
  svg {
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
