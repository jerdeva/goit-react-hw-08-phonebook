import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Link = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    /* color: #2a363b; */
    font-size: 28px;
    margin: 32px 46px 0 0;
    color: #EF3959;
    :active{
    color: #e84a5f;
    }
 `;

