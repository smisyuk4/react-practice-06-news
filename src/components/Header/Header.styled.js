import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: pink;
    border-bottom: 2px solid;
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;

    &.active{
        text-decoration: underline;
        color: red;
    }
`