import React, { useState, useEffect } from 'react';
import './MainPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Mainpage() {
    const [showI, setShowinto] = useState(false);
  const [showLove, setShowthree] = useState(false);
  const [showYou, setShowKeypoints] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowinto(true), 500);
        const timer2 = setTimeout(() => setShowthree(true), 1200);
        const timer3 = setTimeout(() => setShowKeypoints(true), 1800);
        return () => {
          clearTimeout(timer1);
          clearTimeout(timer2);
          clearTimeout(timer3);
        };
      }, [])
    return (
        <>
            <Container fluid >
                <Row className='height-row'>
                    <Col md={7} className='bg-color'>
                        <h2 className='color-Heading'>ChatGPT</h2>
                        <Row className='animation-row'>
                            <h2 className='color-Heading ms-4 fw-bold'>Summarize the Article
                                <p>
                                    <span style={{ opacity: showI ? 1 : 0 }}>into</span>
                                    <span style={{ opacity: showLove ? 1 : 0 }}> three</span>
                                    <span style={{ opacity: showYou ? 1 : 0 }}> KeyPoints</span>
                                </p>
                            </h2>
                        </Row>
                    </Col>
                    <Col md={5} className='bg-color2'>
                        <Row className='animation-row'>
                            <div className='text-center mt-5'>
                                <span className="text-white text-center fw-bold h2 mb-4">Get Started</span>
                                <div className='mt-4'>
                                    <Link to="/login" className='text-decoration-none'>
                                        <Button variant="primary" className='w-25 me-4 p-2 fs-5'>Login</Button>{' '}
                                    </Link>
                                    <Link to="/signup" className='text-decoration-none'>
                                        <Button variant="primary" className='w-25 ms-4 p-2 fs-5'>SignUp</Button>{' '}
                                    </Link>

                                </div>
                            </div>
                        </Row>

                        <div className='text-white text-center mt-4 mb-2 d-flex justify-content-center'>
                            <p className="text-center pe-2 mb-0">
                                <FontAwesomeIcon icon={faReact} className='fs-5 ' />
                            </p>
                            <p className="text-center mb-0">OpenAi</p>
                        </div>

                        <div className='text-center'>
                            <a href="#" className="mx-2 links">Terms of use</a>
                            <a href="#" className="mx-2 links">Terms of use</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
