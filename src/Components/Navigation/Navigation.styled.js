import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div` 
  display: flex;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
`;
export const Link = styled(NavLink)` 
  display: block;
  gap: 15px;
  text-transform: uppercase;
  color: #1976d2;
  font-weight: 400;
  text-decoration: none;
  position: relative;
  &:after {content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1976d2;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out}
    &:hover:after, &.active:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
export const Nav = styled.nav` 
  display: flex;
  gap: 15px
`;