import React from 'react';
import styled from 'styled-components';
import Nav from '../ui/Nav';

export default function HomePage() {
    return (
        <Wrapper>
            <Nav/>
            <div className='home-page'>
                <div className='name'>Julie Duong</div>
                <div className='title'>Web Developer</div>
                <div className='about'></div>
            </div>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;

    .home-page {
        margin-top: 100px;
        color: #545E56;
        text-align: center;

        .name {
            font-family: 'Poppins', sans-serif;
            font-size: 80px;   
        }
    
        .title {
            font-size: 20px;
        }
    }
    
`