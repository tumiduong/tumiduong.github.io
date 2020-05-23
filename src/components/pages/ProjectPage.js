import React from 'react';
import Nav from '../ui/Nav'
import ContactMe from '../ui/ContactMe'
import styled from 'styled-components';

export default function ProjectPage() {
    return (
        <Wrapper>
            <Nav/>
            <div></div>
            <ContactMe/>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    margin-top: 200px;
`