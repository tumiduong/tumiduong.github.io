import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

export default function Nav() {
    return (
        <NavWrapper>
            <NavLink exact to='/'>ABOUT</NavLink>
            <NavLink to='/projects'>PROJECTS</NavLink>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    z-index: 5;
    height: 90px;
    width: 100%;
    background-color: #D3E1DB;
    padding: 20px calc(20px - (100vw - 100%)) 20px 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0;

    a {
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        color: #545E56;
        font-size: 20px;

        &:hover:after {
            color: #70A9A1;
            width: 100%;
        }

        &.active {
            color: #70A9A1;

            &:after {
                width: 100%;
            }
        }

        &:after {
            margin: auto;
            content: '';
            display: block;
            width: 0px;
            height: 2px;
            background: #70A9A1;
            transition: width .5s;
        }
    }
`
