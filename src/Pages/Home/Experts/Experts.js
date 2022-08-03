import React from 'react';
import experts1 from '../../../Images/experts/expert-1.jpg'
import experts2 from '../../../Images/experts/expert-2.jpg'
import experts3 from '../../../Images/experts/expert-3.jpg'
import experts4 from '../../../Images/experts/expert-4.jpg'
import experts5 from '../../../Images/experts/expert-5.jpg'
import experts6 from '../../../Images/experts/expert-6.png'
import Expert from '../Expert/Expert';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';


const experts = [
    { id: 1, name: 'oyes', img: experts1 },
    { id: 2, name: 'mizan', img: experts2 },
    { id: 3, name: 'kamrul', img: experts3 },
    { id: 4, name: 'talha', img: experts4 },
    { id: 5, name: 'kader', img: experts5 },
    { id: 6, name: 'hozifa', img: experts6 }
]

const Experts = () => {

    return (
        <Container>
            <h2 className='text-primary text-center my-5'>Our Expert Team Member</h2>
            <Row>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </Row>
        </Container>
    );
};

export default Experts;