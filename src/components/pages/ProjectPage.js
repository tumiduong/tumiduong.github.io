import React, { useState } from 'react';
import Nav from '../ui/Nav';
import ContactMe from '../ui/ContactMe';
import styled from 'styled-components';
import ProjectCollapse from '../project/ProjectCollapse';

export default function ProjectPage() {
    const [projectOpen, setProjectOpen] = useState('Mnemosyne');

    const toggle = (project) => {
        if (project === projectOpen) {
            setProjectOpen('')
        } else {
            setProjectOpen(project)
        }
    }

    console.log(projectOpen)
    return (
        <Wrapper>
            <Nav/>
            <div className='project-container'>
                <ProjectCollapse 
                    toggle={toggle}
                    project='Mnemosyne'
                    stack='ReactJS, Node.js, Express, Knex.js'
                    description='Flash card application that lets a user learn and memorize any subject. The user can create custom cards with animated pictures, or create English cards where a dictionary definition and a related visual are fetched automatically. The user can then practice their decks in the game mode.'
                    image='https://raw.githubusercontent.com/tumiduong/Mnemosyne/master/docs/screenshots/landing.png'
                    repo='https://github.com/tumiduong/Mnemosyne'
                    isOpen={projectOpen === 'Mnemosyne'}
                />
                <ProjectCollapse 
                    toggle={toggle}
                    project='Memo'
                    stack='PostgreSQL, Express, Ajax'
                    description='Make learning easier with Memo! A site that lets you explore all your educational interests, sorting resourceful posts into collections.'
                    image='https://raw.githubusercontent.com/JCyan90/Memo/master/docs/main-page.png'
                    repo='https://github.com/tumiduong/Memo'
                    isOpen={projectOpen === 'Memo'}
                />
                <ProjectCollapse 
                    toggle={toggle}
                    project='Jungle'
                    stack='Ruby, Rails'
                    description='A mini e-commerce application built with Rails 4.2.'
                    image='https://raw.githubusercontent.com/tumiduong/jungle/master/docs/home-page.png'
                    repo='https://github.com/tumiduong/jungle'
                    isOpen={projectOpen === 'Jungle'}
                />
                <ProjectCollapse 
                    toggle={toggle}
                    project='Scheduler'
                    stack='React, Jest, Cypress, Storybook'
                    description='Book and cancel your appointments easily with this Interview Scheduler.'
                    image='https://raw.githubusercontent.com/tumiduong/scheduler/master/docs/add-appointment.png'
                    repo='https://github.com/tumiduong/scheduler'
                    isOpen={projectOpen === 'Scheduler'}
                />
                <ProjectCollapse 
                    toggle={toggle}
                    project='Meowter'
                    stack='jQuery, Ajax, Node, Express'
                    description='Meowter is a simple, single-page Twitter clone.'
                    image={'./meowter.png'}
                    repo='https://github.com/tumiduong/meowter'
                    isOpen={projectOpen === 'Meowter'}
                />
                <ProjectCollapse 
                    toggle={toggle}
                    project='TinyApp'
                    stack='Node.js, Express'
                    description='TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).'
                    image={'./tinyapp.png'}
                    repo='https://github.com/tumiduong/tinyapp'
                    isOpen={projectOpen === 'TinyApp'}
                />
            </div>
            <ContactMe/>
        </Wrapper>
        
    )
}

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #545E56;
    margin-top: 100px;
    padding: 20px calc(20px - (100vw - 100%)) 20px 0px;

    .project-container {
        width: 750px;
        margin: auto;
    }
`