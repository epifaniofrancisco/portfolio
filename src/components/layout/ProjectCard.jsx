import React from 'react'
import { Card, CardImg, Row, Col } from 'react-bootstrap'
import ButtonIconLeft from '../buttons/ButtonIconLeft'

function ProjectCard({ image, alt, github, previewLink, title }) {
  return (
    <Col md={4}>
        <Card className="">
            <CardImg src={image} alt={alt} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Row className='justify-content-between'>
                        <div className="col-md-6">
                            <ButtonIconLeft link={previewLink} iconName="eye-outline" text="Preview" />
                        </div>
                        
                        <div className="col-md-6 button-left-icon--github">
                            <ButtonIconLeft link={github} iconName="logo-github" text="GitHub" />
                        </div>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default ProjectCard