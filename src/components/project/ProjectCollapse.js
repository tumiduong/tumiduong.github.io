import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

export default function ProjectCollapse(props) {
    const [status, setStatus] = useState(props.isOpen);

    return (
        <Wrapper>
            <div className='project-wrap'>
                <div className={`project-name ${!status ? 'closed' : ''}`} onClick={() => props.toggle(props.project)}>
                    {props.project}
                    <div className='project-stack'>{props.stack}</div>
                    <FontAwesomeIcon className={props.isOpen ? 'open' : ''} icon={faAngleDoubleDown}/>
                </div>
                <Collapse isOpen={props.isOpen}
                        onExited={() => setStatus(false)}
                        onEntering={() => setStatus(true)}>
                   <div className="collapse-content">
                    {props.description}
                    <a href={props.repo}><img src={props.image} alt={props.project}/></a>
                   </div>
                </Collapse>
            </div>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    margin-top: 5px;

    .collapse-content {
        background: white;
        border-radius: 0 0 5px 5px;
        border: 1px #EBEDE6 solid;
        padding: 15px;

        img {
            max-width: 98%;
            height: auto;
            display: block;
            margin-left: auto;
            margin-right: auto;
            border-radius: 3px;
            margin-top: 15px;
        }
    }

    .project-name {
        background: #EBEDE6;
        padding: 15px 25px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        &:not(.closed) {
            border-radius: 5px 5px 0 0;
        }

        .project-stack {
            font-size: 12px;
        }

        .fa-angle-double-down {
            transition: transform .5s ease;
            color: #545E56;
    
            &.open {
                transform: rotate(180deg);
            }
        }
    }

    @media (max-width: 576px) {
        .project-name {
            font-size: 14px;

            .project-stack {
                font-size: 10px;
            }
        }
    }
`