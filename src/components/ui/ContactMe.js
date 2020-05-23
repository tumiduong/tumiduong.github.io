import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function ContactMe() {
    return (
        <FooterWrapper>
            <div className='contacts'>
                <div><FontAwesomeIcon icon={faMapMarkerAlt} size="1x"/> Montreal, QC</div>
                <a href="https://github.com/tumiduong"><FontAwesomeIcon icon={['fab', 'github']} size="1x"/> tumiduong</a>
                <a href="https://www.linkedin.com/in/tumiduong"><FontAwesomeIcon icon={['fab', 'linkedin']} size="1x"/> tumiduong</a>
                <a href="mailto:duong.julie@live.com" className='email'><FontAwesomeIcon icon={faEnvelopeSquare} size="1x"/> duong.julie@live.com</a>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    margin: 50px auto 20px auto;
    border-top: 1px solid #545E56;
    width: 80%;
 
    .contacts {
        margin: 20px 0 20px 0;
        border-left: 1px solid #545E56;
        padding: 15px;
        float: right;
        display: flex;
        flex-direction: column;

        a, div {
            color: #545E56;
            text-decoration: none;
            font-size: 14px;
            text-align: left;
            padding: 2px;
    
            &:hover {
                color: #70A9A1;
            }

        }
    }
`
