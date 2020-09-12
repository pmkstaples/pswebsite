import React from 'react';
import {Card} from 'react-bootstrap';
import img from './croppedface.jpg';
import './App.css';

class Who extends React.Component {

render () {

        return(
            <Card text='light' bg='dark' border='light' id='WhoIAm'>
                <Card.Img variant="top" src={img} alt="Extremely Handsome Man" />
                <Card.Body>
                    <Card.Title text='info'>
                        Who I Am
                    </Card.Title>
                    <Card.Text className='Who'>
                        <p>
                        Calgary man, born and raised. Mount Royal University and 
                        University of Calgary alumnus for Computer Science and Sociology. Love learning, growing and
                        having new experiences. Tech enthusiast. Team work makes the dream work.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Who;