import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    font-size: 28px;
    margin: 0px 46px 0 0;
    color: #EF3959;
    :active{
    color: #e84a5f;
    }
 `;

