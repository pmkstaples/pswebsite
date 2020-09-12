import React from 'react';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import {Card} from 'react-bootstrap';

class Contact extends React.Component {

    render() {
        
        return (
            <Card text='light' bg='dark' border='light' id='contactInfo'>
                <Card.Body>
                    <Card.Title>
                        Where To Find Me
                    </Card.Title>
                    <Card.Text>
                        <SocialMediaIconsReact icon="linkedin" url="https://www.linkedin.com/in/paul-s-3398a0a3/" borderColor='black' size="38" iconSize='7' />
                        <SocialMediaIconsReact icon="github" url="https://github.com/pmkstaples" borderColor='black' size='38' iconSize='7'/>
                        <SocialMediaIconsReact icon="mail" url="mailto:pmkstaples@gmail.com" borderColor='black' size='38' iconSize='7'backgroundColor='black' />
                    </Card.Text>
                </Card.Body>
          </Card>
        )
    }
}

export default Contact;