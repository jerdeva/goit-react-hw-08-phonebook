import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  font-size: 28px;
  color: #a01313;
  /* margin-bottom:8px; */
  :active {
    color: #e84a5f;
  }
`;

export const NavSt = styled.nav`
  margin: 20px 0;
  display: flex;
  justify-content: space-around;
`;