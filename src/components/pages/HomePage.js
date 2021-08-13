import React from 'react';
import styled from 'styled-components';
import Nav from '../ui/Nav';
import ContactMe from '../ui/ContactMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HomePage() {
    return (
        <Wrapper>
            <Nav/>
            <div className='home-page'>
                <div className='name'>Julie Duong</div>
                <div className='title'>Web Developer</div>
                <div className='links'>
                    <span className='line-deco'/>
                    <a href="https://github.com/tumiduong"><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a>
                    <a href="https://www.linkedin.com/in/tumiduong"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/></a>
                    <span className='line-deco'/>
                </div>
                <div className='stack-list'>
                    <ul className='list'>
                        <li className='list-title'>Languages</li>
                        <li className='list-item'>Javascript</li>
                        <li className='list-item'>HTML5</li>
                        <li className='list-item'>CSS3</li>
                        <li className='list-item'>Ruby</li>
                    </ul>
                    <ul className='list'>
                        <li className='list-title'>Frameworks & Libraries</li>
                        <li className='list-item'>ReactJS</li>
                        <li className='list-item'>Redux</li>
                        <li className='list-item'>Node.js</li>
                        <li className='list-item'>Express</li>
                        <li className='list-item'>Vue.js</li>        
                        <li className='list-item'>Vuex</li>   
                        <li className='list-item'>GraphQL</li>  
                        <li className='list-item'>jQuery</li>
                        <li className='list-item'>Rails</li>
                    </ul>
                    <ul className='list'>
                        <li className='list-title'>Systems & Databases</li>
                        <li className='list-item'>Git</li>
                        <li className='list-item'>PostgreSQL</li>
                    </ul>
                    <ul className='list'>
                        <li className='list-title'>Other</li>
                        <li className='list-item'>Photoshop</li>
                    </ul>
                </div>
                <div className='about-me'>
                    <p>I am a full-stack web developer based in Montreal, with a background in retail and cosmetics.</p>
                </div>
            </div>
            <ContactMe/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;

    .home-page {
        padding: 20px calc(20px - (100vw - 100%)) 20px 20px;
        margin-top: 200px;
        color: #545E56;
        text-align: center;

        .name {
            font-family: 'Poppins', sans-serif;
            font-size: 80px;   
        }
    
        .title {
            font-size: 20px;
        }

        .links {
            margin-top: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            width: 100%;

            .line-deco {
                width: 40%;
                
                &:before {
                    content: '';
                    display: block;
                    height: 1px;
                    background-color: #545E56;
                    margin: 15px;
                }
            }

            a {
                color: inherit;
                padding: 5px;

                &:hover {
                    color: #70A9A1;
                }
            }
        }

        .stack-list {
            margin-top: 100px;
            display: flex;
            justify-content: center;
            font-size: 15px;

            .list {
                list-style-type: none;
                padding: 0px 25px;

                .list-title {
                    font-weight: 700;
                    margin-bottom: 5px;
                }
            }
        }

        .about-me {
            margin: 50px 0 100px 0;
            padding: 0px 25px;
        
            a {
                color: #70A9A1;
                text-decoration: none;
            }
        }
    }

    @media (max-width: 768px) {
        .home-page {
            .name {
                font-size: 60px;
            }

            .title {
                font-size: 16px;
            }

            .stack-list {
                font-size: 14px;

                .list {
                    padding: 0px 15px;
                }
            }

            .about-me {
                font-size: 14px;
            }
        }
    }

    @media (max-width: 576px) {
        .home-page {
            .name {
                font-size: 50px;
            }

            .stack-list {
                font-size: 12px;
            }
        }
    }
    
`