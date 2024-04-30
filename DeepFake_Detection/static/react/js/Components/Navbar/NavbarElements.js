import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

const NavLink = styled(Link) `
    color: white;
    text-decoration: none;
    border: none;
    &.active {
        color: #16F7FA;
        text-decoration: underline;    
    }
`;


export default NavLink;