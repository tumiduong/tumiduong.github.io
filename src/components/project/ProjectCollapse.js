import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';

export default function ProjectCollapse(props) {
    return (
        <Wrapper>
            <div className='project-name'></div>
            <Collapse>
                {props.project}
            </Collapse>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    margin-top: 200px;
`