import React from 'react'
import './InputPrompt2.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function InputPrompt2() {
    return (
        <>
            <Container fluid style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

                <Row className="mt-3">
                    <Col>
                        <Navbar variant="dark">
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="ChatGPT 3.5"
                                className='fw-bold w-100'
                            >
                                <NavDropdown.Item href="# " className="my-2 me-2 pe-3">
                                    <Row className=' align-items-center px-2 row-hover'>
                                        <Col md={1} className='pe-0 text-light'>
                                            <FontAwesomeIcon icon={faStarOfLife} />
                                        </Col>
                                        <Col md={10} className='ps-3 text-light'>
                                            <span className='fw-bold'>GPT-3.5</span>
                                            <p className='mb-0' style={{ fontSize: '12px', color: '#898A91' }}>Great for everyday tasks</p>
                                        </Col>
                                        <Col md={1} className='pe-0 text-light'>
                                            <FontAwesomeIcon icon={faStarOfLife} />
                                        </Col>
                                    </Row>
                                </NavDropdown.Item>

                                <NavDropdown.Item href="# " className="me-2 pe-3">
                                    <Row className=' align-items-center px-2 text-light'>
                                        <Col md={1} className='pe-0'>
                                            <FontAwesomeIcon icon={faStarOfLife} />
                                        </Col>
                                        <Col md={10} className='ps-3'>
                                            <span className='fw-bold'>GPT-4</span>
                                            <p className='mb-0' style={{ fontSize: '12px', color: '#898A91' }}>Our Smartest and Most Capable model.</p>
                                            <p className='mb-0' style={{ fontSize: '12px', color: '#898A91' }}>Includes DALL-E, browsing, and more.</p>
                                        </Col>
                                        <Col md={1} className='pe-0'>
                                            <FontAwesomeIcon icon={faStarOfLife} />
                                        </Col>
                                    </Row>
                                </NavDropdown.Item>
                                <Row className='text-center d-flex mx-auto w-75 px-0 my-3'>
                                    <Button variant="primary" className="text-center">Upgrade</Button>{' '}
                                </Row>
                            </NavDropdown>
                        </Navbar>
                    </Col>
                </Row>

                <Row className="flex-grow-1 align-items-center">
                    <div className='text-center my-5'>
                        <FontAwesomeIcon icon={faReact} className='fs-1 mb-3' />
                        <h4 className='fw-bold mb-0'>How can I help you today?</h4>
                    </div>

                    <Col className="mt-auto mx-5">
                        <Row className="mx-5 mb-2">
                            <Col md={6} className="ps-0">
                                <Card>
                                    <Row className='justify-content-between icon-hidden'>
                                        <Col md={10} className='py-2'>
                                            <p className='mb-0 px-3 heading'>Create a workout plan</p>
                                            <p className='mb-0 px-3 sub-heading'>for resistance training</p>
                                        </Col>

                                        <Col md={2} className='text-center d-flex justify-content-center align-items-center'>
                                            <FontAwesomeIcon icon={faUpload} className="icon" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={6} className="px-0">
                                <Card>
                                    <Row className='justify-content-between icon-hidden'>
                                        <Col md={10} className='py-2'>
                                            <p className='mb-0 px-3 heading'>Design a database schema</p>
                                            <p className='mb-0 px-3 sub-heading'>for an online merch store</p>
                                        </Col>

                                        <Col md={2} className='text-center d-flex justify-content-center align-items-center'>
                                            <FontAwesomeIcon icon={faUpload} className="icon" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mx-5 mb-1">
                            <Col md={6} className="ps-0">
                                <Card>
                                    <Row className='justify-content-between icon-hidden'>
                                        <Col md={10} className='py-2'>
                                            <p className='mb-0 px-3 heading'>Design a database schema</p>
                                            <p className='mb-0 px-3 sub-heading'>for an online merch store</p>
                                        </Col>

                                        <Col md={2} className='text-center d-flex justify-content-center align-items-center'>
                                            <FontAwesomeIcon icon={faUpload} className="icon" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={6} className="px-0">
                                <Card>
                                    <Row className='justify-content-between icon-hidden'>
                                        <Col md={10} className='py-2'>
                                            <p className='mb-0 px-3 heading'>Suggest fun activities</p>
                                            <p className='mb-0 px-3 sub-heading'>for a family of 4 to do indoors on a rainy day</p>
                                        </Col>

                                        <Col md={2} className='text-center d-flex justify-content-center align-items-center'>
                                            <FontAwesomeIcon icon={faUpload} className="icon" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <div className="mx-5 pt-2 text-white text-center">
                            <Form.Group>
                                <Form.Control type="email" placeholder="Message CHATGPT..." />
                            </Form.Group>
                        </div>

                        <div className="mx-5 my-1 text-white text-center">
                            <span className='font-size'>ChatGPT can make mistakes. Consider checking important information.</span>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
