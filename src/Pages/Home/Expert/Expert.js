import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Expert.css'

const Expert = ({expert}) => {
    const { name, img } = expert
    return (
            <Col lg={4} md={6}>
                <Card >
                    <Card.Img variant="top rounded" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
    );
};

export default Expert;