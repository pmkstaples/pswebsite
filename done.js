import React from 'react';
import {Button, CardGroup, Card} from 'react-bootstrap'
import './App.css'

import tsc from './tanksscreen.png';
import ssc from './snakescreen.PNG';

class Done extends React.Component {

     render() {
         
        return (
            <Card text='light' bg='dark' border='light' id='WhatIveDone'>
            <Card.Body>
              <Card.Title>
                What I've Done
              </Card.Title>
              <Card.Text>
                <CardGroup>
                  <Card text='light' bg='dark' border='light'>
                    <Card.Title>
                      Snake
                    </Card.Title>
                    <Card.Img src={ssc} alt="Black and White segmented snake beside a white pellet."/>
                    <Card.Text>
                      <div className="Desc">
                      A simple Snake game designed and built from scratch in the Godot engine. Chose this type of game
                      because of a relatively simple scope, useful for learning a completely new engine and language. 
                      </div>
                    </Card.Text>
                    <br />
                    <Button variant='secondary' size='sm' href='https://github.com/pmkstaples/Snake-Godot-/tree/master/SnakeExecutables'>Play Snake!</Button>
                  </Card>
                  <Card text='light' bg='dark' border='light'>
                    <Card.Title>
                      Tanks!
                    </Card.Title>
                    <Card.Img src={tsc} alt="Two tanks facing each other on a plane, with a scoreboard along the top." />
                    <Card.Text>
                      <div className='Desc'>
                      An easy Battle Tanks style game built from the ground up in C and 68000 Assembly, on an Atari-ST Emulator. Every piece of this game and engine were built specifically
                      to bypass any OS-level work and directly interface with all levels of hardware, including rendering, sound playback and custom interrupts.
                      </div>
                    </Card.Text>
                    <br />
                    <Button variant='secondary' size='sm' href='https://github.com/pmkstaples/Tanks-Game'>Source Code (GitHub)</Button>
                  </Card>
                </CardGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        )
    }
}

export default Done;