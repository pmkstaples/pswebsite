import React from 'react';
import {Card} from 'react-bootstrap';
import './App.css';

class What extends React.Component {

    render () {

        return (
            <Card text='light' bg='dark' border='light' id='WhatIDo'>
                <Card.Body>
                    <Card.Title>
                        What I Do
                    </Card.Title>
                    <Card.Text>
                        <ul>
                            <li> Web Developer (HTML/CSS/JavaScript/React)</li>
                            <div className="Desc">
                                Recently diving into the world of web-based projects and the magic of React. 
                                First project was this very website.
                            </div>
                            <li> Game Developer (C++/Godot+GDScript)</li>
                            <div className="Desc">
                                My favourite activity, coding and designing games is my passion. 
                                Built a few small games, and currently working on a rudimentary engine for personal use
                            </div>
                            <li> Team Player</li>
                            <div className="Desc">
                                Spent most of my life working in environments that require coordination and team work. This has taught me excellent communication
                                and mediation skills. Keeping a team moving in a unified direction with minimal friction.
                            </div>
                            <li>Generalist</li>
                            <div className="Desc">
                                In any position I've been in, I take pride in learning enough to be able to fill any role, making myself as valuable as possible. Having someone 
                                to fill any gaps in a team keeps everything smooth and timely. 
                            </div>
                        </ul>
                    </Card.Text>
                </Card.Body>
          </Card>
        )
    }
}

export default What;