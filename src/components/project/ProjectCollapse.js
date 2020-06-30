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
                    <p>{props.description}</p>
                    {props.live && <a className='live-link' href={props.live}>LIVE</a>}
                    <a href={props.repo}><img src={props.image} alt={props.project}/></a>
                   </div>
                </Collapse>
            </div>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    width: 850px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;

    .collapse-content {
        background: white;
        border-radius: 0 0 5px 5px;
        border: 1px #EBEDE6 solid;
        padding: 15px;

        .live-link {
            font-weight: bold;
            text-decoration: none;
            color: #70A9A1;

            &:hover {
                color: #007C77;
            }
        }

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

    @media (max-width: 992px) {
        width: 700px;
    }

    @media (max-width: 768px) {
        width: 500px;
    }

    @media (max-width: 576px) {
        width: 350px;

        .project-name {
            font-size: 14px;

            .project-stack {
                font-size: 10px;
            }
        }
    }
`